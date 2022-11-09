import { useEffect } from 'react'
import { GameRotation, Status, TrainingMode } from '../../types'

interface GameLoopProps {
	rotation: GameRotation
	setPhaseIndex: (phaseIndex: number) => void
	setStatus: (status: Status) => void
	setTime: (time: number) => void
	trainingMode: TrainingMode
}

const GameLoop: React.FC<GameLoopProps> = ({
	rotation,
	setPhaseIndex,
	setStatus,
	setTime,
	trainingMode
}) => {
	useEffect(() => {
		const startedAt = Date.now()
		const timer = setInterval(() => {
			const msPassed = Date.now() - startedAt
			setTime(msPassed)
		}, 100)

		const timeouts: ReturnType<typeof setTimeout>[] = []

		for (const phase of rotation.phases) {
			const phaseTimeoutTime =
				trainingMode === TrainingMode.PlayAlong
					? phase.startedAt - rotation.startedAt
					: phase.index * 8000
			const phaseTimeout = setTimeout(() => {
				setPhaseIndex(phase.index)
			}, phaseTimeoutTime)
			timeouts.push(phaseTimeout)
		}

		const lastPhase = rotation.phases[rotation.phases.length - 1]
		const rotationTimeoutTime =
			trainingMode === TrainingMode.PlayAlong
				? lastPhase.startedAt + lastPhase.duration - rotation.startedAt
				: rotation.phases.length * 8000
		const rotationTimeout = setTimeout(() => {
			setStatus(Status.Menu)
		}, rotationTimeoutTime)
		timeouts.push(rotationTimeout)

		return () => {
			clearInterval(timer)

			for (const timeout of timeouts) {
				clearTimeout(timeout)
			}
		}
	}, [rotation, setPhaseIndex, setStatus, setTime, trainingMode])

	return null
}

export default GameLoop

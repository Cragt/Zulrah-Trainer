import { useEffect, useState } from 'react'
import { ButtonBase, Grow } from '@mui/material'
import {
	GameRotation,
	Status,
	TrainingMode,
	ZulrahForm,
	ZulrahPosition
} from '../../types'

interface ZulrahProps {
	phaseIndex: number
	rotation: GameRotation
	setPlayerAttacking: (playerAttacking: boolean) => void
	setZulrahAttacking: (zulrahAttacking: boolean) => void
	status: Status
	trainingMode: TrainingMode
}

const Zulrah: React.FC<ZulrahProps> = ({
	phaseIndex,
	rotation,
	setPlayerAttacking,
	setZulrahAttacking,
	status,
	trainingMode
}) => {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		if (status === Status.Playing && rotation.phases[phaseIndex]) {
			setVisible(true)
			setZulrahAttacking(false)

			const surfaceTimeout = setTimeout(() => {
				setZulrahAttacking(true)
			}, 2000)

			// Dive after the duration has passed, the next phase will trigger the raise again (by the game-loop)
			const diveTimeoutTime =
				trainingMode === TrainingMode.PlayAlong
					? rotation.phases[phaseIndex].duration - 2000
					: 8000 - 2000
			const diveTimeout = setTimeout(() => {
				setZulrahAttacking(false)
				setVisible(false)
			}, diveTimeoutTime)
			return () => {
				clearTimeout(surfaceTimeout)
				clearTimeout(diveTimeout)
			}
		}
	}, [phaseIndex, rotation.phases, setZulrahAttacking, status, trainingMode])

	const handleZulrahClick = () => {
		setPlayerAttacking(true)
	}

	let image
	if (rotation.phases[phaseIndex].zulrah.form === ZulrahForm.Magma) {
		image = '/images/zulrah-magma.png'
	} else if (rotation.phases[phaseIndex].zulrah.form === ZulrahForm.Tanzanite) {
		image = '/images/zulrah-tanzanite.png'
	} else {
		image = '/images/zulrah-serpentine.png'
	}

	let left
	let top
	if (rotation.phases[phaseIndex].zulrah.position === ZulrahPosition.Left) {
		left = '10px'
		top = '220px'
	} else if (
		rotation.phases[phaseIndex].zulrah.position === ZulrahPosition.Right
	) {
		left = '420px'
		top = '220px'
	} else if (
		rotation.phases[phaseIndex].zulrah.position === ZulrahPosition.Top
	) {
		left = '220px'
		top = '20px'
	} else {
		left = '220px'
		top = '220px'
	}

	return (
		<>
			<Grow in={status === Status.Playing && visible} timeout={2000}>
				<ButtonBase
					onClick={handleZulrahClick}
					sx={{
						position: 'absolute',
						left,
						top,
						width: '80px',
						height: '89px',
						background: `url(${image})`,
						backgroundSize: '100% 100%'
					}}
				/>
			</Grow>
		</>
	)
}

export default Zulrah

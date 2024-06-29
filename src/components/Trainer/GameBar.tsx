import { Button, Grid, Paper, Stack, Typography } from '@mui/material'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
	ActivePrayer,
	Equipment,
	GameRotation,
	Status,
	Summary,
	SwitchEquipment
} from '../../types'

interface GameBarProps {
	activePrayer: ActivePrayer
	equipment: Equipment
	phaseIndex: number
	playerAttacking: boolean
	position: number
	rotation: GameRotation
	setStatus: (status: Status) => void
	setSummary: (summary: Summary | null) => void
	switchEquipment: SwitchEquipment
	switchEquipmentEnabled: boolean
	time: number
	zulrahAttacking: boolean
}

const determineIsPrayerOk = (
	activePrayer: ActivePrayer,
	phaseIndex: number,
	rotation: GameRotation
) => rotation.phases[phaseIndex].player.goodActivePrayers.includes(activePrayer)

const determineIsPositionOk = (
	position: number,
	phaseIndex: number,
	rotation: GameRotation
) => rotation.phases[phaseIndex].player.goodPositions.includes(position)

const determineIsEquipmentOk = (
	equipment: Equipment,
	switchEquipment: SwitchEquipment,
	phaseIndex: number,
	rotation: GameRotation
) => {
	const goodEquipmentType = rotation.phases[phaseIndex].player.goodEquipmentType
	if (switchEquipment.weapon && equipment.weapon !== goodEquipmentType) {
		return false
	}
	if (switchEquipment.offhand && equipment.offhand !== goodEquipmentType) {
		return false
	}
	if (switchEquipment.back && equipment.back !== goodEquipmentType) {
		return false
	}
	if (switchEquipment.boots && equipment.boots !== goodEquipmentType) {
		return false
	}
	if (switchEquipment.chest && equipment.chest !== goodEquipmentType) {
		return false
	}
	if (switchEquipment.legs && equipment.legs !== goodEquipmentType) {
		return false
	}
	if (switchEquipment.necklace && equipment.necklace !== goodEquipmentType) {
		return false
	}
	return true
}

const determineIsAllOk = (
	isPrayerOk: boolean,
	isPositionOk: boolean,
	isEquipmentOk: boolean,
	playerAttacking: boolean,
	zulrahAttacking: boolean,
	switchEquipmentEnabled: boolean
) =>
	(isPrayerOk &&
		isPositionOk &&
		playerAttacking &&
		(!switchEquipmentEnabled || (switchEquipmentEnabled && isEquipmentOk))) ||
	!zulrahAttacking

const GameBar: React.FC<GameBarProps> = ({
	activePrayer,
	equipment,
	phaseIndex,
	playerAttacking,
	position,
	rotation,
	setStatus,
	setSummary,
	switchEquipment,
	switchEquipmentEnabled,
	time,
	zulrahAttacking
}) => {
	const [timeFrames, setTimeFrames] = useState(0)
	const [timeFramesAllOk, setTimeFramesAllOk] = useState(0)

	const [isPrayerOk, setIsPrayerOk] = useState(
		determineIsPrayerOk(activePrayer, phaseIndex, rotation)
	)
	const [isPositionOk, setIsPositionOk] = useState(
		determineIsPositionOk(position, phaseIndex, rotation)
	)
	const [isEquipmentOk, setIsEquipmentOk] = useState(
		determineIsEquipmentOk(equipment, switchEquipment, phaseIndex, rotation)
	)
	const [isAllOk, setIsAllOk] = useState(
		determineIsAllOk(
			isPrayerOk,
			isPositionOk,
			isEquipmentOk,
			playerAttacking,
			zulrahAttacking,
			switchEquipmentEnabled
		)
	)

	useEffect(() => {
		setIsPrayerOk(determineIsPrayerOk(activePrayer, phaseIndex, rotation))
	}, [activePrayer, phaseIndex, rotation])

	useEffect(() => {
		setIsPositionOk(determineIsPositionOk(position, phaseIndex, rotation))
	}, [phaseIndex, position, rotation])

	useEffect(() => {
		setIsEquipmentOk(
			determineIsEquipmentOk(equipment, switchEquipment, phaseIndex, rotation)
		)
	}, [phaseIndex, equipment, switchEquipment, rotation])

	useEffect(() => {
		setIsAllOk(
			determineIsAllOk(
				isPrayerOk,
				isPositionOk,
				isEquipmentOk,
				playerAttacking,
				zulrahAttacking,
				switchEquipmentEnabled
			)
		)
	}, [
		playerAttacking,
		isEquipmentOk,
		isPositionOk,
		isPrayerOk,
		zulrahAttacking,
		switchEquipmentEnabled
	])

	useEffect(() => {
		if (time === 0) {
			setTimeFrames(0)
		} else {
			setTimeFrames(timeFrames + 1)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [time])

	useEffect(() => {
		if (time === 0) {
			setTimeFramesAllOk(0)
		} else if (isAllOk) {
			setTimeFramesAllOk(timeFramesAllOk + 1)
		}
		setSummary({
			rotation: rotation.key,
			score: Math.floor((timeFramesAllOk / timeFrames) * 100)
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [time])

	const handleCancelClick = useCallback(() => {
		setStatus(Status.Menu)
		setSummary(null)
	}, [setStatus, setSummary])

	const formattedTime = useMemo(() => {
		const minutes = Math.floor((time / 1000 / 60) << 0)
		const seconds = Math.floor((time / 1000) % 60)
		return `${minutes}:${seconds.toString().padStart(2, '0')}`
	}, [time])

	const zulrahSwitchingColor = zulrahAttacking ? undefined : '#0000ff'

	const prayerStatus = useMemo(() => {
		const text = isPrayerOk ? 'OK' : 'NOK'
		const color = isPrayerOk ? 'green' : 'red'
		return (
			<Grid item width="14%">
				<Stack>
					<Typography
						textAlign="center"
						variant="caption"
						color="textSecondary"
					>
						Prayer
					</Typography>
					<Typography
						textAlign="center"
						variant="h6"
						color={zulrahSwitchingColor || color}
					>
						{text}
					</Typography>
				</Stack>
			</Grid>
		)
	}, [isPrayerOk, zulrahSwitchingColor])

	const positionStatus = useMemo(() => {
		const text = isPositionOk ? 'OK' : 'NOK'
		const color = isPositionOk ? 'green' : 'red'
		return (
			<Grid item width="14%">
				<Stack>
					<Typography
						textAlign="center"
						variant="caption"
						color="textSecondary"
					>
						Position
					</Typography>
					<Typography
						textAlign="center"
						variant="h6"
						color={zulrahSwitchingColor || color}
					>
						{text}
					</Typography>
				</Stack>
			</Grid>
		)
	}, [isPositionOk, zulrahSwitchingColor])

	const equipmentStatus = useMemo(() => {
		if (switchEquipmentEnabled) {
			const text = isEquipmentOk ? 'OK' : 'NOK'
			const color = isEquipmentOk ? 'green' : 'red'
			return (
				<Grid item width="14%">
					<Stack>
						<Typography
							textAlign="center"
							variant="caption"
							color="textSecondary"
						>
							Equipment
						</Typography>
						<Typography
							textAlign="center"
							variant="h6"
							color={zulrahSwitchingColor || color}
						>
							{text}
						</Typography>
					</Stack>
				</Grid>
			)
		}
	}, [isEquipmentOk, switchEquipmentEnabled, zulrahSwitchingColor])

	const playerAttackingStatus = useMemo(() => {
		const text = playerAttacking ? 'OK' : 'NOK'
		const color = playerAttacking ? 'green' : 'red'
		return (
			<Grid item width="14%">
				<Stack>
					<Typography
						textAlign="center"
						variant="caption"
						color="textSecondary"
					>
						Attacking Zulrah
					</Typography>
					<Typography
						textAlign="center"
						variant="h6"
						color={zulrahSwitchingColor || color}
					>
						{text}
					</Typography>
				</Stack>
			</Grid>
		)
	}, [playerAttacking, zulrahSwitchingColor])

	return (
		<Paper
			sx={{
				width: '797px',
				p: '16px'
			}}
		>
			<Stack direction="column" spacing={2}>
				<Button fullWidth variant="contained" onClick={handleCancelClick}>
					Cancel
				</Button>
				<Grid container justifyContent="space-evenly">
					<Grid item width="14%">
						<Stack>
							<Typography
								textAlign="center"
								variant="caption"
								color="textSecondary"
							>
								Time
							</Typography>
							<Typography textAlign="center" variant="h6">
								{formattedTime}
							</Typography>
						</Stack>
					</Grid>
					<Grid item width="14%">
						<Stack>
							<Typography
								textAlign="center"
								variant="caption"
								color="textSecondary"
							>
								Zulrah state
							</Typography>
							<Typography textAlign="center" variant="h6">
								{zulrahAttacking ? 'Attacking' : 'Switching'}
							</Typography>
						</Stack>
					</Grid>
					{prayerStatus}
					{positionStatus}
					{equipmentStatus}
					{playerAttackingStatus}
					<Grid item width="14%">
						<Stack>
							<Typography
								textAlign="center"
								variant="caption"
								color="textSecondary"
							>
								Score
							</Typography>
							<Typography textAlign="center" variant="h6">
								{Math.floor((timeFramesAllOk / timeFrames) * 100)}%
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</Stack>
		</Paper>
	)
}

export default GameBar

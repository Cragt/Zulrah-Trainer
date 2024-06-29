import { useCallback, useEffect, useMemo, useState } from 'react'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Paper,
	Stack,
	Typography
} from '@mui/material'
import {
	ActivePrayer,
	ActiveTab,
	Equipment,
	EquipmentType,
	TrainingRotation,
	Status,
	TrainingMode,
	GameRotation,
	Summary,
	SwitchEquipment,
	Key
} from '../../types'
import TabBar from './TabBar'
import TabPage from './TabPage'
import Zulrah from './Zulrah'
import SettingsBar from './SettingsBar'
import GameBar from './GameBar'
import GameLoop from './GameLoop'
import Video from './Video'
import { rotations } from '../../util/rotations/rotations'
import Player from './Player'

const Trainer: React.FC = () => {
	const [summary, setSummary] = useState<Summary | null>(null)
	const [status, setStatus] = useState(Status.Menu)
	const [trainingMode, setTrainingMode] = useState(TrainingMode.PlayAlong)
	const [trainingRotation, setTrainingRotation] = useState(
		TrainingRotation.Random
	)
	const [switchEquipmentEnabled, setSwitchEquipmentEnabled] = useState(true)
	const [soundEnabled, setSoundEnabled] = useState(true)
	const [time, setTime] = useState(0)
	const [rotation, setRotation] = useState<GameRotation>(
		rotations[Math.floor(Math.random() * rotations.length)]
	)
	const [phaseIndex, setPhaseIndex] = useState(0)
	const [activeTab, setActiveTab] = useState(ActiveTab.Inventory)
	const [activePrayer, setActivePrayer] = useState(ActivePrayer.None)
	const [position, setPosition] = useState(0)
	const [playerAttacking, setPlayerAttacking] = useState(false)
	const [zulrahAttacking, setZulrahAttacking] = useState(false)
	const [equipment, setEquipment] = useState<Equipment>({
		weapon: EquipmentType.Magic,
		legs: EquipmentType.Magic,
		boots: EquipmentType.Magic,
		back: EquipmentType.Magic,
		chest: EquipmentType.Magic,
		necklace: EquipmentType.Magic,
		offhand: EquipmentType.Magic
	})
	const [switchEquipment, setSwitchEquipment] = useState<SwitchEquipment>({
		weapon: true,
		legs: true,
		boots: true,
		back: true,
		chest: true,
		necklace: true,
		offhand: true
	})
	const [inventoryKey, setInventoryKey] = useState(Key.F1)
	const [prayerKey, setPrayerKey] = useState(Key.F2)

	const handleCloseSummary = useCallback(() => {
		setSummary(null)
	}, [])

	const handleRestart = useCallback(() => {
		if (trainingRotation === TrainingRotation.Random) {
			const gameRotation =
				rotations[Math.floor(Math.random() * rotations.length)]
			setRotation(gameRotation)
		}

		setSummary(null)
		if (trainingMode === TrainingMode.PlayAlong) {
			setStatus(Status.Starting)
		} else {
			setStatus(Status.Playing)
		}
	}, [trainingMode, trainingRotation])

	useEffect(() => {
		if (status === Status.Menu) {
			// Reset state
			setPhaseIndex(0)
			setTime(0)
			setActiveTab(ActiveTab.Inventory)
			setActivePrayer(ActivePrayer.None)
			setPosition(0)
			setPlayerAttacking(false)
			setZulrahAttacking(false)
			setEquipment({
				weapon: EquipmentType.Magic,
				legs: EquipmentType.Magic,
				boots: EquipmentType.Magic,
				back: EquipmentType.Magic,
				chest: EquipmentType.Magic,
				necklace: EquipmentType.Magic,
				offhand: EquipmentType.Magic
			})
		}
	}, [status])

	useEffect(() => {
		setPlayerAttacking(false)
	}, [equipment, phaseIndex, position])

	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === inventoryKey) {
				setActiveTab(ActiveTab.Inventory)
				event.stopPropagation()
				event.preventDefault()
			}
			if (event.key === prayerKey) {
				setActiveTab(ActiveTab.Prayer)
				event.stopPropagation()
				event.preventDefault()
			}
		}
		window.addEventListener('keydown', handleKeydown)

		return () => {
			window.removeEventListener('keydown', handleKeydown)
		}
	}, [inventoryKey, prayerKey])

	// The action bar controls the settings before the game and the start button
	const actionBar = useMemo(
		() =>
			status === Status.Menu ? (
				<SettingsBar
					inventoryKey={inventoryKey}
					prayerKey={prayerKey}
					setInventoryKey={setInventoryKey}
					setPrayerKey={setPrayerKey}
					setRotation={setRotation}
					setSoundEnabled={setSoundEnabled}
					setStatus={setStatus}
					setSwitchEquipment={setSwitchEquipment}
					setSwitchEquipmentEnabled={setSwitchEquipmentEnabled}
					setTrainingMode={setTrainingMode}
					setTrainingRotation={setTrainingRotation}
					soundEnabled={soundEnabled}
					switchEquipment={switchEquipment}
					switchEquipmentEnabled={switchEquipmentEnabled}
					trainingMode={trainingMode}
					trainingRotation={trainingRotation}
				/>
			) : null,
		[
			inventoryKey,
			prayerKey,
			soundEnabled,
			status,
			switchEquipment,
			switchEquipmentEnabled,
			trainingMode,
			trainingRotation
		]
	)

	// The game bar controls information of the active game
	const gameBar = useMemo(
		() =>
			status !== Status.Menu ? (
				<GameBar
					activePrayer={activePrayer}
					equipment={equipment}
					phaseIndex={phaseIndex}
					playerAttacking={playerAttacking}
					position={position}
					rotation={rotation}
					setStatus={setStatus}
					setSummary={setSummary}
					switchEquipment={switchEquipment}
					switchEquipmentEnabled={switchEquipmentEnabled}
					time={time}
					zulrahAttacking={zulrahAttacking}
				/>
			) : null,
		[
			activePrayer,
			equipment,
			phaseIndex,
			playerAttacking,
			position,
			rotation,
			status,
			switchEquipment,
			switchEquipmentEnabled,
			time,
			zulrahAttacking
		]
	)

	// The game loop controls the timer and updates the phase
	const gameLoop = useMemo(
		() =>
			status === Status.Playing ? (
				<GameLoop
					rotation={rotation}
					setPhaseIndex={setPhaseIndex}
					setStatus={setStatus}
					setTime={setTime}
					trainingMode={trainingMode}
				/>
			) : null,
		[rotation, status, trainingMode]
	)

	// The tab bar controls the inventory and prayer tab buttons
	const tabBar = useMemo(
		() => <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />,
		[activeTab]
	)

	// The tab page controls the inventory and prayer tabs
	const tabPage = useMemo(
		() => (
			<TabPage
				activePrayer={activePrayer}
				activeTab={activeTab}
				equipment={equipment}
				setActivePrayer={setActivePrayer}
				setEquipment={setEquipment}
			/>
		),
		[activeTab, activePrayer, equipment]
	)

	const zulrah = useMemo(
		() => (
			<Zulrah
				phaseIndex={phaseIndex}
				rotation={rotation}
				setPlayerAttacking={setPlayerAttacking}
				setZulrahAttacking={setZulrahAttacking}
				status={status}
				trainingMode={trainingMode}
			/>
		),
		[phaseIndex, rotation, status, trainingMode]
	)

	const player = useMemo(
		() => (
			<Player
				activePrayer={activePrayer}
				position={position}
				setPosition={setPosition}
			/>
		),
		[activePrayer, position]
	)

	const video = useMemo(() => {
		if (trainingMode === TrainingMode.PlayAlong) {
			return (
				<Video
					rotation={rotation}
					setStatus={setStatus}
					soundEnabled={soundEnabled}
					status={status}
				/>
			)
		}
		return null
	}, [rotation, soundEnabled, status, trainingMode])

	return (
		<>
			<Dialog
				open={Boolean(status === Status.Menu && summary)}
				onClose={handleCloseSummary}
			>
				<DialogContent>
					<Stack direction="row" justifyContent="space-around" spacing={2}>
						<Stack>
							<Typography textAlign="center" variant="h6" color="textSecondary">
								Rotation
							</Typography>
							<Typography textAlign="center" variant="h4">
								{summary &&
									`${summary.rotation[0]}${summary.rotation
										.slice(1)
										.toLowerCase()}`}
							</Typography>
						</Stack>
						<Stack>
							<Typography textAlign="center" variant="h6" color="textSecondary">
								Score
							</Typography>
							<Typography textAlign="center" variant="h4">
								{summary && summary.score}%
							</Typography>
						</Stack>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Stack
						sx={{ width: '100%' }}
						direction="row"
						justifyContent="space-around"
						spacing={2}
					>
						<Button onClick={handleRestart}>Restart</Button>
						<Button onClick={handleCloseSummary}>Close</Button>
					</Stack>
				</DialogActions>
			</Dialog>
			<Stack display="flex" alignItems="center" spacing={1} pt={1} pb={3}>
				<Typography variant="h3">ZulrahTrainer.com</Typography>
				<Typography variant="subtitle2" color="textSecondary">
					Learn all Zulrah rotations including prayer and equipment switches.
				</Typography>
				{actionBar}
				{gameBar}
				{gameLoop}
				<Paper sx={{ width: '797px', height: '535px', padding: '16px' }}>
					<Box
						sx={{
							position: 'absolute',
							width: '765px',
							height: '503px',
							background: 'url(/images/frame.png)',
							backgroundSize: '100% 100%'
						}}
					>
						{tabBar}
						{tabPage}
						{player}
						{zulrah}
					</Box>
				</Paper>
				{video}
				<Paper sx={{ width: '797px', padding: '16px' }}>
					<Typography paragraph variant="body2">
						Hi fellow scapers,
					</Typography>
					<Typography paragraph variant="body2">
						I hope you like ZulrahTrainer.com. I have created this trainer for
						myself to learn the Zulrah fight. After watching several video's I
						was still failing pretty hard. The speed of the fight combined with
						the prayer and equipment switches are making this fight quite hard
						in my opinion. But maybe it is just me being a bit noobish :P
					</Typography>
					<Typography paragraph variant="body2">
						Thank you for your support! The donations will be used to keep the
						site running and maybe support more OSRS boss trainers in the
						future.
					</Typography>
					<Box display="flex" justifyContent="center">
						<a
							href="https://www.buymeacoffee.com/MRrpa9feZ"
							target="_blank"
							rel="noreferrer"
						>
							<img
								src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
								alt="Buy Me A Coffee"
								style={{ height: '44px' }}
							/>
						</a>
					</Box>
				</Paper>
			</Stack>
		</>
	)
}

export default Trainer

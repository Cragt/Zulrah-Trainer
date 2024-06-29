import { useState } from 'react'
import {
	faCog,
	faKeyboard,
	faToggleOff,
	faToggleOn
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Badge,
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	InputLabel,
	MenuItem,
	Paper,
	Popover,
	Select,
	SelectChangeEvent,
	Stack,
	SvgIcon,
	ToggleButton,
	ToggleButtonGroup,
	Typography
} from '@mui/material'
import {
	TrainingMode,
	TrainingRotation,
	Status,
	GameRotation,
	SwitchEquipment,
	Key
} from '../../types'
import { rotations } from '../../util/rotations/rotations'

interface SettingsBarProps {
	inventoryKey: Key
	prayerKey: Key
	setInventoryKey: (key: Key) => void
	setPrayerKey: (key: Key) => void
	setRotation: (rotation: GameRotation) => void
	setSoundEnabled: (soundEnabled: boolean) => void
	setStatus: (status: Status) => void
	setSwitchEquipment: (switchEquipment: SwitchEquipment) => void
	setSwitchEquipmentEnabled: (switchEquipmentEnabled: boolean) => void
	setTrainingMode: (trainingMode: TrainingMode) => void
	setTrainingRotation: (trainingRotation: TrainingRotation) => void
	soundEnabled: boolean
	switchEquipment: SwitchEquipment
	switchEquipmentEnabled: boolean
	trainingMode: TrainingMode
	trainingRotation: TrainingRotation
}

const SettingsBar: React.FC<SettingsBarProps> = ({
	inventoryKey,
	prayerKey,
	setInventoryKey,
	setPrayerKey,
	setRotation,
	setSoundEnabled,
	setStatus,
	setSwitchEquipment,
	setSwitchEquipmentEnabled,
	setTrainingMode,
	setTrainingRotation,
	soundEnabled,
	switchEquipment,
	switchEquipmentEnabled,
	trainingMode,
	trainingRotation
}) => {
	const [switchEquipmentAnchorEl, setSwitchEquipmentAnchorEl] =
		useState<HTMLButtonElement | null>(null)

	const [keysAnchorEl, setKeysAnchorEl] = useState<HTMLButtonElement | null>(
		null
	)

	const handleTrainingModeChange = (event: SelectChangeEvent) => {
		setTrainingMode(event.target.value as TrainingMode)
	}

	const handleTrainingRotationChange = (event: SelectChangeEvent) => {
		setTrainingRotation(event.target.value as TrainingRotation)
		const trainingRotationKey = event.target.value as TrainingRotation
		let gameRotation
		if (trainingRotationKey === TrainingRotation.Random) {
			gameRotation = rotations[Math.floor(Math.random() * rotations.length)]
		} else {
			gameRotation = rotations.find(
				(rotation) => rotation.key === trainingRotationKey
			) as GameRotation
		}
		setRotation(gameRotation)
	}

	const handleStartClick = () => {
		if (trainingRotation === TrainingRotation.Random) {
			const gameRotation =
				rotations[Math.floor(Math.random() * rotations.length)]
			setRotation(gameRotation)
		}

		if (trainingMode === TrainingMode.PlayAlong) {
			setStatus(Status.Starting)
		} else {
			setStatus(Status.Playing)
		}
	}

	const handleSwitchEquipmentClick = (event: any) => {
		setSwitchEquipmentAnchorEl(event.currentTarget)
	}

	const handleSwitchEquipmentClose = () => {
		setSwitchEquipmentAnchorEl(null)
	}

	const handleSwitchEquipmentChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setSwitchEquipment({
			...switchEquipment,
			[event.target.name]: event.target.checked
		})
	}

	const handleSwitchEquipmentChangeAll = () => {
		const allChecked = Object.values(switchEquipment).every(
			(equipmentItem) => equipmentItem === true
		)
		const value = allChecked ? false : true
		setSwitchEquipment({
			weapon: value,
			offhand: value,
			back: value,
			boots: value,
			chest: value,
			legs: value,
			necklace: value
		})
	}

	const handleKeysClick = (event: any) => {
		setKeysAnchorEl(event.currentTarget)
	}

	const handleKeysClose = () => {
		setKeysAnchorEl(null)
	}

	const handleInventoryKeyChange = (event: SelectChangeEvent) => {
		setInventoryKey(event.target.value as Key)
	}

	const handlePrayerKeyChange = (event: SelectChangeEvent) => {
		setPrayerKey(event.target.value as Key)
	}

	const allSwitchEquipmentChecked = Object.values(switchEquipment).every(
		(equipmentItem) => equipmentItem === true
	)
	const someSwitchEquipmentChecked = Object.values(switchEquipment).some(
		(equipmentItem) => equipmentItem === true
	)
	const someSwitchEquipmentUnchecked = Object.values(switchEquipment).some(
		(equipmentItem) => equipmentItem === false
	)
	const isSwitchEquipmentIndeterminate =
		someSwitchEquipmentChecked && someSwitchEquipmentUnchecked

	return (
		<Paper
			sx={{
				width: '797px',
				p: '16px'
			}}
		>
			<Stack direction="row" spacing={2} alignItems="center">
				<FormControl fullWidth>
					<InputLabel>Training mode</InputLabel>
					<Select
						value={trainingMode}
						label="Training mode"
						onChange={handleTrainingModeChange}
					>
						<MenuItem value={TrainingMode.PlayAlong}>Play along</MenuItem>
						<MenuItem value={TrainingMode.PlayYourself}>Play yourself</MenuItem>
					</Select>
				</FormControl>
				<FormControl fullWidth>
					<InputLabel>Training rotation</InputLabel>
					<Select
						value={trainingRotation}
						label="Training rotation"
						onChange={handleTrainingRotationChange}
					>
						<MenuItem value={TrainingRotation.Random}>Random</MenuItem>
						<MenuItem value={TrainingRotation.One}>One</MenuItem>
						<MenuItem value={TrainingRotation.Two}>Two</MenuItem>
						<MenuItem value={TrainingRotation.Three}>Three</MenuItem>
						<MenuItem value={TrainingRotation.Four}>Four</MenuItem>
					</Select>
				</FormControl>
				<ToggleButtonGroup color="primary">
					<ToggleButton
						value="switch-equipment"
						onClick={() => setSwitchEquipmentEnabled(!switchEquipmentEnabled)}
						selected={switchEquipmentEnabled}
						size="large"
						sx={{
							whiteSpace: 'nowrap',
							minWidth: 'max-content'
						}}
					>
						<Stack direction="row" spacing={1}>
							<Typography>Equipment</Typography>
							<SvgIcon>
								<FontAwesomeIcon
									icon={switchEquipmentEnabled ? faToggleOn : faToggleOff}
								/>
							</SvgIcon>
						</Stack>
					</ToggleButton>
					<ToggleButton
						value="switch-equipment"
						onClick={handleSwitchEquipmentClick}
						selected={switchEquipmentEnabled}
					>
						<Badge
							variant="dot"
							color="secondary"
							invisible={allSwitchEquipmentChecked}
						>
							<SvgIcon>
								<FontAwesomeIcon icon={faCog} />
							</SvgIcon>
						</Badge>
					</ToggleButton>
					<Popover
						open={Boolean(switchEquipmentAnchorEl)}
						anchorEl={switchEquipmentAnchorEl}
						onClose={handleSwitchEquipmentClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left'
						}}
					>
						<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											checked={someSwitchEquipmentChecked}
											indeterminate={isSwitchEquipmentIndeterminate}
											onChange={handleSwitchEquipmentChangeAll}
											name="weapon"
										/>
									}
									label="All"
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.weapon}
											onChange={handleSwitchEquipmentChange}
											name="weapon"
										/>
									}
									label="Weapon"
									sx={{ ml: 2 }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.offhand}
											onChange={handleSwitchEquipmentChange}
											name="offhand"
										/>
									}
									label="Off-hand"
									sx={{ ml: 2 }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.back}
											onChange={handleSwitchEquipmentChange}
											name="back"
										/>
									}
									label="Back"
									sx={{ ml: 2 }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.boots}
											onChange={handleSwitchEquipmentChange}
											name="boots"
										/>
									}
									label="Boots"
									sx={{ ml: 2 }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.chest}
											onChange={handleSwitchEquipmentChange}
											name="chest"
										/>
									}
									label="Chest"
									sx={{ ml: 2 }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.legs}
											onChange={handleSwitchEquipmentChange}
											name="legs"
										/>
									}
									label="Legs"
									sx={{ ml: 2 }}
								/>
								<FormControlLabel
									control={
										<Checkbox
											checked={switchEquipment.necklace}
											onChange={handleSwitchEquipmentChange}
											name="necklace"
										/>
									}
									label="Necklace"
									sx={{ ml: 2 }}
								/>
							</FormGroup>
						</FormControl>
					</Popover>
				</ToggleButtonGroup>
				<ToggleButton
					value="hotkeys"
					onClick={handleKeysClick}
					size="large"
					color="primary"
				>
					<Stack direction="row" spacing={1}>
						<Typography>Keys</Typography>
						<SvgIcon>
							<FontAwesomeIcon icon={faKeyboard} />
						</SvgIcon>
					</Stack>
				</ToggleButton>
				<Popover
					open={Boolean(keysAnchorEl)}
					anchorEl={keysAnchorEl}
					onClose={handleKeysClose}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
				>
					<Box sx={{ p: 2, width: '160px' }}>
						<Stack direction="column" spacing={1}>
							<FormControl fullWidth>
								<InputLabel>Inventory</InputLabel>
								<Select
									value={inventoryKey}
									label="Inventory"
									onChange={handleInventoryKeyChange}
								>
									<MenuItem value={Key.F1}>F1</MenuItem>
									<MenuItem value={Key.F2}>F2</MenuItem>
									<MenuItem value={Key.F3}>F3</MenuItem>
									<MenuItem value={Key.F4}>F4</MenuItem>
									<MenuItem value={Key.F5}>F5</MenuItem>
									<MenuItem value={Key.F6}>F6</MenuItem>
									<MenuItem value={Key.F7}>F7</MenuItem>
									<MenuItem value={Key.F8}>F8</MenuItem>
									<MenuItem value={Key.F9}>F9</MenuItem>
									<MenuItem value={Key.F10}>F10</MenuItem>
									<MenuItem value={Key.F11}>F11</MenuItem>
									<MenuItem value={Key.F12}>F12</MenuItem>
								</Select>
							</FormControl>
							<FormControl fullWidth>
								<InputLabel>Prayer</InputLabel>
								<Select
									value={prayerKey}
									label="Inventory"
									onChange={handlePrayerKeyChange}
								>
									<MenuItem value={Key.F1}>F1</MenuItem>
									<MenuItem value={Key.F2}>F2</MenuItem>
									<MenuItem value={Key.F3}>F3</MenuItem>
									<MenuItem value={Key.F4}>F4</MenuItem>
									<MenuItem value={Key.F5}>F5</MenuItem>
									<MenuItem value={Key.F6}>F6</MenuItem>
									<MenuItem value={Key.F7}>F7</MenuItem>
									<MenuItem value={Key.F8}>F8</MenuItem>
									<MenuItem value={Key.F9}>F9</MenuItem>
									<MenuItem value={Key.F10}>F10</MenuItem>
									<MenuItem value={Key.F11}>F11</MenuItem>
									<MenuItem value={Key.F12}>F12</MenuItem>
								</Select>
							</FormControl>
						</Stack>
					</Box>
				</Popover>
			</Stack>
			<Button
				fullWidth
				variant="contained"
				sx={{ mt: 2 }}
				onClick={handleStartClick}
			>
				Start
			</Button>
		</Paper>
	)
}

export default SettingsBar

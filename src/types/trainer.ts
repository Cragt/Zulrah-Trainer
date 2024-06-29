export interface Summary {
	rotation: TrainingRotation
	score: number
}

export enum Status {
	'Menu' = 'MENU',
	'Starting' = 'STARTING',
	'Playing' = 'PLAYING'
}

export enum ActiveTab {
	'Prayer' = 'PRAYER',
	'Inventory' = 'INVENTORY'
}

export enum ActivePrayer {
	'None' = 'NONE',
	'Ranged' = 'RANGED',
	'Magic' = 'MAGIC'
}

export enum EquipmentType {
	'Ranged' = 'RANGED',
	'Magic' = 'MAGIC'
}

export enum TrainingRotation {
	'Random' = 'RANDOM',
	'One' = 'ONE',
	'Two' = 'TWO',
	'Three' = 'THREE',
	'Four' = 'FOUR'
}

export enum TrainingMode {
	'PlayAlong' = 'PLAY_ALONG',
	'PlayYourself' = 'PLAY_YOURSELF'
}

export enum Key {
	'F1' = 'F1',
	'F2' = 'F2',
	'F3' = 'F3',
	'F4' = 'F4',
	'F5' = 'F5',
	'F6' = 'F6',
	'F7' = 'F7',
	'F8' = 'F8',
	'F9' = 'F9',
	'F10' = 'F10',
	'F11' = 'F11',
	'F12' = 'F12'
}

export interface Equipment {
	weapon: EquipmentType
	legs: EquipmentType
	boots: EquipmentType
	back: EquipmentType
	chest: EquipmentType
	necklace: EquipmentType
	offhand: EquipmentType
}

export interface SwitchEquipment {
	weapon: boolean
	legs: boolean
	boots: boolean
	back: boolean
	chest: boolean
	necklace: boolean
	offhand: boolean
}

export enum ZulrahForm {
	Magma = 'MAGMA',
	Serpentine = 'SERPENTINE',
	Tanzanite = 'TANZANITE'
}

export enum ZulrahPosition {
	Center = 'CENTER',
	Left = 'LEFT',
	Right = 'RIGHT',
	Top = 'TOP'
}

export interface GamePhaseZulrah {
	form: ZulrahForm
	position: ZulrahPosition
}

export interface GamePhasePlayer {
	goodActivePrayers: ActivePrayer[]
	goodEquipmentType: EquipmentType
	goodPositions: number[]
}

export interface GamePhase {
	index: number
	zulrah: GamePhaseZulrah
	player: GamePhasePlayer
	startedAt: number
	duration: number
}

export interface GameRotation {
	key: TrainingRotation
	startedAt: number
	phases: GamePhase[]
}

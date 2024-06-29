import {
	ActivePrayer,
	EquipmentType,
	GameRotation,
	TrainingRotation,
	ZulrahForm,
	ZulrahPosition
} from '../../types'

const rotation1: GameRotation = {
	key: TrainingRotation.One,
	startedAt: 877000,
	phases: [
		{
			index: 0,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 877.1,
			startedAt: 877000,
			duration: 893650 - 877000
		},
		{
			index: 1,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 893.65,
			startedAt: 893650,
			duration: 906300 - 893650
		},
		{
			index: 2,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [2]
			},
			startedAt: 906300,
			duration: 917800 - 906300
		},
		{
			index: 3,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged, ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 917.8,
			startedAt: 917800,
			duration: 941800 - 917800
		},
		{
			index: 4,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 941.8,
			startedAt: 941800,
			duration: 955600 - 941800
		},
		{
			index: 5,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [5]
			},
			// startedAt: 955.6,
			startedAt: 955600,
			duration: 968100 - 955600
		},
		{
			index: 6,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 968.1,
			startedAt: 968100,
			duration: 985600 - 968100
		},
		{
			index: 7,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [3, 4]
			},
			// startedAt: 985.6,
			startedAt: 985600,
			duration: 1007700 - 985600
		},
		{
			index: 8,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged, ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3, 4]
			},
			// startedAt: 1007.7,
			startedAt: 1007700,
			duration: 1037400 - 1007700
		},
		{
			index: 9,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 1037.4,
			startedAt: 1037400,
			duration: 1049230 - 1037400
		},
		{
			index: 10,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [2]
			},
			// startedAt: 1037.4,
			startedAt: 1049230,
			duration: 8000
		}
	]
}

const r2p01 = 1077000
const r2p02 = 1093540
const r2p03 = 1106880
const r2p04 = 1117700
const r2p05 = 1134920
const r2p06 = 1159750
const r2p07 = 1173570
const r2p08 = 1186030
const r2p09 = 1208500
const r2p10 = 1237890
const r2p11 = 1249760
const r2p12 = 1255800
const rotation2: GameRotation = {
	key: TrainingRotation.Two,
	startedAt: r2p01,
	phases: [
		{
			index: 0,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 877.1,
			startedAt: r2p01,
			duration: r2p02 - r2p01
		},
		{
			index: 1,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 877.1,
			startedAt: r2p02,
			duration: r2p03 - r2p02
		},
		{
			index: 2,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r2p03,
			duration: r2p04 - r2p03
		},
		{
			index: 3,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r2p04,
			duration: r2p05 - r2p04
		},
		{
			index: 4,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r2p05,
			duration: r2p06 - r2p05
		},
		{
			index: 5,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r2p06,
			duration: r2p07 - r2p06
		},
		{
			index: 6,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r2p07,
			duration: r2p08 - r2p07
		},
		{
			index: 7,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [4]
			},
			// startedAt: 877.1,
			startedAt: r2p08,
			duration: r2p09 - r2p08
		},
		{
			index: 8,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged, ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [4, 3, 1]
			},
			// startedAt: 877.1,
			startedAt: r2p09,
			duration: r2p10 - r2p09
		},
		{
			index: 9,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 877.1,
			startedAt: r2p10,
			duration: r2p11 - r2p10
		},
		{
			index: 10,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r2p11,
			duration: r2p12 - r2p11
		}
	]
}

const r3p01 = 1272640
const r3p02 = 1289930
const r3p03 = 1308000
const r3p04 = 1333200
const r3p05 = 1345490
const r3p06 = 1358050
const r3p07 = 1370740
const r3p08 = 1386150
const r3p09 = 1398860
const r3p10 = 1421170
const r3p11 = 1442710
const r3p12 = 1454160
const r3p13 = 1462770
const rotation3: GameRotation = {
	key: TrainingRotation.Three,
	startedAt: r3p01,
	phases: [
		{
			index: 0,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 877.1,
			startedAt: r3p01,
			duration: r3p02 - r3p01
		},
		{
			index: 1,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r3p02,
			duration: r3p03 - r3p02
		},
		{
			index: 2,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [6, 7]
			},
			// startedAt: 877.1,
			startedAt: r3p03,
			duration: r3p04 - r3p03
		},
		{
			index: 3,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [6]
			},
			// startedAt: 877.1,
			startedAt: r3p04,
			duration: r3p05 - r3p04
		},
		{
			index: 4,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r3p05,
			duration: r3p06 - r3p05
		},
		{
			index: 5,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r3p06,
			duration: r3p07 - r3p06
		},
		{
			index: 6,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r3p07,
			duration: r3p08 - r3p07
		},
		{
			index: 7,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r3p08,
			duration: r3p09 - r3p08
		},
		{
			index: 8,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r3p09,
			duration: r3p10 - r3p09
		},
		{
			index: 9,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic, ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r3p10,
			duration: r3p11 - r3p10
		},
		{
			index: 10,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r3p11,
			duration: r3p12 - r3p11
		},
		{
			index: 11,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r3p12,
			duration: r3p13 - r3p12
		}
	]
}

const r4p01 = 1480140
const r4p02 = 1497420
const r4p03 = 1519720
const r4p04 = 1534770
const r4p05 = 1552970
const r4p06 = 1570010
const r4p07 = 1580730
const r4p08 = 1601720
const r4p09 = 1622140
const r4p10 = 1634750
const r4p11 = 1651710
const r4p12 = 1669620
const r4p13 = 1681070
const r4p14 = 1690530
const rotation4: GameRotation = {
	key: TrainingRotation.Four,
	startedAt: r4p01,
	phases: [
		{
			index: 0,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1, 2]
			},
			// startedAt: 877.1,
			startedAt: r4p01,
			duration: r4p02 - r4p01
		},
		{
			index: 1,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r4p02,
			duration: r4p03 - r4p02
		},
		{
			index: 2,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r4p03,
			duration: r4p04 - r4p03
		},
		{
			index: 3,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r4p04,
			duration: r4p05 - r4p04
		},
		{
			index: 4,
			zulrah: {
				form: ZulrahForm.Magma,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.None],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3, 5]
			},
			// startedAt: 877.1,
			startedAt: r4p05,
			duration: r4p06 - r4p05
		},
		{
			index: 5,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r4p06,
			duration: r4p07 - r4p06
		},
		{
			index: 6,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Top
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3, 5]
			},
			// startedAt: 877.1,
			startedAt: r4p07,
			duration: r4p08 - r4p07
		},
		{
			index: 7,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Right
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [5]
			},
			// startedAt: 877.1,
			startedAt: r4p08,
			duration: r4p09 - r4p08
		},
		{
			index: 8,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r4p09,
			duration: r4p10 - r4p09
		},
		{
			index: 9,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r4p10,
			duration: r4p11 - r4p10
		},
		{
			index: 10,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Left
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic, ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [3]
			},
			// startedAt: 877.1,
			startedAt: r4p11,
			duration: r4p12 - r4p11
		},
		{
			index: 11,
			zulrah: {
				form: ZulrahForm.Tanzanite,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Magic],
				goodEquipmentType: EquipmentType.Ranged,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r4p12,
			duration: r4p13 - r4p12
		},
		{
			index: 12,
			zulrah: {
				form: ZulrahForm.Serpentine,
				position: ZulrahPosition.Center
			},
			player: {
				goodActivePrayers: [ActivePrayer.Ranged],
				goodEquipmentType: EquipmentType.Magic,
				goodPositions: [1]
			},
			// startedAt: 877.1,
			startedAt: r4p13,
			duration: r4p14 - r4p13
		}
	]
}

export const rotations: GameRotation[] = [
	rotation1,
	rotation2,
	rotation3,
	rotation4
]

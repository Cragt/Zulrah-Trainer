import { Box, ButtonBase } from '@mui/material'
import { Equipment, EquipmentType } from '../../types'

interface TabPageInventoryProps {
	equipment: Equipment
	setEquipment: (equipment: Equipment) => void
}

const TabPageInventory: React.FC<TabPageInventoryProps> = ({
	equipment,
	setEquipment
}) => {
	const handleSlotClick = (slot: string) => {
		if ((equipment as any)[slot] === EquipmentType.Magic) {
			setEquipment({
				...equipment,
				[slot]: EquipmentType.Ranged,
				offhand: slot === 'weapon' ? EquipmentType.Ranged : equipment.offhand
			})
		} else {
			setEquipment({
				...equipment,
				[slot]: EquipmentType.Magic
			})
		}
	}

	const background = (
		<Box
			sx={{
				position: 'absolute',
				left: '540px',
				top: '211px',
				width: '206px',
				height: '247px',
				background: 'url(/images/tab-page-inventory.png)',
				backgroundSize: '100% 100%'
			}}
		/>
	)

	return (
		<>
			{background}
			<ButtonBase
				onClick={() => handleSlotClick('weapon')}
				sx={{
					position: 'absolute',
					left: '562px',
					top: '211px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.weapon === EquipmentType.Ranged
							? 'url(/images/inventory-weapon-magic.png)'
							: 'url(/images/inventory-weapon-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={() => handleSlotClick('legs')}
				sx={{
					position: 'absolute',
					left: '604px',
					top: '211px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.legs === EquipmentType.Ranged
							? 'url(/images/inventory-legs-magic.png)'
							: 'url(/images/inventory-legs-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={() => handleSlotClick('boots')}
				sx={{
					position: 'absolute',
					left: '647px',
					top: '211px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.boots === EquipmentType.Ranged
							? 'url(/images/inventory-boots-magic.png)'
							: 'url(/images/inventory-boots-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={() => handleSlotClick('back')}
				sx={{
					position: 'absolute',
					left: '562px',
					top: '246px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.back === EquipmentType.Ranged
							? 'url(/images/inventory-back-magic.png)'
							: 'url(/images/inventory-back-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={() => handleSlotClick('chest')}
				sx={{
					position: 'absolute',
					left: '604px',
					top: '246px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.chest === EquipmentType.Ranged
							? 'url(/images/inventory-chest-magic.png)'
							: 'url(/images/inventory-chest-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={() => handleSlotClick('necklace')}
				sx={{
					position: 'absolute',
					left: '647px',
					top: '246px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.necklace === EquipmentType.Ranged
							? 'url(/images/inventory-necklace-magic.png)'
							: 'url(/images/inventory-necklace-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={() => handleSlotClick('offhand')}
				disabled={equipment.offhand === EquipmentType.Magic}
				sx={{
					position: 'absolute',
					left: '562px',
					top: '281px',
					width: '35px',
					height: '35px',
					borderRadius: '17px',
					background:
						equipment.offhand === EquipmentType.Ranged
							? 'url(/images/inventory-offhand-magic.png)'
							: 'url(/images/inventory-offhand-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
		</>
	)
}

export default TabPageInventory

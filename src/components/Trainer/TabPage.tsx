import { useMemo } from 'react'
import { ActivePrayer, ActiveTab, Equipment } from '../../types'
import TabPageInventory from './TabPageInventory'
import TabPagePrayer from './TabPagePrayer'

interface TabPageProps {
	activePrayer: ActivePrayer
	activeTab: ActiveTab
	equipment: Equipment
	setActivePrayer: (prayer: ActivePrayer) => void
	setEquipment: (equipment: Equipment) => void
}

const TabPage: React.FC<TabPageProps> = ({
	activeTab,
	activePrayer,
	setActivePrayer,
	equipment,
	setEquipment
}) => {
	const tabPrayer = useMemo(
		() => (
			<TabPagePrayer
				activePrayer={activePrayer}
				setActivePrayer={setActivePrayer}
			/>
		),
		[activePrayer, setActivePrayer]
	)

	const tabPageInventory = useMemo(
		() => (
			<TabPageInventory equipment={equipment} setEquipment={setEquipment} />
		),
		[equipment, setEquipment]
	)

	let tabPage
	if (activeTab === ActiveTab.Inventory) {
		tabPage = tabPageInventory
	} else {
		tabPage = tabPrayer
	}

	return tabPage
}

export default TabPage

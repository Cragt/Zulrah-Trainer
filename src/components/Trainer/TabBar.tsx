import { ButtonBase } from '@mui/material'
import { ActiveTab } from '../../types'

interface TabBarProps {
	activeTab: ActiveTab
	setActiveTab: (tab: ActiveTab) => void
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
	const handleInventoryTabClick = () => {
		setActiveTab(ActiveTab.Inventory)
	}

	const handlePrayerTabClick = () => {
		setActiveTab(ActiveTab.Prayer)
	}

	return (
		<>
			<ButtonBase
				onClick={handleInventoryTabClick}
				disabled={activeTab === ActiveTab.Inventory}
				sx={{
					position: 'absolute',
					left: '624px',
					top: '165px',
					width: '40px',
					height: '40px',
					background:
						activeTab === ActiveTab.Inventory
							? 'url(/images/tab-inventory-selected.png)'
							: 'url(/images/tab-inventory.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={handlePrayerTabClick}
				disabled={activeTab === ActiveTab.Prayer}
				sx={{
					position: 'absolute',
					left: '689px',
					top: '165px',
					width: '40px',
					height: '40px',
					background:
						activeTab === ActiveTab.Prayer
							? 'url(/images/tab-prayer-selected.png)'
							: 'url(/images/tab-prayer.png)',
					backgroundSize: '100% 100%'
				}}
			/>
		</>
	)
}

export default TabBar

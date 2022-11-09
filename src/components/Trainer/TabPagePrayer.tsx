import { Box, ButtonBase } from '@mui/material'
import { ActivePrayer } from '../../types'

interface TabPagePrayerProps {
	activePrayer: ActivePrayer
	setActivePrayer: (prayer: ActivePrayer) => void
}

const TabPagePrayer: React.FC<TabPagePrayerProps> = ({
	activePrayer,
	setActivePrayer
}) => {
	const handleMagicPrayerClick = () => {
		if (activePrayer === ActivePrayer.Magic) {
			setActivePrayer(ActivePrayer.None)
		} else {
			setActivePrayer(ActivePrayer.Magic)
		}
	}

	const handleRangedPrayerClick = () => {
		if (activePrayer === ActivePrayer.Ranged) {
			setActivePrayer(ActivePrayer.None)
		} else {
			setActivePrayer(ActivePrayer.Ranged)
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
				background: 'url(/images/tab-page-prayer.png)',
				backgroundSize: '100% 100%'
			}}
		/>
	)

	return (
		<>
			{background}
			<ButtonBase
				onClick={handleMagicPrayerClick}
				sx={{
					position: 'absolute',
					left: '587px',
					top: '322px',
					width: '36px',
					height: '36px',
					borderRadius: '18px',
					background:
						activePrayer === ActivePrayer.Magic
							? 'url(/images/prayer-magic-active.png)'
							: 'url(/images/prayer-magic.png)',
					backgroundSize: '100% 100%'
				}}
			/>
			<ButtonBase
				onClick={handleRangedPrayerClick}
				sx={{
					position: 'absolute',
					left: '624px',
					top: '322px',
					width: '36px',
					height: '36px',
					borderRadius: '18px',
					background:
						activePrayer === ActivePrayer.Ranged
							? 'url(/images/prayer-ranged-active.png)'
							: 'url(/images/prayer-ranged.png)',
					backgroundSize: '100% 100%'
				}}
			/>
		</>
	)
}

export default TabPagePrayer

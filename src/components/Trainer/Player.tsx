import { Fab } from '@mui/material'
import { ActivePrayer } from '../../types'

interface PlayerProps {
	activePrayer: ActivePrayer
	position: number
	setPosition: (position: number) => void
}

const Player: React.FC<PlayerProps> = ({
	activePrayer,
	position,
	setPosition
}) => {
	let image
	if (activePrayer === ActivePrayer.Ranged) {
		image = (
			<img
				src="/images/prayer-protect-from-ranged.png"
				alt="protect-from-ranged"
			/>
		)
	}
	if (activePrayer === ActivePrayer.Magic) {
		image = (
			<img
				src="/images/prayer-protect-from-magic.png"
				alt="protect-from-magic"
			/>
		)
	}

	return (
		<>
			<Fab
				id="pos1"
				size="medium"
				onClick={() => setPosition(1)}
				sx={{
					position: 'absolute',
					left: '109px',
					top: '317px',
					opacity: position === 1 ? 1 : 0
				}}
			>
				{image}
			</Fab>
			<Fab
				id="pos2"
				size="medium"
				onClick={() => setPosition(2)}
				sx={{
					position: 'absolute',
					left: '153px',
					top: '341px',
					opacity: position === 2 ? 1 : 0
				}}
			>
				{image}
			</Fab>
			<Fab
				id="pos3"
				size="medium"
				onClick={() => setPosition(3)}
				sx={{
					position: 'absolute',
					left: '155px',
					top: '185px',
					opacity: position === 3 ? 1 : 0
				}}
			>
				{image}
			</Fab>
			<Fab
				id="pos4"
				size="medium"
				onClick={() => setPosition(4)}
				sx={{
					position: 'absolute',
					left: '340px',
					top: '165px',
					opacity: position === 4 ? 1 : 0
				}}
			>
				{image}
			</Fab>
			<Fab
				id="pos5"
				size="medium"
				onClick={() => setPosition(5)}
				sx={{
					position: 'absolute',
					left: '319px',
					top: '209px',
					opacity: position === 5 ? 1 : 0
				}}
			>
				{image}
			</Fab>
			<Fab
				id="pos6"
				size="medium"
				onClick={() => setPosition(6)}
				sx={{
					position: 'absolute',
					left: '371px',
					top: '270px',
					opacity: position === 6 ? 1 : 0
				}}
			>
				{image}
			</Fab>
			<Fab
				id="pos7"
				size="medium"
				onClick={() => setPosition(7)}
				sx={{
					position: 'absolute',
					left: '334px',
					top: '340px',
					opacity: position === 7 ? 1 : 0
				}}
			>
				{image}
			</Fab>
		</>
	)
}

export default Player

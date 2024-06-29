import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import { Paper, Stack, Typography } from '@mui/material'
import { GameRotation, Status } from '../../types'

interface VideoProps {
	rotation: GameRotation
	setStatus: (status: Status) => void
	soundEnabled: boolean
	status: Status
}

const Video: React.FC<VideoProps> = ({
	rotation,
	setStatus,
	soundEnabled,
	status
}) => {
	const videoRef = useRef<ReactPlayer>(null)
	const [playing, setPlaying] = useState(false)
	const [muted, setMuted] = useState(true)

	useEffect(() => {
		if (status === Status.Starting) {
			videoRef.current?.seekTo(rotation.startedAt / 1000, 'seconds')
			setPlaying(true)
			if (soundEnabled) {
				setMuted(false)
			}
		}
		if (status === Status.Menu) {
			setPlaying(false)
		}
	}, [playing, rotation, soundEnabled, status])

	const handlePlay = () => {
		setStatus(Status.Playing)
		setPlaying(true)
	}

	const handlePause = () => {
		setStatus(Status.Menu)
		setPlaying(false)
	}

	return (
		<Paper sx={{ width: '797px', padding: '16px' }}>
			<ReactPlayer
				ref={videoRef}
				muted={muted}
				controls={true}
				playing={playing}
				url="https://www.youtube.com/watch?v=DS60Ehfw9yQ"
				width="765px"
				height="430px"
				onPlay={handlePlay}
				onPause={handlePause}
			/>
			<Stack>
				<Typography pt="16px" variant="body2">
					This video is used to create this trainer. I have chosen this Zulrah
					guide because of the clear explanations, clear positions and the
					excellent guidance of EVScape.
				</Typography>
				<Typography variant="body2">
					I do not own this video. All credits regarding this video go to
					EVScape.
				</Typography>
			</Stack>
		</Paper>
	)
}

export default Video

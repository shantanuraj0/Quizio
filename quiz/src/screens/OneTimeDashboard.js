import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './OneTimeDashboard.css'

const OneTimeDashboard = ({ user }) => {
	const [path, setPath] = useState('')
	// Path Redirection
	const onDashboard = () => setPath('/dashboard')
	const onCreateQuiz = () => setPath('/create-quiz')
	const onJoinQuiz = () => setPath('/join-quiz')

	if (path.length > 0) return <Redirect push to={path} />

	return (
		<div className='one-time-dashboard'>
			<div id='dashboard-content'>
				<div className='dash-btns'>
					<h1 className='white'>
						<b>Quizio</b>
					</h1>
					<button className='button one-time-button' onClick={onDashboard}>
						My Quizzes
					</button>
					<button className='button one-time-button' onClick={onCreateQuiz}>
						Click To Create Quiz
					</button>
					<button className='button one-time-button' onClick={onJoinQuiz}>
						Click To Join Quiz
					</button>
				</div>

				{/**/ }
				<div className='blob-svg'>
					{/* <svg
						className='blob-1'
						viewBox="0 0 80 480"
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill='#D81E5B'
							d="M396.5,287.5Q354,335,309.5,359Q265,383,193.5,414Q122,445,115,366.5Q108,288,72.5,227Q37,166,86,112.5Q135,59,205,49.5Q275,40,333.5,76Q392,112,415.5,176Q439,240,396.5,287.5Z" 
							transform='translate(100 100)'
						/>
					</svg> */}

					<svg
						className='blob-3'
						viewBox='0 0 200 200'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill='#F7C550'
							d="M396.5,287.5Q354,335,309.5,359Q265,383,193.5,414Q122,445,115,366.5Q108,288,72.5,227Q37,166,86,112.5Q135,59,205,49.5Q275,40,333.5,76Q392,112,415.5,176Q439,240,396.5,287.5Z"
							transform='translate(0 -53)'
						/>
					</svg>
				</div>
				
			</div>
		</div>
	)
}

export default OneTimeDashboard

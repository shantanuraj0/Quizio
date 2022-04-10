import React, { useState, useEffect } from 'react'
import './Home.css'
import { StyledFirebaseAuth } from 'react-firebaseui'
import firebase from '../firebase/firebase'
import LoadingScreen from './LoadingScreen'
import ContactComponent from '../components/ContactComponent';   

const Home = ({ setUser }) => {
	const [loading, setLoading] = useState(true)
	var uiConfig = {
		signInflow: 'popup',
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID,
			firebase.auth.EmailAuthProvider.PROVIDER_ID,
		],
		callbacks: {
			signInSuccessWithAuthResult: () => false,
		},
	}
	useEffect(() => {
		let isMounted = true
		firebase.auth().onAuthStateChanged((user) => {
			// setIsLoggedIn(!!user)
			if (user && isMounted) {
				setUser({
					uid: firebase.auth().currentUser.uid,
					name: firebase.auth().currentUser.displayName,
					email: firebase.auth().currentUser.email,
				})
				console.log('User Logged In')
			} else {
				console.log('User Signed Out')
				setUser({})
			}
			console.log('auth change')
			if (isMounted) setLoading(false)
		})
		return () => (isMounted = false)
	}, [setUser])
	return (
		<>
			{loading ? (
				<LoadingScreen />
			) : (

				

				<div id='Home'>

					<div id='background-img'>
						
					</div>


					<div id='login-card'>
						<label className='login-label'>
							<b>Q</b>
						</label>
						<StyledFirebaseAuth
							borderRadius='40px'
							uiConfig={uiConfig}
							firebaseAuth={firebase.auth()}
						/>
					</div>


					<div id='logo'>
						<div id='logo-name'>
							<b>Quizio</b>
						</div>
						<div id='description'>
							<h3>
								<ul>
									<li>
										Now create and join quiz at a single platform.
									</li>

									<li>
									You can create trivia quizzes, personality test.
									</li>

									<li>
									Share out your quiz with your students with a unique code.
									</li>
								</ul>
							
							</h3>
							
						</div>

					</div>



					


					{/*Added by me ----------  */}
					{/*
					
					
					*/} 
					
					<div  id="contact">
						<div className="contactOverlay">
							<div className="container">
							<div className="form" >
								<ContactComponent/>
							</div>
							</div>
						</div>
					</div>

					
					{/*--------------------- */}

				</div>

				
			)}
		</>
	)
}

export default Home

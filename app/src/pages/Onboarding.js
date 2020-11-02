import React, { useState } from 'react';
import { IonContent, IonPage, IonIcon } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';

const Onboarding = () => {
	const [screen, setScreen] = useState(0);
  return (
    <IonPage>
      <IonContent fullscreen>
				{{
					0: <Screen1 setScreen={setScreen} />,
					1: <Screen2 setScreen={setScreen} />	,
					2: <Screen3 setScreen={setScreen} />	
				}[screen]}
      </IonContent>
    </IonPage>
  );
};

const Screen3 = props => {
 return (
	<div style={{position: 'relative', backgroundColor: "#FBC97D", height: '100%'}}>
		<div style={{
			position: 'absolute', 
			width: '438px', 
			height: '438px', 
			borderRadius: '9999px',
			bottom: 0, 
			transform: 'translate(-45%, 40%)',
			backgroundColor: '#F9E5C8',
			zIndex:0 
		}}></div>
		<div style={{
			position: 'absolute', 
			width: '535px', 
			height: '535px', 
			borderRadius: '9999px',
			top: '50%',
			right: 0,
			transform: 'translate(70%, -50%)',
			//bottom: 0, 
		//	transform: 'translate(-45%, 40%)',
			backgroundColor: '#C7B79F',
			zIndex:0 
		}}></div>
		<div style={{
			padding: '64px 38px',
			textAlign: 'center',
			position: 'relative',
			zIndex: 1
		}}>
			<h2 style={{color: 'black'}}>
				Your pet will grow<br />up like human
			</h2>
			<p style={{color: 'black', marginBottom: '40px'}}>
				It starts from an egg, of course.
			</p>
			<img src="/assets/splash-6.png" />

			<div style={{marginTop: '85px'}}>
				<a href="http://localhost:5000/auth/facebook" className="btn" >
					Login to Facebook
				</a>
			</div>
		</div>
	</div>
 )
};

const Screen2 = props => {
	return (
		<div style={{position: 'relative', backgroundColor: "#F9E5C8", height: '100%'}}>
			<div style={{
				position: 'absolute', 
				width: '438px', 
				height: '438px', 
				borderRadius: '9999px',
				top: '50%',
				left: 0,
				transform: 'translate(-70%, -65%)',
				//bottom: 0, 
				//transform: 'translate(-45%, 40%)',
				backgroundColor: '#C7B79F',
				zIndex:0 
			}}></div>
			<div style={{
				position: 'absolute', 
				width: '535px', 
				height: '535px', 
				borderRadius: '9999px',
				bottom: 0, 
				right: 0,
				transform: 'translate(65%, 20%)',
				backgroundColor: '#FBC97D',
				zIndex:0 
			}}></div>
			<div style={{
				padding: '64px 38px',
				textAlign: 'center',
				position: 'relative',
				zIndex: 1
			}}>
				<h2 style={{color: 'black'}}>
					Your pet will grow<br />up like human
				</h2>
				<p style={{color: 'black', marginBottom: '40px'}}>
					It starts from an egg, of course.
				</p>
				<img src="/assets/sample-5.png" />

					<button onClick={() => props.setScreen(2)} style={{
						height: '64px',
						width: '64px',
						borderRadius: '9999px',
						backgroundColor: 'white',
						marginTop: '85px'
					}}>
						<IonIcon style={{fontSize:'25px'}} icon={arrowForward} />
					</button>

			</div>
		</div>
	)
};

const Screen1 = props => {
	const sample = [
		{src: '/assets/sample-1.png', name: 'Elon Musk', checked: false},
		{src: '/assets/sample-2.png', name: 'Gordon Ramsay', checked: true},
		{src: '/assets/sample-3.png', name: 'Lebron James', checked: false},
		{src: '/assets/sample-4.png', name: 'Justin Trudeau', checked: false},
	]
	return (
		<div style={{position: 'relative', backgroundColor: "#C7B79F", height: '100%'}}>
			<div style={{
				position: 'absolute', 
				width: '535px', 
				height: '535px', 
				borderRadius: '9999px',
				bottom: 0, 
				transform: 'translate(-45%, 40%)',
				backgroundColor: '#FBC97D',
				zIndex:0 
			}}></div>
			<div style={{
				position: 'absolute', 
				width: '438px', 
				height: '438px', 
				borderRadius: '9999px',
				top: '50%',
				right: 0,
				transform: 'translate(70%, -50%)',
				//bottom: 0, 
			//	transform: 'translate(-45%, 40%)',
				backgroundColor: '#F9E5C8',
				zIndex:0 
			}}></div>
			<div style={{
				padding: '64px 38px',
				textAlign: 'center',
				position: 'relative',
				zIndex: 1
			}}>
				<h2>
					Pick your<br />Facebook friend(s)
				</h2>
				<p style={{marginBottom: '40px'}}>
					You can pick more later
				</p>

				<div style={{
					padding: '24px', 
					backgroundColor: 'white', 
					borderRadius: '20px',
					boxShadow: '0 4px 8px rgba(0,0,0,.1)',
				}}>
					<h3 style={{marginBottom: '22px'}}>
						My Friends
					</h3>
					{sample.map(g => (
						<div style={{
							display: 'flex',
							flexWrap: 'wrap',
							alignItems: 'center',
							padding: '8px 0',
							pointerEvents: 'none'
						}}>
							<div>
								<img src={g.src} />
							</div>
							<b style={{color: 'black', marginLeft: '8px'}}>
								{g.name}
							</b>
							<input type="checkbox" style={{marginLeft: 'auto'}} checked={g.checked} />
						</div>
					))}
				</div>


					<button onClick={() => props.setScreen(1)} style={{
						height: '64px',
						width: '64px',
						borderRadius: '9999px',
						backgroundColor: 'white',
						marginTop: '85px'
					}}>
						<IonIcon style={{fontSize:'25px'}} icon={arrowForward} />
					</button>
			</div>
		</div>	
	)
};

export default Onboarding;

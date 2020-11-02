import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
				<div style={{position: 'relative', backgroundColor: "F9E5C8", height: '100%'}}>
					<img src="/assets/pattern-1.svg" style={{position: 'absolute', top: '68px'}} />

					<div style={{
						position: 'absolute',
						left: '50%',
						top: '50%',
						transform: 'translate(-50%, -50%)',
						textAlign: 'center',
						width: '66%',
					}}>
						<img src="/assets/splash.png" />
						<h1>
							['ikusei]
						</h1>
						<p style={{color: 'black', marginBottom: '40px'}}>
							Turn your Facebook friends into pets and watch them grow
						</p>
						<Link to="/onboarding" className="btn">
							Get started
						</Link>
					</div>

					<img src="/assets/pattern-1.svg" style={{position: 'absolute', bottom: '68px'}} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Landing;

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer.js';
import './Home.css';
import Eggo from '../components/Avatar';

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
				<div style={{
					backgroundImage: 'url(/assets/background.png)',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundColor: '#F9E5C8',
					width: '100%',
					height: '100%', 
					padding: '1rem',
					position: 'relative'
				}}>
          <ExploreContainer />
          <Eggo />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

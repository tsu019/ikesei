import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer.js';
import './Home.css';
import Eggo from '../components/Avatar';

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
          <ExploreContainer />
          <Eggo />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;

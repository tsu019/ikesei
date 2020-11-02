import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Onboarding from './pages/Onboarding';
import { basketballOutline, bedOutline, pizzaOutline } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Genereal CSS */
import './theme/style.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
			<Route path="/home"exact={true}>
				<IonTabs>
					<IonRouterOutlet>
						<Home />
						</IonRouterOutlet>
						<IonTabBar style={{backgroundColor:'white'}} slot="bottom" color="white">
							<IonTabButton style={{color: 'black'}}>
								<IonIcon icon={basketballOutline} />
								<IonLabel>Play</IonLabel>
							</IonTabButton>
							<IonTabButton style={{color: 'black'}}>
								<IonIcon icon={pizzaOutline} />
								<IonLabel>Eat</IonLabel>
							</IonTabButton>
							<IonTabButton style={{color: 'black'}}>
								<IonIcon icon={bedOutline} />
								<IonLabel>Sleep</IonLabel>
							</IonTabButton>
						</IonTabBar>
					</IonTabs>
				</Route>
			<Route path="/onboarding" component={Onboarding} exact={true} />
			<Route exact path="/" component={Landing} />
    </IonReactRouter>
  </IonApp>
);

export default App;

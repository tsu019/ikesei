import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { calendar } from 'ionicons/icons';

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

const App = () => (
  <IonApp>
    <IonReactRouter>
			<IonTabs>
				<IonRouterOutlet>
					<Route path="/home" component={Home} exact={true} />
					<Route exact path="/" render={() => <Redirect to="/home" />} />
				</IonRouterOutlet>
				<IonTabBar slot="bottom">
					<IonTabButton>
						<IonIcon icon={calendar} />
						<IonLabel>Label 1</IonLabel>
					</IonTabButton>
					<IonTabButton>
						<IonIcon icon={calendar} />
						<IonLabel>Label 2</IonLabel>
					</IonTabButton>
					<IonTabButton>
						<IonIcon icon={calendar} />
						<IonLabel>Label 3</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

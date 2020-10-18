import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge } from '@ionic/react';
import { calendar } from 'ionicons/icons';

const Tabs = () => {
	return (
		<IonTabs>
			<IonTabBar slot="bottom">
				<IonTabButton>
					<IonIcon icon={calendar} />
					<IonLabel> Schedule</IonLabel>
					<IonBadge>6</IonBadge>
				</IonTabButton>
				<IonTabButton>
					<IonIcon icon={calendar} />
					<IonLabel> Schedule</IonLabel>
					<IonBadge>6</IonBadge>
				</IonTabButton>
				<IonTabButton>
					<IonIcon icon={calendar} />
					<IonLabel> Schedule</IonLabel>
					<IonBadge>6</IonBadge>
				</IonTabButton>
				
			</IonTabBar> 
		</IonTabs>
	)
};

export default Tabs

import React from 'react';
import { IonContent, IonIcon } from '@ionic/react';
import './style.css'
import { heartOutline, contrastOutline, waterOutline} from 'ionicons/icons';

const Meter = () => {
  return(
    <div className="meter">
      <div className="wrapper">
        <div className="info">
          <IonIcon id="icon-1" icon={heartOutline} />
          <div className="stat">
            <p>72<span>%</span></p>
          </div>
          <hr />
        </div>
        <div className="info">
          <IonIcon id="icon-2" icon={contrastOutline} />
          <div className="stat">
            <p>60<span>%</span></p>
          </div>
          <hr />
        </div>
        <div className="info">
          <IonIcon id="icon-3" icon={waterOutline} />
          <div className="stat" id="last-stat">
            <p>80<span>%</span></p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Meter;
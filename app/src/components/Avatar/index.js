import { swapVerticalOutline } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import './style.css';

const Avatar = () => {
  const [ age, setAge ] = useState(0);

  useEffect(() => {
    if (age > 2) {
      setAge(0);
    }
  }, [age])

  return(
    <div>
      <div className="egg-wrapper">
        {{
          0: <img className="egg" src='/assets/eggo.svg' />,
          1: <img className="egg" src='/assets/kiddo.svg' />,
          2: <img className="egg" src='/assets/adultsies.svg' />
        }[age]}
      </div>
      <button onClick={() => setAge(age + 1)}>
        Grow
      </button>
    </div>
  )
}

export default Avatar;
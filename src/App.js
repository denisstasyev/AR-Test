import React from 'react';
import './App.css';

import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>


<a-marker-camera preset="hiro">
          <a-box position='0 0.5 0' material='color: yellow;'></a-box>
      </a-marker-camera>
                </Scene>
            </div>
        );
    }
}

export default App;

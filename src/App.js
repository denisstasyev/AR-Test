import React from 'react';
import './App.css';

import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{debugUIEnabled: 'false', sourceType: 'webcam', trackingMethod: 'best'}}>


<a-marker preset="hiro">
          <a-box position='0 0.5 0' material='color: yellow;'></a-box>
      </a-marker>
 <a-entity camera></a-entity>
                </Scene>
            </div>
        );
    }
}

export default App;

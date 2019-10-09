import React from 'react';
import './App.css';

import { Scene, Entity } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam'}}>
                    <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
                    
                    <a-box position='0 0 0' material='opacity: 0.5; color: yellow'></a-box>
                    
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;

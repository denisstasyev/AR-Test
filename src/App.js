import React from 'react';
import './App.css';

// import "aframe";
import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam'}}>
 
                    
                    <a-box position='0 0 0' material='opacity: 0.5; color: yellow'></a-box>
                    
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;

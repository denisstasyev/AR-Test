import React from 'react';
import './App.css';

import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}> {/* debugUIEnabled: 'false' - not working here */}
                    <a-anchor hit-testing-enabled="true">
                        <a-box position='0 0 0.5' material='opacity: 0.7; color: yellow;'></a-box>
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;

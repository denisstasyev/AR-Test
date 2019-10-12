import React from 'react';
import './App.css';

import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}> {/* debugUIEnabled: 'false' - not working here */}
                    <a-anchor hit-testing-enabled="true">
                        <a-entity position='0 0 0' scale='0.05 0.05 0.05' rotation='200 0 0' obj-model='obj: url(models/dog.obj); mtl: url(models/dog.mtl)'></a-entity>
                        {/*<a-box position='0 0 0.5' material='opacity: 0.7; color: yellow;'></a-box>*/}
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </Scene>
            </div>
        );
    }
}

export default App;

import React from 'react';
import './App.css';

import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>
                    <a-marker preset="hiro">
                        {/*<a-box position='0 0 0' material='opacity: 0.5; color: yellow;'></a-box>*/}
                        <a-entity rotation="180 0 0" position="10 0 0"
                            obj-model="obj: url(models/dog.obj); mtl: url(models/dog.mtl)"></a-entity>
                    </a-marker>
                    <a-entity camera />
                </Scene>
            </div>
        );
    }
}

export default App;

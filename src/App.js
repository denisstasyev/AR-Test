import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <a-scene arjs='sourceType: webcam; debugUIEnabled: false'>
                    <a-anchor hit-testing-enabled="true">
                        <a-entity position='0 0 0' scale='0.05 0.05 0.05' rotation='200 0 0' obj-model='obj: url(models/dog.obj); mtl: url(models/dog.mtl)'></a-entity>
                        {/*<a-box position='0 0 0.5' material='opacity: 0.7; color: yellow;'></a-box>*/}
                    </a-anchor>
                    <a-camera-static preset="hiro" />
                </a-scene>
            </div>
        );
    }
}

export default App;

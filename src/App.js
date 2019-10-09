import React from 'react';
import './App.css';

//import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            //<div className="App">
<a-scene embedded arjs>
    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
    <a-marker-camera preset='hiro'></a-marker-camera>
  </a-scene>
                //<Scene artoolkit={{sourceType: 'webcam', trackingMethod: 'best'}}>
                //    <a-anchor hit-testing-enabled="true">
                //        <a-box position='0 0 0' material='opacity: 0.5;  color: yellow'></a-box>
                //    </a-anchor>                    
                //    <a-camera-static preset="hiro" />
                //</Scene>
            //</div>
        );
    }
}

export default App;

import React from 'react';
import './App.css';

// import "aframe";
//import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
  <a-scene embedded arjs>
    <a-box position='0 0.5 0' material='opacity: 0.5;'></a-box>
    <a-marker-camera preset='hiro'></a-marker-camera>
  </a-scene>
        );
    }
}

export default App;

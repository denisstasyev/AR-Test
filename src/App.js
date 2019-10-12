import React from 'react';
import './App.css';

//import { Scene } from 'aframe-react';
 
class App extends React.Component {
    render() {
        return (
            <div>
                <a-marker preset="hiro">
                    <a-box position='0 0 0' material='opacity: 0.5; color: yellow;'></a-box>
                </a-marker>
                <a-entity camera />
            </div>
        );
    }
}

export default App;

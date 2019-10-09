import React from 'react';
import './App.css';

var thisIsMyCopy = `<a-scene embedded arjs>
      <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: yellow;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>`;

function App() {
  return (
    <div className="App" dangerouslySetInnerHTML={{__html: thisIsMyCopy}}>
    </div>
  );
}

export default App;

import React, {useCallback, useState} from 'react';
import marisaVersions from './marisaVersions'
import './App.css';


function App() {
  const [currentVersionIndex, setCurrentVersionIndex] = useState<number>(0);

  const { title, image, description } = Object.values(marisaVersions)[currentVersionIndex];

  const onClick = useCallback(() => {
    const maxValue = Object.values(marisaVersions).length;
    let nextVersionIndex = Math.floor(Math.random() * (maxValue - 1));
    if (nextVersionIndex === currentVersionIndex) {
      nextVersionIndex += 1;
    }
    console.log(nextVersionIndex)
    setCurrentVersionIndex(nextVersionIndex)
  },[currentVersionIndex, setCurrentVersionIndex])

  return (
    <div className="App">
      <header className="App-header">
        Welcome to <code style={{display:'inline'}}>marisa.dance</code>!
      </header>
      <div className="App-contents">
        <div>See the many forms of Marisa Silva: </div>
        <button type="button" onClick={onClick}>Show Me Another</button>
        <hr/>

        <div className="version">
          <div className="version--title">{title}</div>
          <img className="version--image" alt={title} src={image} width="375"/>
          <div className="version--description">{description}</div>
        </div>
      </div> 

    </div>
  );
}

export default App;

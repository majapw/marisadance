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
    setCurrentVersionIndex(nextVersionIndex)
  },[currentVersionIndex, setCurrentVersionIndex])

  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const onShowOverlayClick = useCallback(() => setShowOverlay(!showOverlay), [showOverlay, setShowOverlay]);

  return (
    <div className="App">
      <header className="App-header">
        Welcome to <code style={{display:'inline'}}>marisa.dance</code>!
      </header>
      <div className="App-contents">
        <div>See the many forms of Marisa Silva: </div>
        <button type="button" onClick={onClick}>Show Me Another!!!</button>
        <hr/>

        <div className="version">
          <div className="version--title">{title}</div>
          <img className="version--image" alt={title} src={image} width="375"/>
          <div className="version--description">{description}</div>
        </div>
      </div> 

      <div style={{fontSize: 24}}>👇🏻👇🏻👇🏻</div>

      <hr />
      <div>
        <div className="version--title">What is this website?</div>
        <div>
          This website was made with love to Marisa Silva from her energy buddy, Maja Wichrowska, for USA Club Rugby Division II Nationals on May 21st and 22nd, 2022 in Atlanta, GA. Marisa and Maja both are representing the Berkeley All Blues in their first ever bid for the DII national championship. <br /><br />

          Kick some ass this weekend, Marisa! I know that you are going to absolutely crush it! I hope this website reminds you how frickin awesome you are and gives you a little bit of that extra energy when you are out on the field on Saturday! 💙💛💙💛💙💛
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';
import TileBlock from './tileBlock/tileBlock';
import { getPairedNumbers } from './utils/numbersUtil';
import { getUniqueColors } from './utils/colorUtil';
import { useState } from 'react';

function App() {
  const [numberOfTiles, setNumberOfTiles] = useState(6);

  const openShutter = (value: string) => {
    const tile = document.getElementById(value);
    tile!.classList.add('opened');
  }

  /**
  * Task: Use getPairedNumbers and getUniqueColors to generate tiles dynamically
  */
  const generateTiles = () => {
    const tiles = [];

    const numbers = getPairedNumbers(numberOfTiles);
    const colors = getUniqueColors(numberOfTiles);

    for (let i = 0; i < numberOfTiles; i++) {
      tiles.push(<TileBlock
        key={i}
        onTileClick={(value) => openShutter(value)}
        id={i.toString()}
        color={colors[i]}>
        <div>{numbers[i]}</div>
      </TileBlock>);
    }

    return tiles;
  }

  return (
    <div className='memoryAppContainer'>
      <div className="memoryTitleBar">
        <div className='leftSection'>
          <MemoryIcon className='memoryIcon' />
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Difficulty level:</div>
            <input type='number' min={4} max={100} step={2} value={numberOfTiles} onChange={(event) => {
              const value = event.target.value;
              setNumberOfTiles(parseInt(value));
            }} className='difficultyLevel' />
          </div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Best score: N/A</div>
            <div className='numMistakes'>Number of mistakes: N/A</div>
          </div>
        </div>
        <button className='resetButton' onClick={() => { }}>Reset game</button>
      </div>
      <div className="memoryMainContent">
        {generateTiles()}
      </div>
    </div>
  )
}

export default App
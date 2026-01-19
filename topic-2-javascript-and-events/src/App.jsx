import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';
import TileBlock from './tileBlock/tileBlock';

function App() {

  const openShutter = (value) => {
    const tile = document.getElementById(value);
    tile.classList.add('opened');
  }

  /**
  * Task: Use getPairedNumbers and getUniqueColors to generate tiles dynamically
  */
  const generateTiles = () => {
    const difficultyLevel = 8; // Example difficulty level
    const tiles = [];

    for (let i = 0; i < difficultyLevel; i++) {
      tiles.push(<TileBlock key={i} onTileClick={(value) => openShutter(value)} id={i}>
        {i}
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
            <input type='number' min={4} max={100} step={2} className='difficultyLevel' />
          </div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Best score: N/A</div>
            <div className='numMistakes'>Number of mistakes: 0</div>
          </div>
        </div>
        <button className='resetButton'>Reset game</button>
      </div>
      <div className="memoryMainContent">
        {generateTiles()}
      </div>
    </div>
  )
}

export default App

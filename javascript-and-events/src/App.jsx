import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';

function App() {
  const handleTileClick = (tileId) => {
    const tile = document.getElementById(tileId);
    if (tile) {
      tile.classList.add('visible');
    }
  }

  /**
   * Task: Use getPairedNumbers and getUniqueColors to generate tiles dynamically
   */
  const generateTiles = () => {
    const tiles = [];

    for (let i = 0; i < 4; i++) {
      const tileId = `tile-${i}`;

      tiles.push(
        <div key={i} className="memoryTile" id={tileId} onClick={() => handleTileClick(tileId)}>
          <div className="memoryTileContent">1</div>
          <div className="tileShutter">?</div>
        </div>
      );
    }
    return tiles;
  }

  // Task: Implement resetGame function to reset the game state
  const resetGame = () => { }

  // Task: Implement difficultyLevelChange function to handle changes in difficulty level
  const difficultyLevelChange = () => { }

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
      <div className="memoryMainContent" id="tileContainer">
        {generateTiles()}
      </div>
    </div>
  )
}

export default App

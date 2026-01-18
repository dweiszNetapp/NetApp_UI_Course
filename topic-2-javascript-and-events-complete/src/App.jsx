import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';
import TileBlock from './tile/tile';
import { getUniqueColors } from './utils/colorUtil';
import { getPairedNumbers } from './utils/numbersUtil';

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
    const numberOfTiles = 4;
    const tiles = [];

    const values = getPairedNumbers(numberOfTiles);
    const colors = getUniqueColors(numberOfTiles);
    for (let i = 0; i < numberOfTiles; i++) {
      const tileId = `tile-${i}`;

      tiles.push(
        <TileBlock
          key={tileId}
          id={tileId}
          value={values[i]}
          color={colors[i]}
          handleTileClick={handleTileClick} />
      );
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
      <div className="memoryMainContent" id="tileContainer">
        {generateTiles()}
      </div>
    </div>
  )
}

export default App

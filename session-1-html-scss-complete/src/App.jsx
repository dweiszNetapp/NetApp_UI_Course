import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';

function App() {
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
        <div className="memoryTile">
          <div className="memoryTileContent">3</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">11</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">5</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">11</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">3</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">25</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">5</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">45</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">12</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">45</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">8</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">12</div>
          <div className="tileShutter">?</div>
        </div>
      </div>
    </div>
  )
}

export default App

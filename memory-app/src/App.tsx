import './App.scss';

function App() {

  return (
    <div className='memoryAppContainer'>
      <div className="memoryTitleBar">
        <div className='leftSection'>
          <div>Memory app</div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Difficulty level:</div>
            <input type='number' className='difficultyLevel' />
          </div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Best score: 100</div>
            <div className='numMistakes'>Number of mistakes: 5</div>
          </div>
        </div>
        <button>Reset game</button>
      </div>
      <div className="memoryMainContent">
        <div className="memoryTile">
          <div className="memoryTileContent">1</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">20</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">13</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">4</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">7</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">12</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">55</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">8</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">2</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">9</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">5</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">1</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">33</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">2</div>
          <div className="tileShutter">?</div>
        </div>
        <div className="memoryTile">
          <div className="memoryTileContent">10</div>
          <div className="tileShutter">?</div>
        </div>
      </div>
    </div>
  )
}

export default App

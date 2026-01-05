import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';

function App() {
  return (
    <div className='memoryAppContainer'>
      <div className='momoryTitle'>
        <div className='momoryTitle'>
          <MemoryIcon className='memoryIcon' />
          <div className='titleBlock'>
            <span>Difficulty level</span>
            <input />
          </div>
          <div className='titleBlock'>
            <span>Best score</span>
            <span>Number of mistaks: 0</span>
          </div>
        </div>
        <button>Reset game</button>
      </div>
      <div className='memoryGameContent'>
        <div className="tile">
          <div className='tileCurten'>?</div>
          <div>4</div>
        </div>
        <div className="tile">2</div>
        <div className="tile">12</div>
        <div className="tile">8</div>
        <div className="tile">9</div>
        <div className="tile last">5</div>
      </div>
    </div>
  )
}

export default App

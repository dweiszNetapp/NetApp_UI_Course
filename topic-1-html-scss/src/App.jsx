import './App.css';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';

function App() {
  return (
    <div className='memoryAppContainer'>
      <div className='momoryTitle'>
        <div className='momoryTitle titleLeftSide'>
          <MemoryIcon className='memoryIcon' />
          <div className='titleBlck'>
            <span>Difficulty level</span>
            <input />
          </div>
          <div className='titleBlck'>
            <span>Best score</span>
            <span>Number of mistaks: 0</span>
          </div>
        </div>
        <button>Reset game</button>
      </div>
      <div>Content</div>
    </div>
  )
}

export default App

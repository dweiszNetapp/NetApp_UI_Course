import './App.css';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';

function App() {
  return (
    <div className='memoryAppContainer'>
      <div className='momoryTitle'>
        <div className='momoryTitle titleLeftSide'>
          <MemoryIcon className='memoryIcon' />
          <div>
            Difficulty level
            <input />
          </div>
          <div>Best score</div>
        </div>
        <button>Reset game</button>
      </div>
      <div>Content</div>
    </div>
  )
}

export default App

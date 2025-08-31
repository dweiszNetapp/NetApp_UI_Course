import { useEffect, useState } from 'react';
import './App.scss';
import { getUniqueColors } from './colorUtil';
import { getPairedNumbers } from './numbersUtil';

interface Tile {
  value: number;
  color: string;
}

function App() {
  const [numberOfTiles, setNumberOfTiles] = useState(4);
  const [tiles, setTiles] = useState<Tile[]>();

  useEffect(() => {
    const colors = getUniqueColors(numberOfTiles);
    const values = getPairedNumbers(numberOfTiles);
    const tiles = colors.map<Tile>((color, index) => ({ value: values[index], color }));
    setTiles(tiles);
  }, [numberOfTiles]);

  return (
    <div className='memoryAppContainer'>
      <div className="memoryTitleBar">
        <div className='leftSection'>
          <div>Memory app</div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Difficulty level:</div>
            <input type='number' min={4} step={2} className='difficultyLevel' value={numberOfTiles} onChange={event => setNumberOfTiles(Number(event.target.value))} />
          </div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Best score: 100</div>
            <div className='numMistakes'>Number of mistakes: 5</div>
          </div>
        </div>
        <button>Reset game</button>
      </div>
      <div className="memoryMainContent">
        {tiles?.map((tile, index) => {
          const { value, color } = tile;

          return (
            <div className="memoryTile" key={index}>
              <div className="memoryTileContent">{value}</div>
              <div className="tileShutter" style={{ backgroundColor: color }}>?</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

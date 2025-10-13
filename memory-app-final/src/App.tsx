import { useEffect, useState } from 'react';
import './App.scss';
import './App-vp.scss';
import { getUniqueColors } from './utils/colorUtil';
import { getPairedNumbers } from './utils/numbersUtil';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';

interface Tile {
  value: number,
  color: string,
  index: number
}

function App() {
  const [bestResult, setBestResult] = useState<string | null>(localStorage.getItem('memoryAppBestResult'));
  const [colors, setColors] = useState<string[]>([]);
  const [numberOfTiles, setNumberOfTiles] = useState(4);
  const [tiles, setTiles] = useState<Tile[]>();
  const [firstPair, setFirstPair] = useState<Tile>();
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [numMistakes, setNumMistakes] = useState<number>(0);

  useEffect(() => {
    const colors = getUniqueColors(numberOfTiles);
    setColors(colors);

    const values = getPairedNumbers(numberOfTiles);
    const tiles = colors.map<Tile>((color, index) => ({ value: values[index], color, index }));
    setTiles(tiles);
  }, [numberOfTiles]);

  const handleTileClick = (tile: Tile) => {
    if (firstPair === undefined) {
      setFirstPair(tile);
    } else {
      setFirstPair(undefined);

      if (firstPair.value === tile.value) {
        setVisibleIndexes([...visibleIndexes, firstPair.index, tile.index]);
      } else {
        setFirstPair(tile);
        setNumMistakes(numMistakes + 1);
      }
    }
  }

  const resetGame = (isResetBestScor?: boolean) => {
    setFirstPair(undefined);
    setVisibleIndexes([]);
    setNumMistakes(0);

    const values = getPairedNumbers(numberOfTiles);
    const tiles = colors.map<Tile>((color, index) => ({ value: values[index], color, index }));
    setTiles(tiles);

    if (isResetBestScor) {
      localStorage.removeItem('memoryAppBestResult');
      setBestResult(null);
    }
  }

  const handleDifficultyChange = (value: string) => {
    const newValue = Number(value);
    setNumberOfTiles(newValue);
    resetGame();
  }

  const isAWinner = (): boolean => {
    const result = visibleIndexes.length === tiles?.length;

    if (result) {
      if (!bestResult || Number(bestResult) > numMistakes) {
        localStorage.setItem('memoryAppBestResult', numMistakes.toString());
        setBestResult(numMistakes.toString());
      }
    }

    return result;
  }

  return (
    <div className='memoryAppContainer'>
      <div className="memoryTitleBar">
        <div className='leftSection'>
          <MemoryIcon className='memoryIcon' />
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Difficulty level:</div>
            <input type='number' min={4} max={100} step={2} className='difficultyLevel' value={numberOfTiles} onChange={event => handleDifficultyChange(event.target.value)} />
          </div>
          <div className='leftSectionItem'>
            <div className='sectionTitle'>Best score: {bestResult || 'N/A'}</div>
            <div className='numMistakes'>Number of mistakes: {numMistakes}</div>
          </div>
          {isAWinner() && <div className='youWon'>YOU WON!</div>}
        </div>
        <button className='resetButton' onClick={() => resetGame(true)}>Reset game</button>
      </div>
      <div className="memoryMainContent">
        {tiles?.map((tile, index) => {
          const { value, color } = tile;

          return (
            <div className={`memoryTile ${[...visibleIndexes, firstPair?.index].includes(index) ? 'visible' : ''}`} key={index} onClick={() => handleTileClick(tile)}>
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

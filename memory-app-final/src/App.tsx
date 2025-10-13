import { useState } from 'react';
import './App.scss';
import './App-vp.scss';
import { ReactComponent as MemoryIcon } from './assets/memoryApp.svg';
import TileBlock, { type Tile } from './tile/tile';
import useTiles from './hooks/useTiles';

function App() {
  const [bestResult, setBestResult] = useState<string | null>(localStorage.getItem('memoryAppBestResult'));
  const [numberOfTiles, setNumberOfTiles] = useState(4);
  const [firstPair, setFirstPair] = useState<Tile>();
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [numMistakes, setNumMistakes] = useState<number>(0);

  // Using custom hook to manage tiles
  // Very useful in separating logic from UI
  const { tiles, resetTiles } = useTiles(numberOfTiles);

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

    resetTiles();

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
          return (
            <TileBlock tile={tile} visibleIndexes={visibleIndexes} firstPairIndex={firstPair?.index} handleTileClick={handleTileClick} key={index} />
          )
        })}
      </div>
    </div>
  )
}

export default App

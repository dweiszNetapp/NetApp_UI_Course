import './App.scss';
import './App-vp.scss';
import TileBlock, { type TileBlockProps } from './tileBlock/tileBlock';
import { getPairedNumbers } from './utils/numbersUtil';
import { getUniqueColors } from './utils/colorUtil';
import { useEffect, useState } from 'react';

function App() {
  const [numberOfTiles, setNumberOfTiles] = useState(4);
  const [tiles, setTiles] = useState<TileBlockProps[]>([]);

  const openShutter = (value: string) => {
    const tile = document.getElementById(value);
    tile!.classList.add('opened');
  }

  useEffect(() => {
    setTiles([]);

    for (let i = 0; i < numberOfTiles; i++) {
      setTiles(prevTiles => {
        return [...prevTiles, {
          id: i.toString(),
          onTileClick: (value) => openShutter(value),
          color: getUniqueColors(numberOfTiles)[i],
          value: getPairedNumbers(numberOfTiles)[i].toString()
        }]
      });
    }
  }, [numberOfTiles])

  /**
  * Task: Use getPairedNumbers and getUniqueColors to generate tiles dynamically
  */
  // const generateTiles = () => {
  //   const tiles = [];

  //   const numbers = getPairedNumbers(numberOfTiles);
  //   const colors = getUniqueColors(numberOfTiles);

  //   for (let i = 0; i < numberOfTiles; i++) {
  //     tiles.push(<TileBlock
  //       key={i}
  //       onTileClick={(value) => openShutter(value)}
  //       id={i.toString()}
  //       color={colors[i]}>
  //       <div>{numbers[i]}</div>
  //     </TileBlock>);
  //   }

  //   return tiles;
  // }

  return (
    <div className='memoryAppContainer'>

      <div className="memoryMainContent">
        {tiles.map(tile => <TileBlock
          key={tile.id}
          color={tile.color}
          onTileClick={tile.onTileClick}
          id={tile.id}
          value={tile.value} />)}
      </div>
    </div>
  )
}

export default App
import './App.scss';
import './App-vp.scss';
import TileBlock, { type TileBlockProps } from './tileBlock/tileBlock';
import { getPairedNumbers } from './utils/numbersUtil';
import { useGetUniqueColors } from './utils/colorUtil';
import { useEffect, useState } from 'react';
import UpperBar from './upperBar/upperBar';

function App() {
  const [numberOfTiles, setNumberOfTiles] = useState(4);
  const [tiles, setTiles] = useState<TileBlockProps[]>([]);

  const colors = useGetUniqueColors(numberOfTiles);

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
          color: colors[i],
          value: getPairedNumbers(numberOfTiles)[i].toString()
        }]
      });
    }
  }, [numberOfTiles, colors])

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
      <UpperBar numberOfTiles={numberOfTiles} onNumberOfTilesChange={(value) => setNumberOfTiles(value)} />
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
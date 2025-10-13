import './tile.scss';

export interface Tile {
    value: number,
    color: string,
    index: number
}

interface TileProps {
    tile: Tile,
    visibleIndexes: number[],
    firstPairIndex?: number,
    handleTileClick: (tile: Tile) => void
}

const TileBlock = ({ tile, visibleIndexes, firstPairIndex, handleTileClick }: TileProps) => {
    const { value, color, index } = tile;

    return (
        <div className={`memoryTile ${[...visibleIndexes, firstPairIndex].includes(index) ? 'visible' : ''}`} key={index} onClick={() => handleTileClick(tile)}>
            <div className="memoryTileContent">{value}</div>
            <div className="tileShutter" style={{ backgroundColor: color }}>?</div>
        </div>
    )
}

export default TileBlock;
import './tileBlock.scss';

export interface TileBlockProps {
    id: string;
    onTileClick: (tileId: string) => void;
    color: string;
    value: string;
}

const TileBlock = ({ id, value, color, onTileClick }: TileBlockProps) => {
    return (
        <div className="tileBlock" onClick={() => onTileClick(id)} id={id}>
            <div className="memoryTileContent">{value}</div>
            <div className="tileShutter" style={{ backgroundColor: color }}>?</div>
        </div>
    )
}

export default TileBlock;
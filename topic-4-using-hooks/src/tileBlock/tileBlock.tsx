import { type ReactElement } from 'react';
import './tileBlock.scss';

interface TileBlockProps {
    id: string;
    onTileClick: (tileId: string) => void;
    color: string;
    children: ReactElement;
}

const TileBlock = ({ id, children, color, onTileClick }: TileBlockProps) => {
    return (
        <div className="tileBlock" onClick={() => onTileClick(id)} id={id}>
            <div className="memoryTileContent">{children}</div>
            <div className="tileShutter" style={{ backgroundColor: color }}>?</div>
        </div>
    )
}

export default TileBlock;
import './tileBlock.scss';

const TileBlock = ({ id, onTileClick, children, color }) => {

    return (
        <div className="tileBlock" onClick={() => onTileClick(id)} id={id}>
            <div className="memoryTileContent">{children}</div>
            <div className="tileShutter" style={{ backgroundColor: color }}>?</div>
        </div>
    )
}

export default TileBlock;
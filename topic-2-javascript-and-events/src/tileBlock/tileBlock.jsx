import './tileBlock.scss';

const TileBlock = ({ id, onTileClick, children }) => {
    return (
        <div className="tileBlock" onClick={() => onTileClick(id)} id={id}>
            <div className="memoryTileContent">{children}</div>
            <div className="tileShutter" style={{ backgroundColor: 'red' }}>?</div>
        </div>
    )
}

export default TileBlock;
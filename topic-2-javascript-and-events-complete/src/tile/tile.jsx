import './tile.scss';

const TileBlock = (props) => {

    return (
        <div className="memoryTile" id={props.id} onClick={() => props.handleTileClick(props.id)}>
            <div className="memoryTileContent">{props.value}</div>
            <div className="tileShutter" style={{ backgroundColor: props.color }}>?</div>
        </div>
    )
}

export default TileBlock;
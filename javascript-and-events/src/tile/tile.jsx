import './tile.scss';

const TileBlock = (props) => {

    return (
        <div className="memoryTile" id={props.id} onClick={() => props.handleTileClick(props.id)}>
            <div className="memoryTileContent">1</div>
            <div className="tileShutter">?</div>
        </div>
    )
}

export default TileBlock;
import './upperBar.scss';
import { ReactComponent as MemoryIcon } from '../assets/memoryApp.svg';
// import { useState } from 'react';

interface UpperBarProps {
    numberOfTiles: number;
    onNumberOfTilesChange: (value: number) => void;
}

const UpperBar = ({ numberOfTiles, onNumberOfTilesChange }: UpperBarProps) => {
    // const [numberTiles, setNumberOfTiles] = useState(numberOfTiles);

    return (
        <div className="upperBar">
            <div className='leftSection'>
                <MemoryIcon className='memoryIcon' />
                <div className='leftSectionItem'>
                    <div className='sectionTitle'>Difficulty level:</div>
                    <input type='number' min={4} max={100} step={2} value={numberOfTiles} onChange={(event) => {
                        const value = event.target.value;
                        onNumberOfTilesChange(parseInt(value));
                    }} className='difficultyLevel' />
                </div>
                <div className='leftSectionItem'>
                    <div className='sectionTitle'>Best score: N/A</div>
                    <div className='numMistakes'>Number of mistakes: N/A</div>
                </div>
            </div>
            <button className='resetButton' onClick={() => { }}>Reset game</button>
        </div>
    )
}

export default UpperBar;
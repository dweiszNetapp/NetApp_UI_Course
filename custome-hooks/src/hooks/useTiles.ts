import { useEffect, useState } from "react";
import { getUniqueColors } from "../utils/colorUtil";
import { getPairedNumbers } from "../utils/numbersUtil";
import type { Tile } from "../tile/tile";

const useTiles = (numberOfTiles: number): { tiles: Tile[] | undefined, resetTiles: () => void } => {
    const [tiles, setTiles] = useState<Tile[]>();

    const generateTiles = (numberOfTiles: number) => {
        const colors = getUniqueColors(numberOfTiles);

        const values = getPairedNumbers(numberOfTiles);
        const tiles = colors.map<Tile>((color, index) => ({ value: values[index], color, index }));
        setTiles(tiles);
    }

    useEffect(() => {
        generateTiles(numberOfTiles);
    }, [numberOfTiles]);

    const resetTiles = () => {
        generateTiles(numberOfTiles);
    }

    return { tiles, resetTiles };
}

export default useTiles;
import _ from "lodash";

/**
 * The grid that handles the game state
 */
export class Grid {
    /**
     * Grid in number form
     */
    private data: number[][];

    constructor(dataParam: number[][]) {
        this.data = dataParam;
    }

    /**
     * Returns copied data
     */
    getData(): number[][] {
        return _.cloneDeep(this.data);
    }

    /**
     * Selects a position, and removes the group, if it can
     * @param row - the row to select on
     * @param col - the column, to select on
     */
    select(row: number, col: number): void {
        // Gets the colour to dispose of
        let selectedColour: number = this.data[row][col];

        // If we just clicked on nothing, do nothing
        if (selectedColour === 0)
            return;

        // Gets size of grid
        let size: number = this.data.length;

        // Stores a fringe of tiles that have this colour and are connected to our selected one
        let fringe: [number, number][] = [ [row, col] ];

        // While there's still tiles to get rid of
        while (fringe.length > 0)
        {
            // Pop next tile off the fringe
            let poppedTile: any = fringe.pop();
            if (poppedTile)
            {
                let tile: [number, number] = poppedTile;

                // Gets row and column
                let [ selectedRow, selectedCol ] = tile;

                // Removes it
                this.data[selectedRow][selectedCol] = 0;

                // Checks left
                if (selectedCol > 0)
                    if (this.data[selectedRow][selectedCol - 1] === selectedColour)
                        fringe.push([selectedRow, selectedCol - 1]);
                // Checks right
                if (selectedCol < size - 1)
                    if (this.data[selectedRow][selectedCol + 1] === selectedColour)
                        fringe.push([selectedRow, selectedCol + 1]);
                // Checks up
                if (selectedRow > 0)
                    if (this.data[selectedRow - 1][selectedCol] === selectedColour)
                        fringe.push([selectedRow - 1, selectedCol]);
                // Checks down
                if (selectedRow < size - 1)
                    if (this.data[selectedRow + 1][selectedCol] === selectedColour)
                        fringe.push([selectedRow + 1, selectedCol]);
            }
            else
                break;
        }

        // Temporarily transposes the grid
        this.data = _.unzip(this.data);

        // For every row
        for (let i = 0; i < size; i++)
        {

        }

        // Transposes the grid back again
        this.data = _.unzip(this.data);
    }
}
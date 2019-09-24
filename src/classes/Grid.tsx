import _ from "lodash";

/**
 * The grid that handles the game state
 */
export class Grid {
    /**
     * Grid in number form
     */
    private readonly data: number[][];

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
     * Gets adjacent tile positions
     * @param row - the row of the tile
     * @param col - the column of the tile
     */
    getAdjacentTiles(row: number, col: number): [number, number][] {
        let size = this.data.length;
        let rv: [number, number][] = [];
        
        // Checks left
        if (col > 0)
            rv.push([row, col - 1]);
        // Checks right
        if (col < size - 1)
            rv.push([row, col + 1]);
        // Checks up
        if (row > 0)
            rv.push([row - 1, col]);
        // Checks down
        if (row < size - 1)
            rv.push([row + 1, col]);
            
        return rv;
    }

    /**
     * Selects a position, and removes the group, if it can
     * @param row - the row to select on
     * @param col - the column, to select on
     * @returns a new Grid where the tile has been selected
     */
    select(row: number, col: number): Grid {
        // Gets data to edit
        let newData: number[][] = this.getData();
        
        // Gets the colour to dispose of
        let selectedColour: number = newData[row][col];

        // If we just clicked on nothing, do nothing
        if (selectedColour === 0)
            return new Grid(newData);

        // If this group is only one tile big, do nothing
        let adjacentTiles = this.getAdjacentTiles(row, col);
        adjacentTiles = _.filter(adjacentTiles, ([r, c]) => newData[r][c] === selectedColour);
        if (adjacentTiles.length === 0)
            return new Grid(newData);

        // Gets size of grid
        let size: number = newData.length;

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
                newData[selectedRow][selectedCol] = 0;

                // Gets adjacent tiles
                let adjacentTiles = this.getAdjacentTiles(selectedRow, selectedCol);

                // Filters out tiles that aren't our colour
                adjacentTiles = _.filter(adjacentTiles, ([r, c]) => newData[r][c] === selectedColour);

                // Adds these to the fringe
                _.forEach(adjacentTiles, e => fringe.push(e));
            }
            else
                break;
        }

        // Temporarily transposes the grid
        newData = _.unzip(newData);

        // For every row (moving tiles down)
        for (let i = 0; i < size; i++)
        {
            // Stores displacement
            let displacement = 0;

            // Start from the bottom, work our way up
            for (let j = size - 1; j >= 0; j--)
            {
                // If this is 0, increase displacement
                if (newData[i][j] === 0)
                    displacement++;
                else {
                    let val = newData[i][j];
                    newData[i][j] = 0;
                    newData[i][j + displacement] = val;
                }
            }
        }

        // Stores displacement
        let displacement = 0;

        // For every row (moving rows to the right)
        for (let i = size - 1; i >= 0; i--)
        {
            // If this row is all zeroes
            if (_.reduce(newData[i], (a, x) => a + x, 0) === 0)
                displacement++;
            else {
                let val = _.clone(newData[i]);
                newData[i] = _.map(newData[i], x => 0);
                newData[i + displacement] = val;
            }
        }

        // Transposes the grid back again
        newData = _.unzip(newData);

        // Returns grid
        return new Grid(newData);
    }
}
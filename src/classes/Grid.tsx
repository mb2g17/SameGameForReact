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

    }
}
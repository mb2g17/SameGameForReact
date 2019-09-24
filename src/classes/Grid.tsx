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
}
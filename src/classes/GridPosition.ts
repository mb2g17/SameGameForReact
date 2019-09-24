/**
 * Represents a position on a grid
 */
export class GridPosition {
    private readonly _row: number;
    private readonly _col: number;

    constructor(row: number, col: number) {
        this._row = row;
        this._col = col;
    }

    /**
     * Gets row
     */
    get row(): number {
        return this._row;
    }

    /**
     * Gets column
     */
    get col(): number {
        return this._col;
    }

    /**
     * Gets position as 2d array [row, col]
     * @returns a 2D array of row and col, respectively
     */
    toArray(): number[] {
        return [this.row, this.col];
    }

    /**
     * Gets unique key for this position
     * @returns a unique key for this position
     */
    getKey(): number {
        return 2 ** this.row * 3 ** this.col;
    }

    /**
     * Checks if this position is equal to another
     * @param pos - the position to check
     * @returns true if both positions are equal
     */
    equals(pos: GridPosition): boolean {
        return this.row === pos.row && this.col === pos.col;
    }

    /**
     * Converts key to GridPosition
     * @param key - the key to convert
     * @returns the GridPosition with that key
     */
    static fromKeyToPosition(key: number): GridPosition {
        let row: number = 0, col: number = 0;

        // Gets row
        while (key % 2 === 0) {
            row++;
            key = key / 2;
        }

        // Gets col
        while (key % 3 === 0) {
            col++;
            key = key / 3;
        }

        // Returns pos
        return new GridPosition(row, col);
    }
}
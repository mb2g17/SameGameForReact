import {GridPosition} from "./GridPosition";
import _ from "lodash";

/**
 * Checks if two lists of grid positions hold the same positions
 * @param gridPos1 - the first list of grid positions
 * @param gridPos2 - the second list of grid positions
 * @returns true if both lists hold the same positions
 */
export function areTwoListsOfGridPositionsEqual(gridPos1: GridPosition[], gridPos2: GridPosition[]): boolean {
    return _.reduce(gridPos1, (a, pos) => a + pos.getKey(), 0) ===
           _.reduce(gridPos2, (a, pos) => a + pos.getKey(), 0);
}
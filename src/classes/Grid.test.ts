import {Grid} from "./Grid";
import _ from "lodash";
import {GridPosition} from "./GridPosition";
import {areTwoListsOfGridPositionsEqual} from "./Miscellaneous";

/**
 * Compares two arrays
 * @param arr1 - the first array
 * @param arr2 - the second array
 * @param equalFunc - the function used for checking if two elements are equal
 */
function arraysEqual(arr1: any[], arr2: any[], equalFunc: (e1: any, e2: any) => boolean) {
    if (arr1.length !== arr2.length)
        return false;
    for (let i = arr1.length; i--;)
        if (!equalFunc(arr1[i], arr2[i]))
            return false;
    return true;
}

it('should return appropriate data', function () {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let grid: Grid = new Grid(arr);
    expect(grid.getData()).toEqual(arr);
});

it('should get adjacent tiles', function () {
    // Test 1
    let grid: Grid = new Grid([
        [0, 3, 0],
        [0, 3, 0],
        [1, 3, 2]
    ]);

    let adjacentTiles = grid.getAdjacentTiles(1, 1);
    expect(areTwoListsOfGridPositionsEqual([
        new GridPosition(0, 1),
        new GridPosition(2, 1),
        new GridPosition(1, 0),
        new GridPosition(1, 2)
    ], adjacentTiles)).toBeTruthy();

    // Test 2
    adjacentTiles = grid.getAdjacentTiles(0, 0);
    expect(areTwoListsOfGridPositionsEqual([
        new GridPosition(0, 1),
        new GridPosition(1, 0)
    ], adjacentTiles)).toBeTruthy();
});

it('should be able to get groups', function () {
    let grid: Grid = new Grid([
        [0, 3, 0],
        [0, 3, 0],
        [1, 3, 2]
    ]);
    let group = grid.getGroup(1, 1);
    expect(areTwoListsOfGridPositionsEqual([
        new GridPosition(1, 1),
        new GridPosition(0, 1),
        new GridPosition(2, 1)
    ], group)).toBeTruthy();
});

it('should remove groups of same-coloured tiles', function () {
    let grid: Grid = new Grid([
        [3, 2, 3],
        [1, 3, 2],
        [1, 2, 3]
    ]);
    grid = grid.select(1, 0);
    expect(grid.getData()).toEqual([
        [0, 2, 3],
        [0, 3, 2],
        [3, 2, 3]
    ]);
});

it('should let top tiles fall when lower ones are removed', function () {
    let grid: Grid = new Grid([
        [1, 2, 1],
        [3, 3, 3],
        [2, 1, 2]
    ]);
    grid = grid.select(1, 1);
    expect(grid.getData()).toEqual([
        [0, 0, 0],
        [1, 2, 1],
        [2, 1, 2]
    ]);
});

it('should not remove groups of 1 tile', function () {
    let grid: Grid = new Grid([
        [3, 2, 3],
        [1, 3, 2],
        [1, 2, 3]
    ]);
    grid = grid.select(0, 2);
    expect(grid.getData()).toEqual([
        [3, 2, 3],
        [1, 3, 2],
        [1, 2, 3]
    ]);
});

it('should do nothing when clicking on nothing', function () {
    let grid: Grid = new Grid([
        [3, 2, 3],
        [0, 0, 0],
        [1, 2, 3]
    ]);
    grid = grid.select(1, 1);
    expect(grid.getData()).toEqual([
        [3, 2, 3],
        [0, 0, 0],
        [1, 2, 3]
    ]);
});

it('should move tiles to the right on the bottom row', function () {
    // Test 1
    let grid: Grid = new Grid([
        [0, 0, 0],
        [0, 3, 0],
        [1, 3, 2]
    ]);
    grid = grid.select(1, 1);
    expect(grid.getData()).toEqual([
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 2]
    ]);

    // Test 2
    grid = new Grid([
        [0, 0, 0, 0],
        [0, 3, 0, 0],
        [1, 3, 0, 2]
    ]);
    grid = grid.select(1, 1);
    expect(grid.getData()).toEqual([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 1, 2]
    ]);
});

it('should know when the game is done', function () {
    // Test 1
    let grid: Grid = new Grid([
        [0, 0, 0],
        [0, 2, 3],
        [3, 1, 2]
    ]);
    expect(grid.isGameFinished()).toBeTruthy();

    // Test 2
    grid = new Grid([
        [0, 0, 0],
        [0, 0, 2],
        [0, 1, 2]
    ]);
    expect(grid.isGameFinished()).toBeFalsy();
});

it('should know when we\'ve won', function () {
    // Test 1
    let grid: Grid = new Grid([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]);
    expect(grid.didWeWin()).toBeTruthy();

    // Test 2
    grid = new Grid([
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 2]
    ]);
    expect(grid.didWeWin()).toBeFalsy();
});
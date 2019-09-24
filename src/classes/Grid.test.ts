import {Grid} from "./Grid";

it('should return appropriate data', function () {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let grid: Grid = new Grid(arr);
    expect(grid.getData()).toEqual(arr);
});

it('should remove groups of same-coloured tiles', function () {
    let grid: Grid = new Grid([
        [3, 2, 3],
        [1, 3, 2],
        [1, 2, 3]
    ]);
    grid.select(1, 0);
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
    grid.select(1, 1);
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
    grid.select(0, 2);
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
    grid.select(1, 1);
    expect(grid.getData()).toEqual([
        [3, 2, 3],
        [0, 0, 0],
        [1, 2, 3]
    ]);
});
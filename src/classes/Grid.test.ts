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
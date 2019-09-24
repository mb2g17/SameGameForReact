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
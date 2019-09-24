import {GridPosition} from "./GridPosition";

it('should store row and col', function () {
    let gridPos: GridPosition = new GridPosition(2, 3);
    expect(gridPos.row).toEqual(2);
    expect(gridPos.col).toEqual(3);
});

it('should calculate keys properly', function () {
    let gridPos: GridPosition = new GridPosition(2, 3);
    expect(gridPos.getKey()).toEqual(2 ** 2 * 3 ** 3);
});

it('should reverse engineer keys properly', function () {
    let gridPos: GridPosition = GridPosition.fromKeyToPosition(108);
    expect(gridPos.row).toEqual(2);
    expect(gridPos.col).toEqual(3);
});

it('should compare positions correctly', function () {
    let gridPos1: GridPosition = new GridPosition(1, 2);
    let gridPos2: GridPosition = new GridPosition(1, 2);
    expect(gridPos1.equals(gridPos2)).toBeTruthy();
});

it('should convert to arrays properly', function () {
    let gridPos: GridPosition = new GridPosition(1, 2);
    expect(gridPos.toArray()[0]).toEqual(1);
    expect(gridPos.toArray()[1]).toEqual(2);
});
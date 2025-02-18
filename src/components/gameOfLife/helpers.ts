import { ICell } from "../grid/Cell";
import { GridSize } from "./types";

export const LIFE_SPAN_BORDER_IGNORE_SIZE = 3;

export const isLifespanIgnoreCell = (
  r: number,
  c: number,
  gridSize: GridSize
) => {
  return (
    r < LIFE_SPAN_BORDER_IGNORE_SIZE ||
    r > gridSize.height - LIFE_SPAN_BORDER_IGNORE_SIZE - 1 ||
    c < LIFE_SPAN_BORDER_IGNORE_SIZE ||
    c > gridSize.width - LIFE_SPAN_BORDER_IGNORE_SIZE - 1
  );
};

export type NeighboursCount = {
  count: number;
  max: number;
  prop: number;
};

export const getNeighboursCount = (
  grid: ICell[][],
  rowIndex: number,
  columnIndex: number,
  neighbours: number[][]
): NeighboursCount => {
  const count = neighbours.reduce(
    (acc, [dx, dy]) =>
      acc + (Number(grid[rowIndex + dx]?.[columnIndex + dy]?.isActive) || 0),
    0
  );

  return {
    count,
    max: neighbours.length,
    prop: count / neighbours.length,
  };
};

export const immediateNeighbors = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export const getImmediateNeighboursCount = (
  grid: ICell[][],
  rowIndex: number,
  columnIndex: number
) => {
  return getNeighboursCount(grid, rowIndex, columnIndex, immediateNeighbors);
};

export const regionNeighbors = [
  [-3, -3],
  [-3, -2],
  [-3, -1],
  [-3, 0],
  [-3, 1],
  [-3, 2],
  [-3, 3],
  [-2, -3],
  [-2, 3],
  [-1, -3],
  [-1, 3],
  [0, -3],
  [0, 3],
  [1, -3],
  [1, 3],
  [2, -3],
  [2, 3],
  [3, -3],
  [3, -2],
  [3, -1],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
];

export const getRegionNeighborsCount = (
  grid: ICell[][],
  rowIndex: number,
  columnIndex: number
) => {
  return getNeighboursCount(grid, rowIndex, columnIndex, regionNeighbors);
};

import { ICell } from "../grid/Cell";
import { NeighboursCount } from "./helpers";

export type GridType = ICell[][];

export type GridSize = {
  width: number;
  height: number;
};

export type CellInfo = {
  neighbours: NeighboursCount;
  region: NeighboursCount;
  isAlive: boolean;
};

export interface Rule {
  id: string;
  name: string;
  description: string;
  condition: (cellInfo: CellInfo) => boolean;
  result: (cellInfo: CellInfo) => boolean;
}
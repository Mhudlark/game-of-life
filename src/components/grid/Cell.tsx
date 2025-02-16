import React from "react";

export type ICell = {
  isActive: boolean;
  lifeSpan: number;
};

export type CellProps = {
  rowIndex: number;
  columnIndex: number;
  cell: ICell;
  toggleActive: (r: number, c: number) => void;
  cellSize: number;
};

export const Cell: React.FC<CellProps> = ({
  rowIndex,
  columnIndex,
  cell,
  toggleActive,
  cellSize,
}) => {
  return (
    <div
      onClick={() => toggleActive(rowIndex, columnIndex)}
      style={{
        width: cellSize,
        height: cellSize,
        backgroundColor: cell.isActive ? "#06ca39" : "transparent",
        border: "1px solid #333",
        cursor: "pointer",
      }}
    />
  );
};

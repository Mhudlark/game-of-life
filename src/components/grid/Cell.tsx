import { Box, SxProps, Theme } from "@mui/material";
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
  sx?: SxProps<Theme>;
};

export const Cell: React.FC<CellProps> = ({
  rowIndex,
  columnIndex,
  cell,
  toggleActive,
  cellSize,
  sx,
}) => {
  return (
    <Box
      component={"button"}
      onClick={() => toggleActive(rowIndex, columnIndex)}
      sx={{
        width: cellSize,
        height: cellSize,
        backgroundColor: cell.isActive ? "#06ca39" : "transparent",
        willChange: "background-color",
        border: "1px solid #333",
        cursor: "pointer",
        ...sx,
      }}
    />
  );
};

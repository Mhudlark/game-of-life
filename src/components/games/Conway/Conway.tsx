import React from "react";
import { GameOfLife } from "@/components/gameOfLife/GameOfLife";
import { Container } from "@mui/material";
import { Rule } from "@/components/gameOfLife/types";

const rules: Rule[] = [
  {
    id: "underpopulation",
    name: "Underpopulation",
    description: "A live cell with fewer than two live neighbors dies.",
    condition: ({ isAlive, neighbours }) => isAlive && neighbours.count < 2,
    result: () => false,
  },
  {
    id: "overpopulation",
    name: "Overpopulation",
    description: "A live cell with more than three live neighbors dies.",
    condition: ({ isAlive, neighbours }) => isAlive && neighbours.count > 3,
    result: () => false,
  },
  {
    id: "reproduction",
    name: "Reproduction",
    description: "A dead cell with exactly three live neighbors becomes alive.",
    condition: ({ isAlive, neighbours }) => !isAlive && neighbours.count === 3,
    result: () => true,
  },
];

export const Conway: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
      }}
    >
      <GameOfLife
        title={"Conway's Game of Life"}
        rules={rules}
        gridSize={{ width: 40, height: 30 }}
      />
    </Container>
  );
};

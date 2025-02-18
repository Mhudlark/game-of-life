import React from "react";
import { GameOfLife, Rule } from "../../gameOfLife/GameOfLife";
import { Container } from "@mui/material";

const rules: Rule[] = [
  {
    id: "underpopulation",
    name: "Underpopulation",
    description: "A live cell with fewer than two live regionals dies.",
    condition: ({ isAlive, region }) => isAlive && region.count < 2,
    result: () => false,
  },
  {
    id: "overpopulation",
    name: "Overpopulation",
    description: "A live cell with more than three live regionals dies.",
    condition: ({ isAlive, region }) => isAlive && region.count > 3,
    result: () => false,
  },
  {
    id: "reproduction",
    name: "Reproduction",
    description: "A dead cell with exactly three live regionals becomes alive.",
    condition: ({ isAlive, region }) => !isAlive && region.count === 3,
    result: () => true,
  },
];

export const Life2: React.FC = () => {
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
        title={"Life 2"}
        rules={rules}
        gridSize={{ width: 40, height: 30 }}
      />
    </Container>
  );
};

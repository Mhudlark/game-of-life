import React from "react";
import { GameOfLife, Rule } from "../../gameOfLife/GameOfLife";
import { Container } from "@mui/material";

const rules: Rule[] = [
  {
    id: "spreading-life-birth",
    name: "Birth",
    description: "A dead cell with 3 or more live neighbors is born.",
    condition: ({ isAlive, neighbours }) => !isAlive && neighbours.count >= 3,
    result: () => Math.random() < 0.95, // 95% chance of birth, 5% chance of staying dead
  },
  {
    id: "spreading-life-survival",
    name: "Survival",
    description:
      "A live cell with 2 or more live neighbors survives. Overpopulation causes death.",
    condition: ({ isAlive, neighbours }) =>
      isAlive && neighbours.count >= 2 && neighbours.count <= 3,
    result: ({}) => Math.random() < 0.9,
  },
  {
    id: "overpopulation",
    name: "Overpopulation",
    description:
      "A live cell with more than three live neighbors is likely to die.",
    condition: ({ isAlive, neighbours }) => isAlive && neighbours.count > 3,
    result: () => Math.random() < 0.2, // 20% chance of survival, 80% chance of death
  },
  {
    id: "loneliness",
    name: "Loneliness",
    description:
      "A live cell with fewer than two live neighbors is likely to die.",
    condition: ({ isAlive, neighbours }) => isAlive && neighbours.count < 2,
    result: () => Math.random() < 0.1, // 10% chance of survival, 90% chance of death
  },
];

export const Life1: React.FC = () => {
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
        title={"Life 1"}
        description="Achieved good spreading behavior but low lifespans / high flickering."
        rules={rules}
        gridSize={{ width: 40, height: 30 }}
      />
    </Container>
  );
};

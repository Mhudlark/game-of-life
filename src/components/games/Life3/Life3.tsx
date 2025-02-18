import React from "react";
import { GameOfLife } from "@/components/gameOfLife/GameOfLife";
import { Container } from "@mui/material";
import { Rule } from "@/components/gameOfLife/types";

const rules: Rule[] = [
  {
    id: "underpopulation",
    name: "Underpopulation",
    description: "A live cell with fewer than two live regionals dies.",
    condition: ({ isAlive, region }) => isAlive && region.count < 2,
    result: () => Math.random() < 0.2, // 20% chance of survival, 80% chance of death
  },
  {
    id: "overpopulation",
    name: "Overpopulation",
    description: "A live cell with more than three live neighbours dies.",
    condition: ({ isAlive, neighbours }) => isAlive && neighbours.prop > 0.5,
    result: () => Math.random() < 0.1, // 10% chance of survival, 90% chance of death
  },
  {
    id: "regional-overpopulation",
    name: "Regional Overpopulation",
    description: "A live cell with more than five live regionals dies.",
    condition: ({ isAlive, region }) => isAlive && region.prop > 0.5,
    result: () => Math.random() < 0.2, // 20% chance of survival, 80% chance of death
  },
  {
    id: "reproduction",
    name: "Reproduction",
    description: "A dead cell with exactly three live regionals becomes alive.",
    condition: ({ isAlive, region }) => !isAlive && region.count === 3,
    result: () => Math.random() < 0.9, // 90% chance of survival, 10% chance of death
  },
  {
    id: "survival",
    name: "Survival",
    description: "A live cell most likely survives",
    condition: ({ isAlive }) => isAlive,
    result: ({}) => Math.random() < 0.95, // 95% chance of survival, 5% chance of death
  },
];

export const Life3: React.FC = () => {
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
        title={"Life 3"}
        description=""
        rules={rules}
        gridSize={{ width: 40, height: 30 }}
      />
    </Container>
  );
};

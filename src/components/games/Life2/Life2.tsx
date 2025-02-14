import React from "react";
import { GameOfLife, Rule } from "../../gameOfLife/GameOfLife";
import { Container } from "@mui/material";

const rules: Rule[] = [
  {
    id: "spreading-life-birth",
    name: "Birth",
    description: "A dead cell with 3 or more live neighbors is born.",
    condition: ({ isAlive, neighbours }) => !isAlive && neighbours.count >= 3,
    result: () => Math.random() < 0.95,
  },
  {
    id: "spreading-life-survival",
    name: "Survival",
    description:
      "A live cell with 2 or more live neighbors survives. Overpopulation causes death.",
    condition: ({ isAlive }) => isAlive,
    result: ({ neighbours, region }) => {
      // Survival
      if (
        neighbours.count >= 2 &&
        neighbours.prop <= 0.4 &&
        region.prop < 0.1
      ) {
        return Math.random() < 0.9; // Survival range (90% chance)
      }
      // Overpopulation
      else if (neighbours.count > 3) {
        // Chance of death is 80% + 20% * regionPopulationProportion
        return Math.random() < Math.max(0.2, 0.8 * region.prop);
      }
      // Loneliness
      else {
        return Math.random() < 0.1; // Loneliness (10% chance)
      }
    },
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

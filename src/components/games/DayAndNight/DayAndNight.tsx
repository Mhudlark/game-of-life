import React from "react";
import { GameOfLife } from "@/components/gameOfLife/GameOfLife";
import { Container } from "@mui/material";
import { Rule } from "@/components/gameOfLife/types";

const rules: Rule[] = [
  {
    id: "day-and-night-birth",
    name: "Birth",
    description: "A dead cell with 3, 6, 7, or 8 live neighbors is born.",
    condition: ({ neighbours, isAlive }) =>
      !isAlive && [3, 6, 7, 8].includes(neighbours.count),
    result: () => true,
  },
  {
    id: "day-and-night-survival",
    name: "Survival",
    description: "A live cell with 3, 4, 6, 7, or 8 live neighbors survives.",
    condition: ({ isAlive }) => isAlive,
    result: ({ neighbours }) => [3, 4, 6, 7, 8].includes(neighbours.count),
  },
];

export const DayAndNight: React.FC = () => {
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
        title={"Day & Night"}
        description="Has a 'day' phase with high birth rates and a 'night' phase with low survival rates."
        rules={rules}
        gridSize={{ width: 40, height: 30 }}
      />
    </Container>
  );
};

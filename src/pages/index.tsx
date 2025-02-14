import React from "react";
import { Container, Divider } from "@mui/material";
import { DayAndNight } from "@/components/games/DayAndNight/DayAndNight";
import { Conway } from "@/components/games/Conway/Conway";
import { Life1 } from "@/components/games/Life1/Life1";
import { Life2 } from "@/components/games/Life2/Life2";

const GameOfLifePage: React.FC = () => {
  return (
    <Container
      sx={{
        padding: "24px",
        paddingY: "128px",
      }}
    >
      <Conway />
      <Divider
        sx={{
          margin: "96px 0",
        }}
      />
      <DayAndNight />
      <Divider
        sx={{
          margin: "96px 0",
        }}
      />
      <Life1 />
      <Divider
        sx={{
          margin: "96px 0",
        }}
      />
      <Life2 />
    </Container>
  );
};

export default GameOfLifePage;

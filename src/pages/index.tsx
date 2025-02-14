import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
          }}
        >
          My Game of Life
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "512px",
          }}
        >
          <Typography color="textSecondary" textAlign="center">
            Wanted to try a couple of things:
          </Typography>
          <ul>
            <li>
              <Typography color="textSecondary">
                {"Simulate Conway's Game of Life"}
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                Trying out different variations of the game such as Day & Night
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                Implementing a custom rule set that simulates the spread of life
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                Creating a rule set that results in a consistent proportion of
                approx. 40% and an average lifespan higher than Conway's
                (approx. 0.04)
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                Try and create a simulation where the rules change over time,
                depending on the state of the grid
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                Theoretically explore the idea of higher-dimensional simulations
                where the rules change and how this would structure could be
                trained as a machine learning model.
              </Typography>
            </li>
            <li>
              <Typography color="textSecondary">
                Is the previous point bullshit? Probably :)
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>
      <Divider
        sx={{
          margin: "96px 0",
        }}
      />
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

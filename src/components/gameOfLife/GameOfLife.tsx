import React, { useState, useEffect, useMemo } from "react";
import { generateEmptyGrid } from "@/utils/grid";
import { Cell } from "@/components/grid/Cell";
import { Container, Button, Switch, Box, Typography } from "@mui/material"; // Import MUI components
import { Clear, PlayArrow, Stop } from "@mui/icons-material";
import {
  getImmediateNeighboursCount,
  getRegionNeighborsCount,
} from "./helpers";
import { CellInfo, GridSize, GridType, Rule } from "./types";

export type GameOfLifeProps = {
  title: string;
  description?: string;
  rules: Rule[];
  gridSize: GridSize;
  cellSize?: number;
};

export const GameOfLife: React.FC<GameOfLifeProps> = ({
  title,
  description,
  rules,
  gridSize,
  cellSize = 20,
}) => {
  const [grid, setGrid] = useState<GridType>(
    generateEmptyGrid(gridSize.width, gridSize.height)
  );
  const [running, setRunning] = useState<boolean>(false);
  const [ruleStates, setRuleStates] = useState<Record<string, boolean>>(
    Object.fromEntries(rules.map((rule) => [rule.id, true]))
  );

  const toggleCell = (row: number, col: number): void => {
    setGrid((g) =>
      g.map((rowArr, r) =>
        rowArr.map((cell, c) => {
          if (row === r && col === c) {
            return {
              ...cell,
              isActive: !cell.isActive,
            };
          }
          return cell;
        })
      )
    );
  };

  const getNextGeneration = (grid: GridType): GridType => {
    return grid.map((row, r) =>
      row.map((cell, c) => {
        const neighbours = getImmediateNeighboursCount(grid, r, c);
        const region = getRegionNeighborsCount(grid, r, c);

        const cellInfo: CellInfo = {
          neighbours,
          region,
          isAlive: cell.isActive,
        };

        const activeRule = rules.find(
          (rule) => ruleStates[rule.id] && rule.condition(cellInfo)
        );

        const isActive = activeRule
          ? activeRule.result(cellInfo)
          : cell.isActive;

        return {
          // Increase lifespan of surviving cells only
          lifeSpan: cell.isActive && isActive ? cell.lifeSpan + 1 : 0,
          isActive,
        };
      })
    );
  };

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => {
      setGrid((g) => getNextGeneration(g));
    }, 500);
    return () => clearInterval(interval);
  }, [running, ruleStates]);

  const toggleEnableRule = (id: string) => {
    setRuleStates((prev) => ({
      ...prev,
      [id]: prev?.[id] ? !prev[id] : true,
    }));
  };

  const numCells = useMemo(() => gridSize.width * gridSize.height, [gridSize]);
  const count = useMemo(
    () => grid.flat().filter((cell) => cell.isActive).length,
    [grid]
  );
  const proportion = useMemo(() => count / numCells, [count, numCells]);
  const averageLifeSpan = useMemo(
    () => grid.flat().reduce((acc, cell) => acc + cell.lifeSpan, 0) / numCells,
    [grid, numCells]
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ marginBottom: "24px", textAlign: "center" }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          sx={{ marginBottom: "24px", textAlign: "center" }}
          color="textSecondary"
        >
          {description}
        </Typography>
      )}

      {/* Controls */}
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Button
          onClick={() => setRunning(!running)}
          variant="contained"
          color={running ? "error" : "success"}
          endIcon={running ? <Stop /> : <PlayArrow />}
        >
          {running ? "Stop" : "Start"}
        </Button>
        <Button
          onClick={() =>
            setGrid(generateEmptyGrid(gridSize.width, gridSize.height))
          }
          variant="contained"
          color="warning"
          endIcon={<Clear />}
        >
          Clear
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography color="textSecondary">{`Prop: ${proportion.toFixed(2)}`}</Typography>
        <Typography color="textSecondary">
          {`Avg. Lifespan: ${averageLifeSpan.toFixed(3)}`}
        </Typography>
      </Box>

      {/* Rules */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6">Rules</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          {rules.map((rule) => (
            <Box key={rule.id} sx={{ display: "flex", alignItems: "center" }}>
              <Typography>{rule.name}</Typography>
              <Switch
                checked={ruleStates?.[rule?.id] ?? true}
                onChange={() => toggleEnableRule(rule.id)}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize.width}, ${cellSize}px)`,
          padding: "8px",
          border: "1px solid #fafafa",
          borderRadius: "4px",
          borderCollapse: "collapse",
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <Cell
              key={`${r}-${c}`}
              rowIndex={r}
              columnIndex={c}
              cell={cell}
              toggleActive={toggleCell}
              cellSize={cellSize}
            />
          ))
        )}
      </Box>
    </Container>
  );
};

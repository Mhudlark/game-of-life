import { ICell } from "@/components/grid/Cell";

export const generateEmptyGrid = (width: number, height: number): ICell[][] => {
  return Array(height)
    .fill(null)
    .map(() =>
      Array(width).fill({
        isActive: false,
        lifeSpan: 0,
      })
    );
};

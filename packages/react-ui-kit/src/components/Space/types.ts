export type Size = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 7.5;
export type Direction = "x" | "y";

export interface SpaceProps {
  direction: Direction;
  size?: Size;
  compose?: Size[];
}

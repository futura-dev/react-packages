export type Size = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 7.5;
export type Direction = "x" | "y";

export interface SpaceProps {
  direction: Direction;
  size?: Size;
  compose?: Size[];
}

export const Space = ({ direction, size, compose }: SpaceProps): JSX.Element => {
  if (compose)
    return (
      <>
        {compose.map((size, i) => (
          <Space key={i} direction={direction} size={size} />
        ))}
      </>
    );

  switch (direction) {
    case "x":
      return <div style={{ width: `${size}cqw` }} />;
    case "y":
      return <div style={{ height: `${size}cqh` }} />;
    default:
      return <></>;
  }
};

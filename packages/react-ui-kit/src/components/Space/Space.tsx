// types
import { SpaceProps } from "./types";

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

import classNames from "classnames";

interface DividerProps {
  isSmall?: boolean;
  className?: string;
  direction?: "x" | "y";
}

export const Divider = ({ className, direction = "x", isSmall = false }: DividerProps) => {
  return (
    <>
      {isSmall ? (
        <div
          className={classNames(
            className,
            "bg-primary-light-500 dark:bg-background-light",
            direction === "x" ? "h-3 w-20 md:h-4 md:w-30 xl:h-5 xl:w-40" : "h-20 w-3 md:h-30 md:w-4 xl:h-36 xl:w-5"
          )}
        />
      ) : (
        <div className={className} />
      )}
    </>
  );
};

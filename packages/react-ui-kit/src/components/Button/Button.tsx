import classNames from "classnames";

// types
import { ButtonProps } from "./types";

export const Button = ({
  text,
  onClick,
  size,
  variant = "custom",
  className = "",
}: ButtonProps) => {
  let variantClass = "";
  let sizeTextClass = "";
  let sizeButtonClass = "";

  switch (size) {
    case "s":
      sizeButtonClass = "w-20 h-8 md:w-24 md:h-8";
      break;
    case "m":
      sizeButtonClass = "w-24 h-8 md:w-32";
      break;
    case "l":
      sizeButtonClass = "w-36 h-9 md:w-44";
      break;
    case "xl":
      sizeButtonClass = "w-48 h-10 md:w-56";
      break;
  }

  switch (size) {
    case "s":
    case "m":
      sizeTextClass = "futura-text-extra-small";
      break;
    case "l":
      sizeTextClass = "futura-small";
      break;
    case "xl":
      sizeTextClass = "futura-text";
      break;
  }

  switch (variant) {
    case "purple":
      variantClass =
        "flex justify-center items-center md:h-12 py-1 px-3 bg-futura-purple-500 text-white rounded-[2rem] text-base md:text-xl font-semibold";
      break;
    case "white":
      variantClass =
        "flex justify-center items-center md:h-12 py-1 px-3 bg-white text-background-dark border-background-dark border-solid border-[1px]";
      break;
    case "black":
      variantClass =
        "flex justify-center items-center md:h-12 py-1 px-3 bg-background-dark text-white border-white border-solid border-[1px]";
      break;
    default:
      variantClass = className;
      break;
  }

  return (
    <>
      <button
        className={classNames(sizeButtonClass, variantClass, className)}
        onClick={onClick}
      >
        <p className={sizeTextClass}>{text}</p>
      </button>
    </>
  );
};

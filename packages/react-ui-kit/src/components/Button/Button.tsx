import classNames from "classnames";

// types
import { ButtonProps } from "./types";

export const Button = ({ text, onClick, size, variant = "custom", className = "" }: ButtonProps) => {
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
      variantClass = "button-purple";
      break;
    case "white":
      variantClass = "button-white";
      break;
    case "black":
      variantClass = "button-black";
      break;
    default:
      variantClass = className;
      break;
  }

  return (
    <>
      <button className={classNames(sizeButtonClass, variantClass, className)} onClick={onClick}>
        <p className={sizeTextClass}>{text}</p>
      </button>
    </>
  );
};

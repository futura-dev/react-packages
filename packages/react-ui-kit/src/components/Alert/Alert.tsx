import classNames from "classnames";
import { useEffect, useState } from "react";

// types
import { AlertProps } from "./types";

export const Alert = ({
  text,
  description,
  active,
  variant,
  className = "",
  timing = 3000,
}: AlertProps) => {
  let variantColor = "";

  const [show, setShow] = useState(false);

  switch (variant) {
    case "info":
      variantColor =
        "p-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400";
      break;
    case "danger":
      variantColor =
        "p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400";
      break;
    case "success":
      variantColor =
        "p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400";
      break;
    case "warning":
      variantColor =
        "p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300";
      break;
    default:
      variantColor = className;
      break;
  }

  useEffect(() => {
    if (active) {
      setShow(true);
      setTimeout(() => setShow(false), timing);
    }
  }, [timing, active]);

  return show ? (
    <div className={classNames(className, variantColor)} role="alert">
      <span className="font-medium">{text}</span> {description}
    </div>
  ) : null;
};

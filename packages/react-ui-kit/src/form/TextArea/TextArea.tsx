import classNames from "classnames";

// types
import { TextAreaProps } from "./types";

export const TextArea = ({ ...props }: TextAreaProps) => {
  const { label, id, errorMessage, invalid = false, className } = props;

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          className="block futura-text-extra-small leading-6 mb-2"
        >
          {label}
        </label>
      )}
      <textarea
        {...props}
        className={classNames(
          "focus:outline-0 block w-full rounded-md border-0 text-gray-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-futura-purple-500",
          className,
          invalid && "ring-1 ring-inset ring-red-500"
        )}
      ></textarea>
      {invalid && (
        <span className="mt-2 text-sm text-red-500">{errorMessage}</span>
      )}
    </>
  );
};

import classNames from "classnames";

// types
import { InputProps } from "./types";

// images
import { IconExclamationCircle } from "@/static/icons";

export const Input = ({ ...props }: InputProps) => {
  const { id, label, className, invalid = false, errorMessage } = props;

  return (
    <>
      {label && (
        <label htmlFor={id} className="block futura-text-extra-small leading-6 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          className={classNames(
            "focus:outline-0 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-futura-purple-500",
            className,
            invalid && "ring-1 ring-inset ring-red-500"
          )}
        />

        {invalid && (
          <>
            <div className="absolute end-2 top-2">
              <IconExclamationCircle color="#FF0000" width="20" height="20" viewBox="0 0 24 24" />
            </div>
            <span className="mt-3 text-sm text-red-500">{errorMessage}</span>
          </>
        )}
      </div>
    </>
  );
};

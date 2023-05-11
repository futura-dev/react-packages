import classNames from "classnames";

// types
import { InputPrefixProps } from "./types";

// images
import { IconExclamationCircle } from "@/static/icons";

export const InputPrefix = ({ ...props }: InputPrefixProps) => {
  const { id, label, name, className, invalid, errorMessage, prefix } = props;

  return (
    <>
      {label && (
        <label htmlFor={id} className="block futura-text-extra-small leading-6 mb-2">
          {label}
        </label>
      )}

      <>
        <div
          className={classNames(
            "relative flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-futura-purple-500 sm:max-w-md",
            className,
            invalid && "ring-1 ring-inset ring-red-500"
          )}
        >
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm border-0">{prefix}</span>
          <input
            {...props}
            type="text"
            autoComplete={name}
            placeholder="janesmith"
            className="focus:outline-0 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          {invalid && (
            <div className="absolute end-2 top-2">
              <IconExclamationCircle stroke="#FF0000" width="20" height="20" viewBox="0 0 24 24" />
            </div>
          )}
        </div>

        {invalid && <span className="mt-3 text-sm text-red-500">{errorMessage}</span>}
      </>
    </>
  );
};

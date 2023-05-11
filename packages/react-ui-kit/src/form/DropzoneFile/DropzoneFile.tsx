import classNames from "classnames";
import { useMemo } from "react";
// types
import { DropzoneFileProps } from "./types";

// images
import { IconCloudUpload, IconFile, IconTrash } from "@/static/icons";

export const DropzoneFile = ({ ...props }: DropzoneFileProps) => {
  const { label, file, name, reset, errorMessage, invalid, dropzoneTitle, dropzoneSubTitle } = props;

  const urlFile = useMemo(() => (file ? URL.createObjectURL(file) : ""), [file]);

  return (
    <>
      {label && <label className="block futura-text-extra-small font-medium leading-6 mb-2">{label}</label>}
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className={classNames(
            !file && "cursor-pointer",
            "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",
            invalid && "border-2 border-red-500 border-dashed"
          )}
        >
          {file ? (
            <div className="relative h-full w-full flex justify-center">
              <a id="dropzone-file" className="flex flex-col items-center self-center" href={urlFile}>
                <IconFile width="50" height="50" viewBox="0 0 24 24" stroke="#9CA3AF" />
                <span className="mt-3">{file.name}</span>
              </a>
              <button className="absolute end-5 top-4" onClick={() => reset && reset(name)}>
                <IconTrash width="30" height="30" viewBox="0 0 24 24" stroke="#6C09EF" />
              </button>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <IconCloudUpload width="50" height="50" viewBox="0 0 24 24" stroke="#9CA3AF" />
                <p className="mb-2 futura-text-extra-small text-gray-500 dark:text-gray-400 mt-2">
                  <p className="font-semibold">
                    <span className={classNames(invalid ? "text-red-500" : "text-futura-purple")}>{dropzoneTitle}</span>
                  </p>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{dropzoneSubTitle}</p>
              </div>
              <input {...props} type="file" className="hidden" />
            </>
          )}
        </label>
      </div>
      {invalid && <span className="mt-3 text-sm text-red-500">{errorMessage}</span>}
    </>
  );
};

import { useState } from "react";

// types
import { AccordionProps } from "./types";

// components
import { Divider, Space } from "@/components";

// icons
import { IconCaretDown, IconCaretUp } from "@/static/icons";

export const Accordion = ({ title, description, children }: AccordionProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex" onClick={() => setShow(!show)}>
        <Divider className="bg-background-dark h-auto w-4 xl:w-5" />
        <Space direction="x" size={3} />
        <div className="flex justify-between w-full">
          <div className="flex flex-col basis-11/12">
            <Space direction="y" size={1} />
            <p className="font-extrabold futura-text-medium">{title}</p>
            <Space direction="y" size={1} />
            <p className="hidden md:block futura-text-small">{description}</p>
          </div>
          {show ? (
            <div className="flex self-center basis-1/12 h-10 w-10">
              <IconCaretUp
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          ) : (
            <div className="flex self-center basis-1/12 h-10 w-10">
              <IconCaretDown
                width="20"
                height="20"
                viewBox="0 0 24 24"
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          )}
        </div>
      </div>
      {show && children}
    </>
  );
};

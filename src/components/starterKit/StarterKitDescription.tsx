import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

interface IProps {
  descriptionHeader: string;
  descriptionItems: string[];
}

const StarterKitDescription = ({
  descriptionHeader,
  descriptionItems,
}: IProps) => {
  return (
    <>
      <div className="">
        <h2 className="text-sm font-medium intro-y max-w-md mt-5">
          {descriptionHeader}
        </h2>

        <h2 className="text-md font-medium intro-y max-w-md mt-5">
          Kit Includes
        </h2>
        <ul className="text-sm mt-4 flex flex-col gap-4">
          {descriptionItems.map((item, index) => (
            <li className="flex items-center gap-3" key={index + 1}>
              <div className="rounded-full bg-primary p-1">
                <CheckIcon className="w-4 h-4 text-white" />{" "}
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StarterKitDescription;

import React from "react";
import { ITabsProps } from "../../apps/AppProvider/AppProvider";
import { getIcon } from "../../hooks";

interface TListProps {
  items?: ITabsProps[];
}

const List: React.FC<TListProps> = (props) => {
  return (
    <div className="flex flex-col w-full">
      {props.items?.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-2 py-1 px-8 hover:bg-default-200 items-center text-sm  "
            onClick={() => console.log("selected", item.name)}
          >
            {getIcon(item.name)}
            <p className="whitespace-nowrap truncate">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;

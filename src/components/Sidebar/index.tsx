import React from "react";
import { VscEllipsis } from "react-icons/vsc";

const Sidebar: React.FC = () => {
  return (
    <div className="relative w-80 h-full flex flex-col bg-default-400 justify-start items-start text-grayText">
      <div className="flex w-full justify-between items-center py-2 px-4 text-sm">
        <p className="text-xs">EXPLORER</p>
        <VscEllipsis />
      </div>
      {/* <CollapsibleTab items={itemTabs} /> */}
    </div>
  );
};

export default Sidebar;

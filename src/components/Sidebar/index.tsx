import React, { ReactNode } from "react";
import { VscEllipsis } from "react-icons/vsc";

interface TSidebarProps {
  children?: ReactNode;
}

const Sidebar: React.FC<TSidebarProps> = (props) => {
  return (
    <div className="relative w-full h-full flex flex-col bg-default-400 justify-start items-start text-grayText border-r border-default-100">
      <div className="flex w-full justify-between items-center py-2 px-4 text-sm">
        <p className="text-xs">EXPLORER</p>
        <VscEllipsis />
      </div>
      {props.children}
      {/* <CollapsibleTab items={itemTabs} /> */}
    </div>
  );
};

export default Sidebar;

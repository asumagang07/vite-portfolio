import React from "react";
import { VscChromeMinimize, VscChromeClose } from "react-icons/vsc";

const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex items-center justify-between bg-default-100 h-10">
        <div className="w-4" />
        <div className="flex items-center gap-4 text-white text-sm">
          <div className="w-3 h-3 rounded-full bg-white" />
          Home.js - react- Visual Studio Code
        </div>
        <div className="flex items-center gap-4 text-white px-4">
          <button>
            <VscChromeMinimize />
          </button>
          <button>
            <VscChromeClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

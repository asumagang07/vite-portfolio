import React from "react";
import { Button } from "..";

const Navigation: React.FC = () => {
  return (
    <div className="w-full flex h-8 bg-default-300 items-center justify-start border-t border-default-600">
      <div className="flex items-center justify-start text-grayText px-2 text-sm">
        <Button className="px-2" label="File" />
        <Button className="px-2" label="Edit" />
        <Button className="px-2" label="Selection" />
        <Button className="px-2" label="View" />
        <Button className="px-2" label="Go" />
        <Button className="px-2" label="Run" />
        <Button className="px-2" label="Terminal" />
        <Button className="px-2" label="Help" />
      </div>
    </div>
  );
};

export default Navigation;

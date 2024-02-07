import React, { useContext } from "react";
import {
  VscAccount,
  VscSettingsGear,
  VscFiles,
  VscSourceControl,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
} from "react-icons/vsc";
import { ThemeContext } from "../../apps/AppProvider/ThemeProvider";
import { AppContext } from "../../apps/AppProvider/AppProvider";

const data = [
  {
    id: "1",
    icon: <VscFiles size={25} />,
    content: "Explorer (Ctrl+Shift+E)",
  },
  {
    id: "2",
    icon: <VscSourceControl size={25} />,
    content: "Source Control (Ctrl+Shift+G G)",
  },
  {
    id: "3",
    icon: <VscSearch size={25} />,
    content: "Search (Ctrl+Shift+F)",
  },
  {
    id: "4",
    icon: <VscDebugAlt size={25} />,
    content: "Run and Debug",
  },
  {
    id: "5",
    icon: <VscExtensions size={25} />,
    content: "Extensions (Ctrl+Shift+X)",
  },
];

const ActivityBar: React.FC = () => {
  const {
    theme: { activityBarStyles },
  } = useContext(ThemeContext);

  const { sidebar_collapse, setSidebarCollapse } = useContext(AppContext);

  const handleClick = (id?: string) => {
    if (id === "1") {
      setSidebarCollapse(!sidebar_collapse);
      console.log(sidebar_collapse, "list-----");
      return;
    }
    return;
  };

  return (
    <div className={activityBarStyles.rootCls}>
      <div className={activityBarStyles.wrapperCls}>
        <div className={activityBarStyles.divCls}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={activityBarStyles.buttonCls.base}
                onClick={() => handleClick(item.id)}
              >
                {item.icon}
              </div>
            );
          })}
        </div>
        <div className={activityBarStyles.divCls}>
          <div className={activityBarStyles.buttonCls.base}>
            <VscAccount size={25} />
          </div>

          <div className={activityBarStyles.buttonCls.base}>
            <VscSettingsGear size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;

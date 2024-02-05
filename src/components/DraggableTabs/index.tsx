/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import cn from "classnames";
import { ITabsProps } from "../../apps/AppProvider/AppProvider";
import { IoMdClose } from "react-icons/io";
import { getIcon } from "../../hooks";

interface TDraggableTabProps {
  tab_items?: ITabsProps[];
  className?: string;
  defaultActiveTab?: string;
  closable?: boolean;
}

const DraggableTabs: React.FC<TDraggableTabProps> = (props) => {
  const {
    className,
    closable = true,
    defaultActiveTab = "getStarted",
    tab_items,
  } = props;

  const [activeTab, setactiveTab] = useState(defaultActiveTab);
  const [tabItems, settabItems] = useState(tab_items);

  const RemoveTab = (id: any) => {
    const rtab = tabItems?.filter((e) => e.id !== id);
    settabItems(rtab);
  };

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const draggableitems = Array.from(tabItems ?? []);
    const [dragtab] = draggableitems.splice(result.source.index, 1);
    draggableitems.splice(result.destination.index, 0, dragtab);

    settabItems(draggableitems);
  };

  const getFilteredTab = useMemo(() => {
    const tabFilter = tabItems?.filter((tab) => {
      return tab?.id === activeTab;
    });
    return tabFilter?.map((item) => {
      return <div className="">{item.children}</div>;
    });
  }, [activeTab, tabItems]);

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tablist" direction="horizontal">
          {(provided) => (
            <ul
              className={cn(
                "tablist relative flex w-full border-b border-default-100",
                className
              )}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tabItems?.map(({ id, name, icon }, index) => {
                return (
                  <Draggable key={id} draggableId={id ?? ""} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cn(
                          "flex py-2 px-4 items-center justify-center gap-2 min-w-[5rem]  border-r border-default-100 text-xs text-grayText",
                          snapshot.isDragging
                            ? "drop-shadow-lg opacity-50 border-b border-b-white border-t border-t-blueText"
                            : "",
                          activeTab === id
                            ? "bg-default-600 border-t border-t-blueText"
                            : "bg-default-200"
                        )}
                        onClick={(e) => {
                          //@ts-ignore
                          const element = e.target.tagName;
                          if (element.toLowerCase() === "li")
                            setactiveTab(id ?? "");
                        }}
                      >
                        {icon && getIcon(name)}
                        {name}
                        {closable && (
                          <button
                            className="btn-close relative"
                            onClick={() => RemoveTab(id)}
                          >
                            {<IoMdClose />}
                          </button>
                        )}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <div className="w-full h-full pt-4 text-white">{getFilteredTab}</div>
    </div>
  );
};

export default DraggableTabs;

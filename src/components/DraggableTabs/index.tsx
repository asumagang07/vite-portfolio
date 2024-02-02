import React from "react";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import cn from "classnames";
import { ITabsProps } from "../../apps/AppProvider/AppProvider";

interface TDraggableTabProps {
  tab_items?: ITabsProps[];
}

const DraggableTabs: React.FC<TDraggableTabProps> = (props) => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="characters" direction="horizontal">
          {(provided) => (
            <ul
              className="characters flex w-full"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {props.tab_items?.map(({ id, name, icon }, index) => {
                return (
                  <Draggable key={id} draggableId={id ?? ""} index={index}>
                    {(provided, snapshot) => (
                      <li
                        className={cn(
                          "flex py-2 px-4 items-center justify-center gap-2 min-w-[5rem]  border-r border-default-600 text-xs text-grayText",
                          snapshot.isDragging ? "drop-shadow-lg opacity-50" : ""
                          // active === id ? "bg-default-600" : "bg-default-200"
                        )}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {icon && <div className="characters-thumb">{icon}</div>}
                        {name}
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
    </div>
  );
};

export default DraggableTabs;

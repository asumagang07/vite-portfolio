import { ITabsProps } from "../../apps/AppProvider/AppProvider";
import cn from "classnames";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export interface TTabsProps {
  className?: string;
  tab_items?: ITabsProps[];
}

const Tabs: React.FC<TTabsProps> = (props) => {
  const { className, tab_items } = props;
  console.log("tab_items: ", tab_items);
  return (
    <DragDropContext>
      <Droppable droppableId="tabslist">
        {(provided) => (
          <ul
            className={cn("tabslist flex w-full", className)}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tab_items?.map(({ id, name, icon }, index) => {
              return (
                <Draggable key={id} draggableId={id ?? ""} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={cn(
                        "flex py-2 px-4 items-center justify-center gap-2 min-w-[5rem]  border-r border-default-600 text-xs text-grayText"
                      )}
                    >
                      {icon} {name}
                    </li>
                  )}
                </Draggable>
              );
            })}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Tabs;

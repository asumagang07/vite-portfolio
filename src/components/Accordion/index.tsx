import React, { ReactNode } from "react";
import * as RAccordion from "react-accessible-accordion";
import cn from "classnames";
import { BiSolidChevronDown, BiSolidChevronRight } from "react-icons/bi";

export interface TAccordionProps {
  className?: string;
  items?: TAccordionItemProps[];
  allowZeroExpanded?: boolean;
  preExpanded?: string[];
  allowMultipleExpanded?: boolean;
}

export interface TAccordionItemProps {
  id?: string | number;
  className?: string;
  heading?: string;
  itemIcon?: string | JSX.Element;
  onClick?: () => void;
  content?: ReactNode | string;
}

const Accordion: React.FC<TAccordionProps> = (props) => {
  const {
    className,
    items,
    allowZeroExpanded = true,
    preExpanded,
    allowMultipleExpanded = true,
  } = props;

  return (
    <RAccordion.Accordion
      allowZeroExpanded={allowZeroExpanded}
      allowMultipleExpanded={allowMultipleExpanded}
      preExpanded={preExpanded}
      className={cn("flex flex-col w-full", className)}
    >
      {items?.map((item) => (
        <RAccordion.AccordionItem
          uuid={item.id}
          key={item.id}
          className="AccordionItem flex flex-col w-full"
        >
          <RAccordion.AccordionItemState>
            {({ expanded }) => {
              return expanded ? (
                <RAccordion.AccordionItemHeading
                  className={cn(
                    "AccordionItemHeading px-3 flex w-full items-center justify-between hover:bg-default-200  h-6"
                  )}
                >
                  <RAccordion.AccordionItemButton className="w-full h-full flex gap-2 items-center justify-start  ">
                    <BiSolidChevronDown />
                    <div className="flex items-center gap-2">
                      {item?.itemIcon}
                      <p className="text-sm font-medium">{item.heading}</p>
                    </div>
                  </RAccordion.AccordionItemButton>
                </RAccordion.AccordionItemHeading>
              ) : (
                <RAccordion.AccordionItemHeading
                  className={cn(
                    "AccordionItemHeading px-3 flex w-full items-center hover:bg-default-200 h-6"
                  )}
                >
                  <RAccordion.AccordionItemButton className="w-full h-full flex gap-2 items-center justify-start ">
                    <BiSolidChevronRight />
                    <div className="flex items-center gap-2">
                      {item?.itemIcon}
                      <p className="text-sm font-medium">{item.heading}</p>
                    </div>
                  </RAccordion.AccordionItemButton>
                </RAccordion.AccordionItemHeading>
              );
            }}
          </RAccordion.AccordionItemState>
          <RAccordion.AccordionItemPanel onClick={item.onClick}>
            {item.content}
          </RAccordion.AccordionItemPanel>
        </RAccordion.AccordionItem>
      ))}
    </RAccordion.Accordion>
  );
};

export default Accordion;

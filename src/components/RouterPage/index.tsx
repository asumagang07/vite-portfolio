import { ReactNode } from "react";
import styled from "styled-components";

interface TRouterPageProps {
  children?: ReactNode;
}

const RouterPage: React.FC<TRouterPageProps> = (props) => {
  return (
    <StyledDiv className="bg-[#1f1f1f] relative rounterPage w-full h-full overflow-y-auto">
      {props.children}
    </StyledDiv>
  );
};

export default RouterPage;

const StyledDiv = styled.div`
  height: calc(100vh - 96px);
  max-height: calc(100vh - 96px);
  &::-webkit-scrollbar {
    width: 15px;
    background-color: #1e1e1e !important;
    border-left: solid 1px #363636;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #424242;
  }
`;

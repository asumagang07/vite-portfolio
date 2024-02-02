import { useContext } from "react";
import AppComponent from "./apps/AppProvider";
import {
  Accordion,
  ActivityBar,
  Footer,
  Header,
  List,
  MainDiv,
  Navigation,
  ResizableBox,
  RouterPage,
  Sidebar,
} from "./components";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import {
  VscNewFile,
  VscNewFolder,
  VscRefresh,
  VscCollapseAll,
} from "react-icons/vsc";
import { AppContext } from "./apps/AppProvider/AppProvider";

const App = () => {
  const { tabs } = useContext(AppContext);
  console.log("tabs: ", tabs);

  const itemTabs = [
    {
      id: "1",
      heading: "PORTFOLIO",
      content: <List items={tabs} />,
      is_open: true,
      rightActions: [
        {
          id: "1",
          actionbtn: <VscNewFile />,
        },
        {
          id: "2",
          actionbtn: <VscNewFolder />,
        },
        {
          id: "3",
          actionbtn: <VscRefresh />,
        },
        {
          id: "4",
          actionbtn: <VscCollapseAll />,
        },
      ],
    },
    {
      id: "2",
      heading: "OUTLINE",
      icon: <DiJavascript1 size={20} color="#f2eb00" />,
      content: "content 2",
      is_open: false,
    },
    {
      id: "3",
      heading: "TIMELINE",
      icon: <SiTailwindcss size={20} color="#00acb5" />,
      content: "tailwind.config.js",
      is_open: false,
    },
  ];

  return (
    <AppComponent>
      <Header />
      <Navigation />
      <MainDiv>
        <ActivityBar />
        <ResizableBox
          defaultSize={{ width: 300, height: "100%" }}
          maxWidth={300}
          minWidth={0}
          snap={{ x: [100, 0] }}
        >
          <Sidebar>
            <Accordion
              preExpanded={["1"]}
              allowZeroExpanded={true}
              items={itemTabs}
            />
          </Sidebar>
        </ResizableBox>
        <RouterPage></RouterPage>
      </MainDiv>
      <Footer />
    </AppComponent>
  );
};

export default App;

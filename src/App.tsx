import AppComponent from "./apps/AppProvider";
import {
  ActivityBar,
  Footer,
  Header,
  MainDiv,
  Navigation,
  RouterPage,
  Sidebar,
} from "./components";

const App = () => {
  return (
    <AppComponent>
      <Header />
      <Navigation />
      <MainDiv>
        <ActivityBar />
        <Sidebar />
        <RouterPage></RouterPage>
      </MainDiv>
      <Footer />
    </AppComponent>
  );
};

export default App;

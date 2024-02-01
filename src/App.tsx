import AppComponent from "./apps/AppProvider";
import { ActivityBar, Header, MainDiv, Navigation } from "./components";

const App = () => {
  return (
    <AppComponent>
      <Header />
      <Navigation />
      <MainDiv>
        <ActivityBar />
      </MainDiv>
    </AppComponent>
  );
};

export default App;

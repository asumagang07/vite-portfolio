import AppComponent from "./apps/AppProvider";
import { Header, Navigation } from "./components";

const App = () => {
  return (
    <AppComponent>
      <Header />
      <Navigation />
    </AppComponent>
  );
};

export default App;

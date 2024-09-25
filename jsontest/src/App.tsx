import logo from "./logo.svg";
import "./App.css";
import Tabular from "./Tabular";
import HomePg from "./pages/Homepg";
import { ThemeProvider } from "styled-components";
import theme from "./themes";
function App() {
  return (
    <div className="App">
      {/* <Tabular/>  */}
      <ThemeProvider theme={theme}>
        <HomePg />
      </ThemeProvider>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import HomePg from "./pages/Homepg";
import { ThemeProvider } from "styled-components";
import theme from "./themes";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HomePg />
      </ThemeProvider>
    </div>
  );
}

export default App;

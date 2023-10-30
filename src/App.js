import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./router/AppRouter";
import ContextProvider from "./context/Context";

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <AppRouter />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

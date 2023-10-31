import { BrowserRouter } from "react-router-dom";

import AppRouter from "./router/AppRouter";
import ContextProvider from "./context/Context";

function App() {
  return (
    // Wrap the entire application in a BrowserRouter to enable routing.
    <BrowserRouter>
      {/* Provide application-wide context using ContextProvider. */}
      <ContextProvider>
        {/* Include the main routing logic in AppRouter component. */}
        <AppRouter />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

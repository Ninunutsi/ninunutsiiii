import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import { StyleSheetManager } from "styled-components";

function App() {
  return (
    <div>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "isMainPage"}>
        <RouterProvider router={createBrowserRouter(routes)} />
      </StyleSheetManager>
    </div>
  );
}

export default App;

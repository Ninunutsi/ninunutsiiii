import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
        <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;

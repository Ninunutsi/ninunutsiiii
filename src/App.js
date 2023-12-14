import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <div>
      <LanguageProvider>
        <RouterProvider router={createBrowserRouter(routes)} />
      </LanguageProvider>
    </div>
  );
}

export default App;

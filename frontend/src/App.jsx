import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles.css";

import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

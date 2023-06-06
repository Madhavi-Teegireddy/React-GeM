import logo from './logo.svg';
import './App.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Props/Home';
import Restaurant from './AccessDataDirectly/Restaurant';

function App() {
  return (
    <div className="App" >
      <AllRoutes/>
      </div>
  );
}


const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/data",
    element: <Restaurant/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={AllRoutes} />
);

export default App;

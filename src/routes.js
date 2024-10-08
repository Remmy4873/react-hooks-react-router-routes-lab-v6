import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage"; // Import the ErrorPage component

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/directors",
    element: <Directors />,
  },
  {
    path: "/actors",
    element: <Actors />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
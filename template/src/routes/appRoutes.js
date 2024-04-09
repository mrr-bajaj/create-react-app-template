import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
  },
]);

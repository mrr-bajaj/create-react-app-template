import React from "react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/appRoutes";

const App = () => {
  return <RouterProvider router={appRouter}></RouterProvider>;
};

export default App;

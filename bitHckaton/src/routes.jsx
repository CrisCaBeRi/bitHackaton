import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";

import App from "./App";


export const ROUTER = createBrowserRouter([
    { path: "/home", element: <Home /> },    
    { path: "/", element: <App/> },
  ]);
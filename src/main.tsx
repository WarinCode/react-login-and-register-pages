import { StrictMode } from "react";
import { createRoot, Root } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import App from "./App";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

import "./style/globals.css";
import "./style/tailwind.css";
import "@fontsource/prompt";

const rootEl: HTMLDivElement = document.querySelector("#root")!;
const root: Root = createRoot(rootEl);
const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <SignInPage attributes={{}} />,
  },
  {
    path: "/signup",
    element: <SignUpPage attributes={{}} />,
  }
];
const router = createBrowserRouter(routes);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

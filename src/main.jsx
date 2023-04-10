import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";



import Signin from "./pages/auth/signin/Signin";
import Signup from './pages/auth/signup/Signup'

import Inbox from "./pages/account/inbox/Inbox";
import Sent from "./pages/account/sent/Sent";
import Snoozed from "./pages/account/snoozed/Snoozed";
import Starred from "./pages/account/starred/Starred";
import Information from "./pages/information/information";
import Letter from "./pages/account/letter/Letter";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Signin,
  },
  {
    path: "/signup",
    Component:Signup
  },
  {
    path: "/user/inbox",
    Component:Inbox
  },
  {
    path: "/user/sent",
    Component:Sent
  },
  {
    path: "/user/snoozed",
    Component:Snoozed
  },
  {
    path: "/user/starred",
    Component:Starred
  },
  {
    path:'/information',
    Component:Information
  },
  {
    path:'/user/letter',
    Component:Letter
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

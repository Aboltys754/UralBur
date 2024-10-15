import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";

import Header from "../componentes/header/Header"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    }
]);


export default <RouterProvider router={router} />
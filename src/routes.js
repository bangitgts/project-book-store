import React from "react";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage"
import { ProductDetail } from "./page/ProductDetail";
const routes = [{
        path: "/",
        exact: true,
        main: () => < HomePage / > ,
    },
    {
        path: "/product",
        exact: false,
        main: () => < ProductDetail / > ,
    }, {
        path: "/login",
        exact: false,
        main: () => < LoginPage / > ,

    }
];
export { routes };
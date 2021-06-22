import React from "react";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage";
import { ProductDetail } from "./page/ProductDetail";
import { Cart } from "./page/Cart";
const routes = [{
        path: "/",
        exact: true,
        main: () => < HomePage / > ,
    },
    {
        path: "/product/:id",
        exact: false,
        main: ({ match }) => < ProductDetail match = { match }
        />,
    },
    {
        path: "/cart-user",
        exact: false,
        main: ({ match }) => < Cart match = { match }
        />,
    },
    {
        path: "/login",
        exact: false,
        main: () => < LoginPage / > ,
    },
];
export { routes };
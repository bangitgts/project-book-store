import React from "react";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage";
import { ProductDetail } from "./page/ProductDetail";
import { InformationAccount } from "./page/InformationAccount";
import { Cart } from "./page/Cart";
import { ChangePassword } from "./page/ChangePassword/ChangePassword";
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
        path: "/login",
        exact: false,
        main: () => < LoginPage / > ,
    },
    {
        path: "/account",
        exact: false,
        main: () => < InformationAccount / > ,
    },
    {
        path: "/changepassword",
        exact: false,
        main: () => < ChangePassword / > ,
    }
];
export { routes };
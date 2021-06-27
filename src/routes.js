import React from "react";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage";
import { ProductDetail } from "./page/ProductDetail";
import { Carted } from "./page/Carted/Carted";

import { ChangePassword } from "./page/ChangePassword/ChangePassword";
import { RegisterPage } from "./page/RegisterPage";
import { ForgotPassword } from "./page/ForgotPassword";
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
        path: "/carted",
        exact: false,
        main: () => < Carted / > ,
    },
    {
        path: "/register",
        exact: false,
        main: () => < RegisterPage / > ,
    },
    {
        path: "/forgotpassword",
        exact: false,
        main: () => < ForgotPassword / > ,
    }
];
export { routes };
import React from "react";
import { HomePage } from "./page/HomePage";
import { LoginPage } from "./page/LoginPage"

const routes = [{
    path: "/",
    exact: true,
    main: () => < HomePage / > ,
}, {
    path: "/login",
    exact: false,
    main: () => < LoginPage / > ,

}];
export { routes };
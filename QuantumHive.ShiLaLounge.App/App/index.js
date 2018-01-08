import React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/font-awesome/scss/font-awesome.scss";
import "./styles/app.scss";

import "jquery";
import "popper.js";
import "bootstrap";

import moment from "moment";
moment.locale("nl");

import ConfigureStore from "./configurestore";
const store = ConfigureStore();

import Root from "./root"

render(
    <AppContainer>
        <Root store={store} />
    </AppContainer>,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept("./root", () => {
        const NewRoot = require("./root").default;
        render(
            <AppContainer>
                <NewRoot store={store} />
            </AppContainer>,
            document.getElementById("app")
        );
    });
}
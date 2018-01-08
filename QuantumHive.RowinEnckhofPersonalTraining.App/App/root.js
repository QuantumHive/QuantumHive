import React from "react";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import App from "./app";

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <BrowserRouter basename="/" >
                    <App />
                </BrowserRouter>
            </Provider>
        );
    }
}
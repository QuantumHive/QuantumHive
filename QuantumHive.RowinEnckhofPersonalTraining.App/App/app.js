import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./navigation";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
            </div>
        );
    }
}
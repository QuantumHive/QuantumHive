import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import RootReducer from "./reducers";

export default () => {
    const store = createStore(RootReducer, applyMiddleware(
        ThunkMiddleware
    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept("./reducers", () => {
            const nextRootReducer = require("./reducers").default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
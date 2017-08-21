import * as React from "react";
import * as ReactDOM from "react-dom";
import configureStore from "./scripts/store/configureStore";
import { Provider } from "react-redux";
import App from "./scripts/components/App";
import registerServiceWorker from "./scripts/registerServiceWorker";
import "./css/index.css";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root") as HTMLElement
);
registerServiceWorker();

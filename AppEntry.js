import registerRootComponent from "expo/build/launch/registerRootComponent";

import App from "./src/App";
import React from "react";
import { Provider } from "react-redux";
import storeConfig from "./src/store/storeConfig";
import axios from "axios";

axios.defaults.baseURL = "https://lambe-cf1f4-default-rtdb.firebaseio.com/";

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

registerRootComponent(Redux);

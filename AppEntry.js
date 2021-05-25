import registerRootComponent from "expo/build/launch/registerRootComponent";

import Navigator from "./src/Navigator";
import React from "react";
import { Provider } from "react-redux";
import storeConfig from "./src/store/storeConfig";
import axios from 'axios'

axios.defaults.baseURL = 'https://lambe-cf1f4-default-rtdb.firebaseio.com/'

const store = storeConfig();
const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
);

registerRootComponent(Redux);

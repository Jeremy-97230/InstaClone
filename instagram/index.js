/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/* redux */
import { Provider } from 'react-redux'
import store from './Redux/store'

const reactRender = () => {

    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => reactRender);

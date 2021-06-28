/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {configStore} from './redux/store';
const store=configStore();

const ReduxContainer=()=>{
    return (
        <Provider store={store}>
            <App/>
        </Provider>
        
        

    )

}



AppRegistry.registerComponent(appName, () =>ReduxContainer);

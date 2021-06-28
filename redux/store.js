// import React from 'react';
import {createStore,combineReducers} from 'redux';
import stateReducer from './reducer';

const rootReducer = combineReducers({
    reduce:stateReducer
})

export const configStore=()=>createStore(rootReducer);

// export default configStore;

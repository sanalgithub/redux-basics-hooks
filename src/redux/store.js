import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import { thunk } from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(logger,thunk))

export default store;

//middleware logs information related to redux store
//redux thunk helps us to allow asyncronous action creators in our application 

import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/albums';
import Axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = Axios.create({
  baseURL: 'https://ws.audioscrobbler.com/2.0',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default store;

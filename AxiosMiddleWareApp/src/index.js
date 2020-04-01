import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Header from './components/Header';
import AlbumsList from './components/AlbumsList';

const App = () => (
  <Provider store={store}>
      <Header />
      <AlbumsList />
  </Provider>
);

export default App;

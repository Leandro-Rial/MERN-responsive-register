import React from 'react';
import {DataProvider} from './GlobalState';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header/Header';
import Pages from './components/MainPages/Pages';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <Pages />
      </Router>
    </DataProvider>
  );
}

export default App;

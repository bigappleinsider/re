import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';

import 'bootstrap/dist/css/bootstrap.css';

import './App.css';

const App = () => (
    <main>
      <Route exact path="/" component={Home} />
    </main>
);

export default App;
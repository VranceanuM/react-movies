import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from './context'

import Navbar from './components/Navbar'
import Home from './layout/Home'

function App() {
  return (
    <Provider>
      <Router>
          <div className="App">
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
            </Switch>
          </div>
      </Router>
    </Provider>
  );
}

export default App;

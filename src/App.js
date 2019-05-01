import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";

import Navbar from "./components/Navbar";
import Home from "./layout/Home";
import Movie from "./layout/Movie";
import Serial from "./layout/Serial";
import NowPlaying from "./layout/NowPlaying";
import TopRated from "./layout/TopRated";

function App() {
  return (
    <Provider>
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movie/:id' component={Movie} />

            <Route exact path='/serial/:id' component={Serial} />
            <Route exact path='/now-play/' component={NowPlaying} />
            <Route exact path='/top-rated/' component={TopRated} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

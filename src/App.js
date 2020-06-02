import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import * as productActions from './actions/projectActions';

import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import ReveraLab from './myLabs/reveraLab/Revera.jsx';
import Instagram from './myLabs/instagram/Instagram.jsx';
import Spotify from './myLabs/spotify/Spotify.jsx';
import IronCart from './myLabs/ironCart/IronCart.jsx';
// import * as actions from './actions/actions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        {' ... '}
        <Link to="/projects">Projects</Link>
        {' ... '}
        <Link to="/labs/revera">Revera</Link>
        {' ... '}
        <Link to="/labs/instagram">Instagram</Link>
        {' ... '}
        <Link to="/labs/spotify">Spotify</Link>
        {' ... '}
        <Link to="/labs/ironcart">IronCart</Link>
        {' ... '}
        <a id="btnGoBack" href="https://alforsii.github.io/redoLabs/">
          Labs_inOriginal_HTML
        </a>

        <Switch>
          <Route
            exact
            path="/projects"
            render={(props) => <Projects {...props} />}
          />
          <Route
            exact
            path="/labs/revera"
            render={(props) => <ReveraLab {...props} />}
          />
          <Route
            exact
            path="/labs/instagram"
            render={(props) => <Instagram {...props} />}
          />
          <Route
            exact
            path="/labs/spotify"
            render={(props) => <Spotify {...props} />}
          />
          <Route
            exact
            path="/labs/ironcart"
            render={(props) => <IronCart {...props} />}
          />
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/labs/" render={(props) => props.history.goBack()} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // getProjects: () => dispatch(productActions.getProjects),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

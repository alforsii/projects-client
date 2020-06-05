import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoggedIn } from './auth/actions/authActions';

import Home from './components/home/Home';
import AuthPop from './components/auth/AuthPop.js';

import Projects from './components/projects/Projects';
import ReveraLab from './components/myLabs/reveraLab/Revera.jsx';
import Instagram from './components/myLabs/instagram/Instagram.jsx';
import Spotify from './components/myLabs/spotify/Spotify.jsx';
import IronCart from './components/myLabs/ironCart/IronCart.jsx';
// import * as actions from './actions/actions';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.isLoggedIn();
  }
  render() {
    return (
      <div className="App">
        <Link to="/">Home</Link>
        {' ... '}
        <Link to="/dashboard">Dashboard</Link>
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

        <AuthPop />

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
          <Route
            exact
            path="/dashboard"
            render={(props) => <Home {...props} user={this.props.user} />}
          />
          <Route path="/labs/" render={(props) => props.history.goBack()} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoggedIn: () => dispatch(isLoggedIn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

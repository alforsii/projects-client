import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { logout } from '../../auth/actions/authActions';
import Posts from '../myTodoList/Posts';

import Button from '@material-ui/core/Button';

export const Home = (props) => {
  return (
    <div>
      <h2> {props.user?.firstName} </h2>
      <Button onClick={() => props.logout()}>Logout</Button>
      <p style={{ color: 'green' }}> {props.message} </p>
      <Posts />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.authReducer.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

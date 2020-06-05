import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../auth/actions/authActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const LoginForm = (props) => {
  const { handleClose, toggleForm, login } = props;
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
    errMessage: null,
  });
  const { email, password, errMessage } = userForm;
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Output for: handleSubmit -> userForm', userForm);
    const response = await login(userForm);
    console.log('Output for: handleSubmit -> response', response);
    if (response?.data?.user) {
      setUserForm({
        email: '',
        password: '',
        errMessage: '',
      });
      handleClose();
      props.history.push('/dashboard');
    } else {
      setUserForm({
        ...userForm,
        errMessage: response,
      });
    }
  };

  return (
    <>
      <form form="true" onSubmit={handleSubmit}>
        <DialogTitle id="login-form">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>{errMessage}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={handleChange}
            value={email}
            name="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            onChange={handleChange}
            value={password}
            name="password"
            label="Password"
            type="password"
            fullWidth
          />
          <DialogContentText>
            Are you not a member? <i className="fas fa-arrow-circle-right"></i>{' '}
            <Button onClick={() => toggleForm('Signup')} color="primary">
              Signup
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Login
          </Button>
        </DialogActions>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (newUser) => dispatch(login(newUser)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../auth/actions/authActions';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export const LoginForm = (props) => {
  const { handleClose, toggleForm, signup } = props;
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errMessage: null,
  });
  const { firstName, lastName, email, password, errMessage } = userForm;
  const handleChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signup(userForm);
    console.log('Output for: handleSubmit -> response', response);
    if (response?.data?.user) {
      setUserForm({
        firstName: '',
        lastName: '',
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
        <DialogTitle id="login-form">Signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {errMessage}
            {/* All fields are mandatory for Signup*. */}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={handleChange}
            value={firstName}
            name="firstName"
            label="First name"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            onChange={handleChange}
            value={lastName}
            name="lastName"
            label="Last name"
            type="text"
            fullWidth
          />
          <TextField
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
            Already a member? <i className="fas fa-arrow-circle-right"></i>{' '}
            <Button onClick={() => toggleForm('Login')} color="primary">
              Login
            </Button>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Signup
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
    signup: (newUser) => dispatch(signup(newUser)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));

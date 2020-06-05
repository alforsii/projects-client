import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState('Login');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleForm = (text) => {
    setForm(text);
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {form === 'Login' ? (
          <LoginForm handleClose={handleClose} toggleForm={toggleForm} />
        ) : (
          <SignupForm handleClose={handleClose} toggleForm={toggleForm} />
        )}
      </Dialog>
    </div>
  );
}

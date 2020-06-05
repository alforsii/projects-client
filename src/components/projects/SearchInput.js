/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox({ projects }) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={projects}
      getOptionLabel={(project) => project.name}
      //   style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search for project" variant="outlined" />
      )}
    />
  );
}

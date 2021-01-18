import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(50),
    marginRight: theme.spacing(50),
    width: '25ch',
    marginTop: theme.spacing(1)
  },
}));

export default function UsernameField() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        
        <TextField
          label="Username"
          id="margin-dense"
          className={classes.textField}
          helperText="Enter your Username"
          margin=""
        />
        <TextField
          label="Password"
          id="margin-dense"
          className={classes.textField}
          helperText="Enter your Password"
          margin=""
        />
      </div>
      
    </div>
  );
}
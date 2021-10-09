import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  signupDiv: {
    padding: '10px',
    margin: '10px',
    textAlign: 'center'

  },
  loginLink: {
    marginLeft: '30%',
    textDecoration: 'none',
    color: 'black',
    fontSize: '100%'
  },
  submitBtn: {
    textAlign: 'center'
  }
  
  

}));

function Signup(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link className={classes.loginLink} to="/login">← Login</Link>

      <h2 style={{textAlign: 'center'}}>Signup</h2>
      <br />
      <form onSubmit={handleFormSubmit}>
        <Grid className={classes.signupDiv}>
          <TextField  
          htmlFor="firstName"
          label = 'First Name'
          autoFocus
          name="firstName"
          type="firstName"
          id="firstName"
          onChange={handleChange}>
            </TextField>
        </Grid>
        <Grid className={classes.signupDiv}>
          <TextField 
          htmlFor="lastName"
          label = 'Last Name'
          autoFocus
          name="lastName"
          type="lastName"
          id="lastName"
          onChange={handleChange}>
            </TextField>
        </Grid>
        <Grid className={classes.signupDiv}>
          <TextField 
          htmlFor="email"
            label = "Email"
            autoFocus
            name="email"
            type="email"
            id="email"
            onChange={handleChange}>
            </TextField>
        </Grid>
        <Grid className={classes.signupDiv}>
          <TextField 
          htmlFor="pwd"
          label = "Password"
          autoFocus
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}>
          </TextField>
        </Grid>
        <br />
        <Grid className= {classes.submitBtn}>
          <Button type="submit" variant='contained' style={{backgroundColor:'#6C4740', color:'white'}}>Submit</Button>
        </Grid>
        <br />
      </form>
    </div>
  );
}

export default Signup;

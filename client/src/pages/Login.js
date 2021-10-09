import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { TextField, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  signupLink: {
    marginLeft: '30%',
    textDecoration: 'none',
    color: 'black',
    fontSize: '100%'
  },
  loginDiv: {
    padding: '10px',
    margin: '10px',
    textAlign: 'center'
  },
  submitBtn: {
    textAlign: 'center'
  }


}));

function Login(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <Link className={classes.signupLink} to="/signup">← Signup</Link>

      <h2 style={{textAlign: 'center'}}>Login</h2>
      <br />
      <form onSubmit={handleFormSubmit}>
        <Grid className={classes.loginDiv}>
          <TextField
            label = 'Your Email'
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </Grid>
        <Grid className={classes.loginDiv}>
          <TextField
           label = 'Password'
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </Grid>
        {error ? (
          <Grid>
            <p className="error-text">The provided credentials are incorrect</p>
          </Grid>
        ) : null}
        <br />
        <Grid className= {classes.submitBtn}>
          <Button type="submit" variant='contained' style={{backgroundColor:'#6C4740', color:'white'}}>Submit</Button>
        </Grid>
        <br />
      </form>
    </div>
  );
}

export default Login;

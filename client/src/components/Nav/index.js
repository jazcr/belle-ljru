//Importing React and all necessary dependecies and other components
import React, { useState } from 'react';
import '../../index.css';
import Auth from "../../utils/auth";
import avatar from "../../assets/avatar.png";
import Footer from '../Footer';
import { faSpa, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import RightMenuSlider from '@material-ui/core/Drawer';

import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from '@material-ui/core';

import {
  AssignmentInd,
  History,
  Home
} from '@material-ui/icons';

//CSS Styles  

const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: '#96BD8A',
    height: '100%',
  },
  avatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  listItem: {
    color: 'white'
  }
}));

//Slider menu items navbar
//Logged in 
const loggedMenuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: '/'
  },
  {
    listIcon: <History />,
    listText: "Order History",
    listPath: '/orderHistory'
  },
  {
    listIcon: <FontAwesomeIcon icon={faSignOutAlt} color='white' />,
    listText: "Logout",
    listPath: '/'

  },
  {
    listIcon: <FontAwesomeIcon icon={faSignOutAlt} color='white' />,
    listText: "MAIN QUIZ",
    listPath: '/mainQuiz'

  }
]

//Menu items NOT logged in
const notLoggedMenuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: '/'
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Sign Up",
    listPath: '/signup'
  },
  {
    listIcon: <FontAwesomeIcon icon={faSignInAlt} color='white' />,
    listText: "Login",
    listPath: '/login'
  },
  {
    listIcon: <FontAwesomeIcon icon={faSignOutAlt} color='white' />,
    listText: "MAIN QUIZ",
    listPath: '/mainQuiz'

  }
]


export const Nav = () => {
  //deconstructing useState to get state and state setter. Setting it to right false so the navbar doesnt populate upon loading page.
  const [state, setState] = useState({
    right: false
  });

  //setting state for slider navbar to open
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open })
  };

  //storing use state in a variable 
  const classes = useStyles();

  //using conditional statements to get correct navbar items
  const showNavigation = function (slider) {
    if (Auth.loggedIn()) {
      return (
        <Box
          className={classes.menuSliderContainer}
          component='div'
          onClick={toggleSlider(slider, false)}>
          <Avatar className={classes.avatar} src={avatar} alt='SPA' />
          <Divider />

          <List>
            {loggedMenuItems.map((lsItem, key) => (

              <ListItem button key={key} component={Link} to={lsItem.listPath} onClick={lsItem.listText === 'Logout' ? Auth.logout : ''}>
                <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText} />
              </ListItem>

            ))}
          </List>
        </Box>
      );
    } else {
      return (
        <Box
          className={classes.menuSliderContainer}
          component='div'
          onClick={toggleSlider(slider, false)}>
          <Avatar className={classes.avatar} src={avatar} alt='SPA' />
          <Divider />
          <List>
            {notLoggedMenuItems.map((lsItem, key) => (
              <ListItem button key={key} component={Link} to={lsItem.listPath}>
                <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={lsItem.listText} />
              </ListItem>

            ))}
          </List>
        </Box>
      );
    }
  }

  return (
    <>
      <Box component='nav'>
        <AppBar position='static' style={{ background: '#6C4740' }}>
          <Toolbar>
            <IconButton onClick={toggleSlider('right', true)}>
              <FontAwesomeIcon icon={faSpa} color='#F0DAA3' />
            </IconButton>
            <Typography variant='h5' style={{ fontFamily: "'Ephesis', cursive", color:'#F0DAA3' }}>
              Belle L'JaRu Skincare
            </Typography>
            <RightMenuSlider
              anchor="left"
              open={state.right}
              onClose={toggleSlider('right', false)}>
              {showNavigation('right')}
              <Footer />
            </RightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Nav;

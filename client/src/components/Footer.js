import React from 'react'
//import '../index.css';
import { BottomNavigation, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ContactMail } from '@material-ui/icons';

const Footer = () => {

    return (

        <BottomNavigation width="auto" style={{ background: '#96BD8A' }}>
                <IconButton href="https://github.com/jazcr/belle-ljru" target="_blank">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="mailto:email@gmail.com">
                    <ContactMail />
                </IconButton>
        </BottomNavigation>
    )
}

export default Footer

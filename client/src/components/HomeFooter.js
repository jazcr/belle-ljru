import React from 'react'
import { BottomNavigation, IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ContactMail } from '@material-ui/icons';

const HomeFooter = () => {

    return (

        <BottomNavigation width="auto" style={{ background: '#f8f3e5' }}>
                <IconButton href="https://github.com/jazcr/belle-ljru" target="_blank">
                    <GitHubIcon />
                </IconButton>
                <IconButton href="mailto:email@gmail.com">
                    <ContactMail />
                </IconButton>
        </BottomNavigation>
    )
}

export default HomeFooter;

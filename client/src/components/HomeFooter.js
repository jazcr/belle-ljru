import React from 'react'
import { BottomNavigation, IconButton, Typography, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ContactMail } from '@material-ui/icons';

const HomeFooter = () => {

    return (
            <BottomNavigation width="auto" style={{ background: '#f8f3e5'}} className='homeFooter'>
            <Box component='div' style={{  display: 'flex'}}>
                <Typography variant='body1' style={{ marginTop:'3%'}} > © Belle L'JaRu Skincare Store ||</Typography>
                <IconButton href="https://github.com/jazcr/belle-ljru" target="_blank">
                    <GitHubIcon style={{ marginBottom:'45%'}}  />
                </IconButton>
                <Typography variant='body1' style={{ marginTop:'3%'}} className='hideFooter'>|| Got questions?</Typography>
                <IconButton href="mailto:email@gmail.com">
                    <ContactMail style={{ marginBottom:'45%'}} className='hideFooter' />
                </IconButton>
                </Box>
            </BottomNavigation>
    )
}

export default HomeFooter;

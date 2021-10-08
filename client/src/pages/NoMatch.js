import React from "react";
import '../index.css';

import {
  Typography,
  Box,
} from '@material-ui/core';

const NoMatch = () => {
  return (
    <Box component='div'>
        <Typography className='error' variant='h3' style={{ height: 500, fontFamily: "'Ephesis', cursive" , clear: 'both', textAlign: 'center', paddingTop:'12.75rem', paddingLeft: '25rem',}}>Oh uh...404 Page Not Found</Typography>
    </Box>
  );
};

export default NoMatch;

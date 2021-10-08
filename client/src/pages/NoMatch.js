import React from "react";
import '../index.css';

import {
  Typography,
  Box,
} from '@material-ui/core';

const NoMatch = () => {
  return (
    <Box component='div'>
        <Typography className='error' variant='h3' style={{ fontFamily: "'Ephesis', cursive" , textAlign: 'center', paddingTop:'15rem', paddingLeft: '25rem'}}>Oh uh...404 Page Not Found</Typography>
    </Box>
  );
};

export default NoMatch;

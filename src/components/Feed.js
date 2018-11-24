import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Feed = () => 
    <div>
        <AppBar position="static" color="#fffff">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    Feed
                </Typography>            
            </Toolbar>
        </AppBar>
        <Typography variant="h6">Some content</Typography>
    </div>
    ;

export default Feed;

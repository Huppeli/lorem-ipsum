import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FakeData from '../Data/FakeData';
import InfoGraph from './InfoGraph/InfoGraph';


const Index = () => 
    <div>
        <AppBar position="static" color="#122559">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{color: "#FF6704"}}>
                    Feed
                </Typography>            
            </Toolbar>
        </AppBar>
        <Typography style={{marginLeft: '25px'}} variant="h4">Highlights</Typography>
        <InfoGraph title="Your consumption of domestic products is 28%" difference="+5 % average" />
        <InfoGraph title="Your estimated carbon footprint based on your consumption is 28%" difference="-25 % below average" />
    </div>
    ;

export default Index;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FakeData from '../Data/FakeData';
import InfoGraph from './InfoGraph/InfoGraph';
import TopBar from './TopBar';


const Index = () => 
    <div>
        <TopBar />
        <Typography style={{marginLeft: '25px'}} variant="h4">Highlights</Typography>
        <InfoGraph title="Your consumption of domestic products is 28%" difference="+5 % average" />
        <InfoGraph title="Your estimated carbon footprint based on your consumption is 28%" difference="-25 % below average" />
    </div>
    ;

export default Index;
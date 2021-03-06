import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FakeData from '../../Data/FakeData';
import InfoGraph from '../InfoGraph/InfoGraph';
import BottomBar from '../BottomBar/BottomBar';


const Index = () => 
    <div>
        <AppBar position="static" backgroundColor="#213775">
            <Toolbar>
                <Typography variant="h6" style={{color:"#ffffff", marginLeft: "10%", fontWeight: "bold"}} >
                Welcome to your highlights!
                </Typography>
            </Toolbar>
        </AppBar>
        <Typography variant="h4" style={{color:"#000000", marginLeft: "20%", fontWeight: "bold"}}>Highlights</Typography>
        <InfoGraph title="Your consumption of domestic products is 28%" difference="-5 % below national average" />
        <InfoGraph title="Your estimated carbon footprint based on your consumption is 28%" difference="-25 % below neational average" />
        <BottomBar/>
    </div>
    ;

export default Index;
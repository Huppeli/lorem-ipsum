import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FakeData from '../Data/FakeData';
import ChallengeCard from './ChallengeCard/ChallengeCard';


const Feed = () => 
    <div>
        <AppBar position="static" color="#122559">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{color: "#FF6704"}}>
                    Challenges
                </Typography>            
            </Toolbar>
        </AppBar>
        <Typography style={{marginLeft: '25px'}} variant="h4">Ongoing Challenges</Typography>
        {console.log(FakeData)}
        {FakeData.map( (challenge) =>
            <ChallengeCard title={challenge.title} />
        )}


    </div>
    ;

export default Feed;

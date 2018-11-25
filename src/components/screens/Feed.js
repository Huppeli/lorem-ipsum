import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FakeData from '../../Data/FakeData';
import FakeSeasonalData from '../../Data/FakeSeasonalData';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import BottomBar from '../BottomBar/BottomBar';


const Feed = () => 
    <div>
        <AppBar position="static" backgroundColor="#213775">
            <Toolbar>
                <Typography variant="h6" style={{color:"#ffffff", marginLeft: "10%", fontWeight: "bold"}} >
                Welcome to your dashboard!
                </Typography>
            </Toolbar>
        </AppBar>
        <Typography variant="h6" style={{color:"#000000", marginLeft: "20%", fontWeight: "bold"}}>Ongoing Challenges</Typography>
        {console.log(FakeData)}
        {FakeData.map( (challenge) =>
            <ChallengeCard title={challenge.title} progress={challenge.progress}></ChallengeCard>
        )}
        <Typography variant="h6" style={{color:"#000000", marginLeft: "20%", fontWeight: "bold"}}>Seasonal Challenges</Typography>
        {console.log(FakeSeasonalData)}
        {FakeSeasonalData.map( (challenge) =>
            <ChallengeCard title={challenge.title} joined={challenge.joined} progress={challenge.progress}></ChallengeCard>
        )}
            <BottomBar/>
    </div>
    ;

export default Feed;

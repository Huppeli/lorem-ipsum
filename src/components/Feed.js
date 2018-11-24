import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FakeData from '../Data/FakeData';
import FakeSeasonalData from '../Data/FakeSeasonalData';
import ChallengeCard from './ChallengeCard/ChallengeCard';
import TopBar from './TopBar';


const Feed = () => 
    <div>
       <TopBar/>
        <Typography variant="h6">Ongoing Challenges</Typography>
        {console.log(FakeData)}
        {FakeData.map( (challenge) =>
            <ChallengeCard title={challenge.title}></ChallengeCard>
        )}
        <Typography variant="h6">Seasonal Challenges</Typography>
        {console.log(FakeSeasonalData)}
        {FakeSeasonalData.map( (challenge) =>
            <ChallengeCard title={challenge.title} joined={challenge.joined}></ChallengeCard>
        )}

    </div>
    ;

export default Feed;

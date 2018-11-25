import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';


import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FakeData from '../../Data/FakeData';
import FakeSeasonalData from '../../Data/FakeSeasonalData';

import BottomBar from '../BottomBar/BottomBar';


import { Button } from '@material-ui/core';
import logo from '../../resources/images/Kesko-logo.png';
import LinearProgress from '@material-ui/core/LinearProgress';
import ConfirmationDialog from '../Dialog/ConfirmationDialog';

const Profile = () => 
    <div>
         <AppBar position="static" backgroundColor="#213775">
            <Toolbar>
                <Typography variant="h6" style={{color:"#ffffff", marginLeft: "10%", fontWeight: "bold"}} >
                Welcome to your profile!
                </Typography>
            </Toolbar>
        </AppBar>
        <Card style={{margin:'15px'}}>
            <CardHeader
            avatar={
                <Avatar>
                    J
                </Avatar>
            }
            action={
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            }
            title={'Your Plussa points: 500'}
            />
            <CardContent>
                Your monthly basket consists of:
                <div>
                    Meat
                    <LinearProgress variant="determinate" color="secondary" value="60" />
                </div>
                <div>
                    Veggies
                    <LinearProgress variant="determinate" color="secondary" value="70" />
                </div>
                <div>
                    Dairy
                    <LinearProgress variant="determinate" color="secondary" value="50" />
                </div>
                <div>
                    Fruit
                    <LinearProgress variant="determinate" color="secondary" value="25" />
                </div>
            </CardContent>
        </Card>
        <Card style={{margin:'15px'}}>
            <CardHeader
            avatar={
                <Avatar>
                    R
                </Avatar>    
            }
            action={
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            }
            title={'Favourite recipes'}
            />
        </Card>
        <Card style={{margin:'15px'}}>
            <CardHeader
            avatar={
                <Avatar>
                    R
                </Avatar>    
            }
            action={
                <IconButton>
                <MoreVertIcon />
                </IconButton>
            }
            title={'My own goals'}
            />
        </Card>
        
        
        
            <BottomBar/>
    </div>
    ;

export default Profile;

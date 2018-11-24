import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import { Button } from '@material-ui/core';
import logo from '../../resources/images/Kesko-logo.png';
import LinearProgress from '@material-ui/core/LinearProgress';



class ChallengeCard extends React.Component {
    render() {

        let button;
        let completeButton;
        if(this.props.joined) {
            button = <Button variant="outlined">Join!</Button>
        }
        if(this.props.progress == 100) {
            completeButton =  <Button variant="outlined">Finish challenge</Button>
        }
        
        return(
          <Card style={{margin:'15px'}}>
                <CardHeader
                avatar={
                    <Avatar
                    src={logo}
                    alt="fuq"
                    />
                }
                action={
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                }
                title={this.props.title}
                />
                <CardContent>
                <LinearProgress variant="determinate" value={this.props.progress} />
                    {completeButton}
                    {button}
                </CardContent>
                
            </Card>
        );
    }
    
}

export default ChallengeCard;
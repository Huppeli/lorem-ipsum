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
import ConfirmationDialog from '../Dialog/ConfirmationDialog';



class ChallengeCard extends React.Component {
    state = {
        open: false,
      };
    
      handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    

    render() {

        let button;
        let completeButton;
        if(this.props.joined) {
            button = <Button variant="outlined" style={{borderRadius: 20, backgroundColor:'#eeeeee', marginTop: 10}}>Join!</Button>
        }
        if(this.props.progress == 100) {
            completeButton =  <Button variant="outlined" style={{ borderRadius: 20, backgroundColor:'#eeeeee',marginTop: 10}} onClick={this.handleClickOpen}>Finish challenge</Button>
        }
        
        return(
          <Card style={{margin:'15px', backgroundColor: '#EC7B04'}}>
                <CardHeader style={{color: '#213775'}}
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
                <CardContent root={{color: '#213775'}}>
                <LinearProgress style={{bar: {backgroundColor: '#213775'}}} variant="determinate" value={this.props.progress} />
                    {completeButton}
                    <ConfirmationDialog open={this.state.open} handleClose={this.handleClose} />
                    {button}
                </CardContent>
                
            </Card>
        );
    }
    
}

export default ChallengeCard;
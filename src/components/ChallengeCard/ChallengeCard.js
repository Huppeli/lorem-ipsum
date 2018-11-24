import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'; 


class ChallengeCard extends React.Component {
    render() {
        return(
          <Card style={{margin:'15px'}}>
                <CardHeader
                action={
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                }
                title={this.props.title}
                />
                <CardMedia
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
                />
             
                <Collapse  timeout="auto" unmountOnExit>
                <CardContent>
                  
                </CardContent>
                </Collapse>
            </Card>
        );
    }
    
}

export default ChallengeCard;
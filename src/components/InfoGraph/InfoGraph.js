import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ChallengeCard extends React.Component {
    render() {
        return(
            <div>
                <Paper elevation={5} style={{margin:'15px'}}>
                    <Typography style={{color:"#000000", marginLeft: '8px'}}variant="subtitle1" >
                        {this.props.title}
                    </Typography>
                    <Typography  style={{color:"#000000", marginLeft: '8px'}} variant="subtitle2">
                        {this.props.difference}
                    </Typography>
                </Paper>
            </div>
        );
    }
    
}

export default ChallengeCard;
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class ChallengeCard extends React.Component {
    render() {
        return(
            <div>
                <Paper elevation={5} style={{margin:'15px'}}>
                    <Typography variant="subtitle1" >
                        {this.props.title}
                    </Typography>
                    <Typography variant="subtitle2">
                        {this.props.difference}
                    </Typography>
                </Paper>
            </div>
        );
    }
    
}

export default ChallengeCard;
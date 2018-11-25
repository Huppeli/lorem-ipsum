import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FaceIcon from '@material-ui/icons/Face';
import ListIcon from '@material-ui/icons/List';
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'react-router-dom';

class BottomBar extends React.Component {
    render() {
        return(
            <BottomNavigation style={{ 
                position: 'fixed',
                bottom: 0,
                width: '100%',
                background: '#eeeeee'}} >
                <Link style={{width:'33%'}} to="/profile">
                    <BottomNavigationAction label="Profile" icon={<FaceIcon />} />
                </Link>
                <Link style={{width: '33%'}} to="/feed">
                    <BottomNavigationAction label="Favorites" icon={<ListIcon />} />
                </Link>
                <Link to="/index">
                    <BottomNavigationAction label="Nearby" icon={<StarIcon />} />
                </Link>
            </BottomNavigation>
        );
    }
  
}

export default BottomBar;
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom';

class BottomBar extends React.Component {
    render() {
        return(
            <BottomNavigation style={{ 
                position: 'fixed',
                bottom: 0,
                width: '100%',
                background: '#eeeeee'}} >
                <Link to="/feed">
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                </Link>
                <Link to="/feed">
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                </Link>
                <Link to="/index">
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </Link>
            </BottomNavigation>
        );
    }
  
}

export default BottomBar;
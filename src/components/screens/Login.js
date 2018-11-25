import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/images/Kesko-logo.png';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';


const Login = () => 
    <Grid container
    direction="column"
    justify="flex-start"
    alignItems="center"
    style={{background: '#213775', height: '100vh'}} >
        <form autoComplete="off">
            <Grid  item xs={12}>
                <img src={logo} alt="fuq"/>
            </Grid>
            <Grid  item xs={12}>
                <Typography component="h5" variant="h5">Login</Typography>
            </Grid>
            <Grid item xs={12} borderRadius="10">
                <TextField margin="normal" id="name" label="Name" disabled  variant="outlined" />
            </Grid>
            <Grid  item xs={12}>
                <TextField secondary id="password" label="password" type="password"  variant="outlined" />
            </Grid>
            <Grid  item xs={12} style={{borderRadius: 20}}> 
                <Link to="/Index">
                    <Button style={{background: '#AEB5C8', borderRadius: 20}} >Log in</Button>
                </Link>
            </Grid>
        </form>
    </Grid>;

export default Login;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import logo from '../../resources/images/Kesko-logo.png';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

const styles = {
    custom: {
        borderColor: '#eeeeee'
    }
}

const Login = () => 
    <Grid container
    direction="column"
    justify="flex-start"
    alignItems="center"
    style={{background: '#213775', height: '100vh'}} >
        <form autoComplete="off">
            <Grid  item xs={12}>
                <img src={logo} alt="fuq" style={{marginTop: '60px',
    marginBottom: '30px',
    marginLeft: '20px',
    height: '20vh'}}/>
            </Grid>
            <Grid  item xs={12}>
                <Typography style={{color: '#eeeeee'}} component="h5" variant="h5">Login</Typography>
            </Grid>
            <Grid item xs={12}>
            <FormControl disabled style={{ 
                marginTop: '10px',
                marginBottom: '15px'}}>
                <InputLabel style={{color: '#eeeeee'}} htmlFor="component-simple">Name</InputLabel>
                <Input style={{color: '#eeeeee'}} id="component-simple" value={"john.doe@gmail.com"}/>
            </FormControl>
            </Grid>
            <Grid  item xs={12}>
            <FormControl disabled>
                <InputLabel style={{color: '#eeeeee'}} htmlFor="component-simple">Password</InputLabel>
                <Input style={{color: '#eeeeee'}} type="password" id="component-simple" value={"1234567"}/>
            </FormControl>
            </Grid>
            <Grid  item xs={12}> 
                <Link to="/Index">
                    <Button style={{background: '#AEB5C8'}} >Log in</Button>
                </Link>
            </Grid>
        </form>
    </Grid>;

export default Login;
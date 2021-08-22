import React ,{ useState } from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { CssBaseline, IconButton } from '@material-ui/core';
// import { classes } from 'istanbul-lib-coverage';
import LoginForm from "./components/loginForm/loginForm"
import Grid from "@material-ui/core/Grid"

function App() {
  const [loginStatus,setLoginStatus] = useState(false)
  const useStyles = makeStyles((theme) => ({
    button:{
      position : 'relative',
      width:'150px',
    },
  }))

  const classes = useStyles();
    return(
      <div>
        <AppBar  position = "static">
          <Toolbar>
            <Grid container 
              alignItems = 'center'>
              <Grid item>
                <IconButton variant = 'h5'>Demo App</IconButton>
              </Grid>
              <Grid item sm></Grid>
              <Grid item>
                <IconButton>
                  <Button
                    className = {classes.button}
                    onClick = {() => setLoginStatus(!loginStatus)}
                    variant = "contained"
                    color = "secondary"
                  >
                    {(loginStatus) ?"logout":"login/sign up"}
                  </Button>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {(loginStatus) ? "You are logged in!!":<LoginForm />}
        <CssBaseline />

      </div>
    )
}

export default App;
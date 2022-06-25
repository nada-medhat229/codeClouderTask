import { AppBar,Button,Typography ,Toolbar} from '@mui/material'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import logo from "../assets/image 6.png";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
const Navbar = () => {
  const classes = useStyles();
    return (<>
       <AppBar position="static" style={{backgroundColor:"#1C2346"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img src={logo} alt="logo" />
          </Typography>
        <Button style={{backgroundColor:"#EDEDF0",color:"#60637D",textTransform: "inherit"}}>save and close</Button>
        </Toolbar>
        </AppBar>
    </>);
}

export default Navbar;

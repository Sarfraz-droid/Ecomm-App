import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
const useStyles = makeStyles((theme) => ({
  Appbar: {
    ...theme.mixins.toolbar,
    marginBottom: "0em",
    [theme.breakpoints.down("mb")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.25em",
    },
  },
  Tab: {
    width: 10,
    fontSize: "1rem",
    padding: "10px",
    color: theme.palette.common.black,
    margin: 10,
    minWidth: 150,
    fontFamily: "Raleway",
  },
  Heading: {
    ...theme.typography.logo,
    margin: "auto",
    marginRight: 500,
    fontWeight: 200,
    fontStyle: "italic",
    textDecoration: "none"
  },
  ShoppingCart: {
    width: 40,
    height: 40,
    marginRight: 5,
    color: theme.palette.common.Grey,
  },
  basketbar:{
    fontFamily: "Raleway",
    fontSize: "2rem",
    color: theme.palette.common.Grey,    
    marginRight: 10,
    marginBottom: 5,
    fontWeight: 600,
    width: 50
  }
}));

function Header(prop) {
  const Classes = useStyles();
  const theme = useTheme();
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Tabs indicatorColor="secondary" disableRipple>
            <Tab label="Shop" className={Classes.Tab} disableRipple />
            <Tab label="About Us" className={Classes.Tab} disableRipple />
          </Tabs>
          <Typography variant="logo" className={Classes.Heading} component={Link} to="/">
            My Shop
          </Typography>
          <IconButton component={Link} to="/checkout" disableRipple style={{backgroundColor: 'transparent'}}>
          <ShoppingCartOutlinedIcon className={Classes.ShoppingCart} />
          </IconButton>
          <Typography variant="basketbar" className={Classes.basketbar}>
            {prop.Basket.count}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={Classes.Appbar} />

    </React.Fragment>
  );
}

export default Header;
//

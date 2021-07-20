import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import HeroBg from "./assets/Home/Banner.jpg";
import ArrowDropDownSharpIcon from "@material-ui/icons/ArrowDropDownSharp";
import Cart from "./ShopCard";
import axios from "axios";

import ShopJson from "./Shop.json";
const useStyles = makeStyles((theme) => ({
  Main: {
    ...theme.mixins.toolbar,
    overflow: "hidden",
  },
  HeroContainer: {
    backgroundImage: "url(" + HeroBg + ")",
    backgroundClip: "none",
    backgroundSize: "cover",

    height: 750,
    verticalAlign: "center",
  },
  infoBg: {},
  HeroText: {
    color: "white",
    fontSize: "8rem",
    fontFamily: "Raleway",
    marginLeft: "10%",
    marginRight: "10%",
    textAlign: "center",
    marginTop: "",
    padding: 0,
  },
  HeroButton: {
    color: "white",
    borderColor: "white",
    fontSize: "2rem",
    marginTop: "-15%",
    borderRadius: 25,
    "&:hover": {
      color: "black",
      backgroundColor: "white",
    },
  },
  HeroArrow: {
    position: "absolute",
    color: "white",
    fontSize: "5rem",
    left: "48%",
    bottom: 50,
    animation: `$heroArrow 3s ease-in-out`,
    animationIterationCount: "infinite",
  },
  "@keyframes heroArrow": {
    "0%": {
      bottom: 10,
    },
    "50%": {
      bottom: 60,
    },
    "100%": {
      bottom: 10,
    },
  },
  ShopHead: {
    fontFamily: "Raleway",
    marginTop: 40,
    marginBottom: 30,
  },
  ShopSection: {
    margin: 40,
  },
  ScrollBar:{
    overflow: "hidden",
  }
}));

function Home(prop) {
  const [ShopCart, setShopCart] = useState([]);
  useEffect(() => {
    setShopCart(ShopJson);
  }, []);
  const Classes = useStyles();
  return (
    <Grid container direction="column" disableGutters>
      <div className={Classes.ScrollBar}></div>
      <Grid
        item
        container
        justify="center"
        alignItems="center"
        className={Classes.HeroContainer}
        disableGutters
      >
        <Typography variant="Hero" className={Classes.HeroText}>
          On Shop For All Your Needs
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          className={Classes.HeroButton}
        >
          SHop Now
        </Button>
        <ArrowDropDownSharpIcon className={Classes.HeroArrow} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="h2" className={Classes.ShopHead}>
          Our Shop
        </Typography>
        <div classname={Classes.ShopSection}>
          <Grid container direction="row" justify="center" spacing={5} alignItems="center">
            {ShopCart.map((shop) => (
              <Grid item alignItems="center" justify="center" >
                <Cart
                  ShopTitle={shop.CartName}
                  Cost={shop.Price}
                  url={shop.url}
                  setBasket={prop.setBasket}
                  Basket={prop.Basket}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default Home;

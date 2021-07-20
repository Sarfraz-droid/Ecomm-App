import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  Main: {
    borderRadius: 25,
    padding: 20,
    width: 400,
    height: 400,
    "&:hover": {
      backgroundColor: "white",
    },
  },
  image: {
    objectFit: "contain",
    width: "100%",
    height: 215,
    borderRadius: 25,
    marginBottom: 20,
  },
  Button: {
    border: "1px solid",
    borderColor: theme.palette.common.Grey,
    padding: 10,
    borderRadius: 20,
  },
  NoHover: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  ShopHeading: {
    fontFamily: "Raleway",
  },
  Cost: {
    fontSize: "2rem",
    fontFamily: "Raleway",
    fontWeight: 200,
  },
  currency: {
    fontFamily: "Raleway",
  },
}));

function ShopCard(props) {
  const theme = useTheme();
  const Classes = useStyles();
  return (
    <Card raised={true} className={Classes.Main}>
      <CardContent className={Classes.NoHover}>
        <Grid container direction="column">
          <Grid item>
            <img src={props.url} className={Classes.image} />
          </Grid>
          <Grid item>
            <Typography variant="h4" className={Classes.ShopHeading}>
              {props.ShopTitle}
            </Typography>
          </Grid>
          <Grid item>
            <span className={Classes.currency}>Rs </span>
            <Typography variant="p" className={Classes.Cost}>
              {props.Cost}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          className={Classes.Button}
          onClick={() => {
            props.setBasket({
              basket: [
                ...props.Basket.basket,
                {
                  "Title": props.ShopTitle,
                  "Url": props.url,
                  "Cost": props.Cost,
                },
              ],
              count: props.Basket.count + 1,
            });
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ShopCard;

import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutCard from "./CheckoutCard";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";


const useStyles = makeStyles((theme) => ({
  Header: {
    ...theme.typography.Heading,
    fontWeight: 100,
  },
  CheckoutBox: {
    padding: 20,
    border: "1px solid",
    borderColor: theme.palette.common.Grey,
    margin: 20,
  },
  BuyButton: {
    float: "right",
    marginRight: 20,
    marginTop: 20,
    fontSize: "1.5rem",
    fontFamily: "Raleway",
    fontWeight: 200,
    border: "1px solid",
    borderColor: theme.palette.common.Grey,
    padding: 10,
    borderRadius: 10,
    "&:hover": {
      backgroundColor: theme.palette.common.black,
      color: "white",
    },
  },
}));



function Checkout({ Basket, SetBasket, Total, SetTotal }) {


  useEffect(() => {
    let total = 0;
    Basket.basket.map((item) => {
      total += item.Cost;
    });

    SetTotal(total);
  }, []);
  const Classes = useStyles();
  console.log(Basket.basket);

  

  return (
    <Grid container direction="column">
      <Grid item justify="center" style={{ textAlign: "center", padding: 20 }}>
        <Typography variant="heading" className={Classes.Header}>
          Checkout
        </Typography>
      </Grid>
      <Grid item container direction="row">
        <Grid item container direction="column" spacing={3} sm>
          {Basket.basket.map((box) => (
            <Grid item>
              <CheckoutCard
                url={box.Url}
                ShopTitle={box.Title}
                Cost={box.Cost}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item justify="center" alignItems="center" sm>
          <Card style={{ boxShadow: "none" }} className={Classes.CheckoutBox}>
            <CardContent>
              <Grid item direction="column" spacing={3}>
                <Grid item>
                  <Typography variant="" className={Classes.Header}>
                    Total: Rs. {Total}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <Button
              component={Link}
              to={`/payment`}
              className={Classes.BuyButton}
              disabled={Total === 0}
            >
              Buy Now
            </Button>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Checkout;

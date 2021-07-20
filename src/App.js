import react, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./ui/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Home from "./Home";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Checkout from "./Checkout";
import PaymentForm from "./PaymentForm";

function App() {
  const [Basket, setBasket] = useState({
    basket: [],
    count: 0,
  });

  const [Total, setTotal] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header Basket={Basket} setBasket={setBasket} />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home Basket={Basket} setBasket={setBasket}  />}
          />
          <Route
            path="/checkout"
            render={(props) => (
              <Checkout Basket={Basket} setBasket={setBasket} Total={Total} SetTotal={setTotal}/>
            )}
          />
          <Route
            path="/payment"
            render={(props) => (
              <PaymentForm Basket={Basket} setBasket={setBasket} Total={Total} SetTotal={setTotal}/>
            )}
          />
            <Route
            path="/payment/success"
            render={(props) => (
              <div>
                PAYMENT SUCCESSFUL
              </div>
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

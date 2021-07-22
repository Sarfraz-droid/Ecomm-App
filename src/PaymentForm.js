import react, { useState } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import axios from 'axios';
import qs from 'qs';
import { useHistory } from "react-router-dom";

import logo from "./My Shop.png";


const stripePromise = loadStripe(
  "pk_test_51J3geASA7jiGiAi24veMuXm07UMmRIcjRCQ4RjtsgRFEl562PsrfDozp7sYjYevyGLvHtww7r8ipQm38Noyz8blW00DdVJsiXw"
);

const useStyles = makeStyles((theme) => ({
  Heading: {
    ...theme.typography.Heading,
  },
  Main:{
    margin: 40,
    width: "80%"
  },
  card:{
    border: "1px solid ",
    borderColor: "#a8a8a8",
    padding: 10,
    borderRadius: 5,
    "& :focus":
    {
      borderColor: "black",
    }
  },
  BuyButton:{
    marginRight: 20,
    marginTop: 20,  
    fontSize: "1.2rem",
    fontFamily: "Raleway",
    fontWeight:  200,
    border: '1px solid',
    borderColor: theme.palette.common.Grey,
    padding: 10,
    borderRadius: 10,
    "&:hover":{
      backgroundColor: theme.palette.common.black,
      color: 'white',

    }
  }
}));

var element = {
  style: {
    base: {
      fontSize: "1.1em",
      fontFamily: "Raleway",
      border: "1px solid",
      borderColor: "black",
    },
  },
};

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


function PaymentForm(prop) {

  const history = useHistory();

  const Classes = useStyles();
  const [active, setactive] = useState(1);
  const [City, setCity] = useState("");
  const [PinCode, setPinCode] = useState("");
  const [Address, setAddress] = useState("");
  


  async function displayRazorpay() {

		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if(!res){
      alert("Razorypay SDK failed to load. Are you online?");
      return;
    }

    // const data = await axios({
    //   method: 'post',
    //   url: 'http://localhost:5500/razorpay',
    //   body: JSON.stringify({
    //     amount: prop.Total
    //   })
    // });
    // https://floating-taiga-63791.herokuapp.com/razorpay
    const data =  await axios.post('https://floating-taiga-63791.herokuapp.com/razorpay', {amount: prop.Total});
    console.log(data);
    
    var options = {
      key: "rzp_test_NYArZlLe56jWNm", // Enter the Key ID generated from the Dashboard
      amount: data.data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: data.data.currency,
      name: "Paytm me",
      description: "Test Transaction",
      image: {logo}, // logo is a base64 encoded image,
      order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert("Payment Successful with id : "+response.razorpay_payment_id);
      },
      prefill: {
        address: Address,
        city: City,
        pincode: PinCode
      },
      notes: {
        address: Address,
        city: City,
        pincode: PinCode

      },
      theme: {
        color: "#3399cc",
      },
    };
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
  }

  const HandleClick = (e) => {
    e.preventDefault();
    displayRazorpay();
  };


  return (
    <Grid container direction="column" spacing={2} className={Classes.Main}>
      <Grid item alignItems="center" justify="center">
        <Typography
          variant="Heading"
          class={Classes.Heading}
          alignItems="center"
          justify="center"
        >
          Payment Form
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="outlined-basic"
          label="PinCode"
          variant="outlined"
          value={PinCode}
          onChange={(e) => setPinCode(e.target.value)}
        />
      </Grid>
      <Grid item>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Address"
          variant="outlined"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Grid>
      <Grid item>
        {/* <div className={Classes.card}>
          <Elements stripe={stripePromise}>
            <CardElement options={element} />
          </Elements>
        </div> */}
        <Button className={Classes.BuyButton} onClick={HandleClick} disabled={City == "" || PinCode == "" || Address == ""}>Pay Rs.{prop.Total}</Button>
      </Grid>
    </Grid>
  );
}

export default PaymentForm;

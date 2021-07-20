import { createMuiTheme } from '@material-ui/core/styles';

const cfWhite = '##FBFBFB'
const cfBlack = '#131313'
const cfGrey = "#8e8f8c"
const theme = createMuiTheme({
    palette:{
        common: {
            white: cfWhite,
            Black: cfBlack,
            Grey: cfGrey,
          },
          primary: {
            main: cfWhite,
          },
          secondary: {
            main: cfBlack,
          },
    },
    typography:{
      logo:{
        fontFamily: 'Raleway',
        fontSize: "2rem",
        color: cfGrey,
      },
      Heading:{
        fontFamily: "Raleway",
        fontSize: "3rem",
        fontWeight: 100,
        textAlign: "center",
      }
    },

});

export default theme
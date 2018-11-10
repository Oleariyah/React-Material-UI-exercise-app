import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import {MuiThemeProvider, createMuiTheme } from "@material-ui/core/";
import {red, amber} from "@material-ui/core/colors";


const client = new ApolloClient({
  uri: "https://localhost:4000",
});

const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber[500]
    },
    type:'dark'
  },
  spacing:{
    unit: 10
  }
});


ReactDOM.render(

  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client} >
      <App />
    </ApolloProvider>
  </MuiThemeProvider>,
     
  document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

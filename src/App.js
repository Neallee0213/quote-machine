import React from 'react';
import { random } from "lodash";
import  "typeface-roboto";
import { Grid,withStyles } from "@material-ui/core"
import QuoteMachine from './components/QuoteMaxhine';
import Box from '@material-ui/core/Box';

const styles ={
    container:{
      display: "flex",
      height: "100vh",
      alignItems: "center"
    }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.generateNewQuoteIndex = this.generateNewQuoteIndex.bind(this);
    this.assignNewQuoteIndes = this.assignNewQuoteIndes.bind(this);
    
    
  }
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(quotes => this.setState({ quotes },this.assignNewQuoteIndes));
    
  }

  get selectedQuote(){
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)){
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  generateNewQuoteIndex(){
    if(!this.state.quotes.length){
      return undefined;
    }
    
    return random(0,this.state.quotes.length-1)
  }

  assignNewQuoteIndes(){
    this.setState({selectedQuoteIndex: this.generateNewQuoteIndex()})
  }

  render(){
  
    
    return (
      <Grid>
        <Grid container justify="center" fontFamily="Monospace" className ="fluid">
          <Box mt={5} ml={10} mr={10} fontFamily="Monospace" fontSize={25}>
            <h2>Motivational Quotes to Start Your Day.</h2>
          </Box>
        </Grid>
        <Grid container justify="center">
          <Grid xs={9} lg={6} item >
          
            <Box mt={10}>
            { this.selectedQuote ?
              <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndes={this.assignNewQuoteIndes} /> 
              : null
            }
              
            </Box>
          </Grid>
          
          
        </Grid>n
        
      </Grid>
      
      );
  }
}

export default withStyles(styles)(App);

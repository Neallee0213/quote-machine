import React from "react";
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"





const QuoteMachine = ({assignNewQuoteIndes, selectedQuote }) => (
    <Grid>
        <Grid>
            <Card >
                <CardContent>

                            <Typography>
                                <Box
                                mt={9}
                                p={5}
                                fontSize={16}
                                letterSpacing={2}
                                fontFamily="Monospace"
                                display="block"
                                component="span"
                                >   
                                    {selectedQuote.quote}
                                </Box>
                                <Box 
                                mb={8}
                                pl={4}
                                fontWeight="fontWeightLight" 
                                m={1} fontSize={12}
                                letterSpacing={3}
                                display="block"
                                component="span"
                                >
                                    - {selectedQuote.author }
                                </Box>
                            </Typography>

                </CardContent>
                <CardActions style={{justifyContent: 'flex-end'}} >
                    <Button size="small" onClick={assignNewQuoteIndes}><p>Next Quote</p></Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid container justify="center">
            <Box 
            mt ={7}
            fontFamily="Monospace"
            >
              Share With
            </Box>
          </Grid>
          
          <Grid container justify="center">
            <Box mt ={3}>
              <IconButton
              target="_blank"
              href = {`https://twitter.com/intent/tweet?text=${selectedQuote.quote + " - " + selectedQuote.author}&hashtags=dailyquotes`}
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" ></FontAwesomeIcon>
              </IconButton>              
            </Box>                
          </Grid>



    </Grid>
    
)
export default QuoteMachine;
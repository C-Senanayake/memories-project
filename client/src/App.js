import React from 'react'
import { Grid ,Container,AppBar,Typography,Grow} from '@mui/material';

import memories from './images/memories.png'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
// import { useStyles } from './styles';

function App() {
  const classes = useStyles();
  // console.log(classes.appBar);
  return (
    <Container maxWidth="lg">
      <AppBar style={classes.appBar} position="static" color="inherit">
        <Typography style={classes.heading} variant="h2" align="center">Memories</Typography>
        <img style={classes.image} src={memories} alt="memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
  )
}

export default App

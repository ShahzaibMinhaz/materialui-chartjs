import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import Navbar from './navbar.js'
import BarChart from './BarChart.js'
import PieChart from './PieChart.js'


const useStyles = makeStyles((theme) => ({
  root: {

  },
  Paper: {
    marginTop: 50,
    // height:350,
    width: 400,
    margin: '0 auto',
    textAlign: 'center',
    padding: '3px 20px 30px 20px',
  },
  TextField: {
    marginTop: '10px',
    width: '100%',
    margin: '0 auto'
  },
  Button: {
    width: '100%',
    marginTop: '40px'
  }

}));




function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <div >
        <Paper elevation={6} className={classes.Paper} >
          <form className={classes.root} noValidate autoComplete="off">
            <h1 >LOGIN FORM</h1>
            <TextField label="Enter Email" className={classes.TextField} />
            <TextField label="Enter Password" className={classes.TextField} />
            <Button variant="contained" color="primary" className={classes.Button}>
              LOGIN
          </Button>
          </form>
        </Paper>

        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}

export default App;

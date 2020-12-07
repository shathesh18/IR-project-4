import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {useHistory } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color:'red',
    background:'#CEE3F6'
  },
});

export default function TitleBar(props) {
  const location=window.location.href
  const history=useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(location.split("/")[location.split("/").length-1]==='home'?0:1);

  console.log(location.split("/")[location.split("/").length-1])
  
  
  const handleChange = (event, newValue) => {
    console.log(newValue)
    if (newValue===undefined) newValue=1
    console.log(newValue)
    setValue(newValue);
    history.push(newValue===0?'/home':'/analytics')  
  };

  return (
    <Paper  className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        
      >
        <Tab  label="Home" />
        <Tab  label="Analytics" />
        </Tabs>
    </Paper>
  );
}
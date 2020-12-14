import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles((theme) => ({
    
    margin:{
        marginTop:'1ch'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  export default function Facets(props){
    console.log(props)
    const classes=useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
      });

    var pois=require("../graphs/pois.json")
      
    const topics=require('../graphs/topics.json')


    return (
        <div>
        <FormControl  className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">POI</InputLabel>
        <Select
          native
          value={props.values.poi}
          onChange={event=>{props.setters.setPoi(event.target.value)}}
        >
          <option aria-label="None" value="" />
          {pois.map(data=>{
            return (<option value={data.val}>{data.name}</option>)
          })}
        </Select>
      </FormControl>
      <FormControl  className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
        <Select
          native
          value={props.values.country}
          onChange={event=>{props.setters.setCountry(event.target.value)}}
        >
          <option aria-label="None" value="" />
          <option value='India'>India</option>
          <option value='Italy'>Italy</option>
          <option value='USA'>USA</option>
        </Select>
      </FormControl>
      <FormControl  className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Language</InputLabel>
        <Select
          native
          value={props.values.lang}
          onChange={event=>{props.setters.setLang(event.target.value)}}
        >
          <option aria-label="None" value="" />
          <option value='en'>English</option>
          <option value='hi'>Hindi</option>
          <option value='it'>Italian</option>
        </Select>
      </FormControl>
      <FormControl  className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Topic</InputLabel>
        <Select
          native
          value={props.values.topic}
          onChange={event=>{props.setters.setTopic(event.target.value)}}
        >
          <option aria-label="None" value="" />
          {topics.map(data=>(
            <option value={data}>{data}</option> 
          )

          )}
          
        </Select>
      </FormControl>
      
      </div>
    
    )
  }
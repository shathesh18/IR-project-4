import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {IconButton,Button} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: '100ch',
        marginRight: theme.spacing(1),
        width: '25ch',
      },
      
    margin:{
      marginTop:'1ch'
    },
    box:{
      marginLeft:'5ch'
    }
  }));

export default function SearchButton(props){
    console.log(props)
    const classes = useStyles();

    const handleChange=(event)=>{
      //console.log(event.target.value)
      props.search(event.target.value)
    }

    return (
          
      <div
      className={classes.box}>
      <TextField
      
      variant='filled'
        id="standard-full-width"
        style={{ margin: 8 }}
        placeholder="search"
        margin="normal"
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <IconButton onClick={(e)=>props.clickListener(props.rowsPerPage,true)} aria-label="seach" className={classes.margin} size="big">
          <SearchIcon />
      </IconButton>
      </div>
  
    )
}
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

      SearchButton:{
        color:'blue',
        backgroundColor:'#CEE3F6',
        marginLeft:'3ch',
        marginRight:'1ch'
      },
      
      relButton:{
        color:'blue',
        backgroundColor:'#E6E6E6',
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
      <div>
      <Button className={classes.SearchButton} onClick={(e)=>props.clickListener(props.rowsPerPage,true,0)}>search</Button>
      <Button className={classes.relButton} onClick={(e)=>props.clickListener(props.rowsPerPage,true,1)}>sort by influence</Button>
      </div>
      </div>
      
  
    )
}
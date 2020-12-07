import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchButton from './SearchButton'
import Grid from '@material-ui/core/Grid';
import Facets from './Facets'
import TextArea from './TextArea'
import Paper from '@material-ui/core/Paper';
import {Container, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '5ch'
  },
  
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  TextArea:{
      marginTop:'5ch'
  },
  pagination:{
    marginTop:'2ch',
    marginLeft:'35ch'
  },
  searchArea:{
    
  }
  
}));

export default function SearchPage() {
  //const url='http://localhost:5000/search'
  //const url='http://192.168.1.222:8000/api/search'
  //const url='http://ec2-52-90-240-228.compute-1.amazonaws.com/get'
  const url='http://54.211.53.53/get'
  const classes = useStyles();
  const [search,setSearch]=useState("")
  const [tweets,setTweets]=useState([])
  const rowsPerPage=10
  const [click,setClick]=useState(rowsPerPage)
  

  console.log(tweets)
    const [poi,setPoi]=useState("")
    const [country,setCountry]=useState("")
    const [lang,setLang]=useState("")
    const [topic,setTopic]=useState("")
    
  
  console.log(click)
  const clickListener=(click,flag)=>{
  
    var query=`search=${search}&end=${click}`

    if (country!=='') query=`${query}&country=${country}`
    if (poi!=='') query=`${query}&poi_name=${poi}` 
    if (lang!=='') query=`${query}&lang=${lang}`
    if (topic!=='') query=`${query}&topic=${topic}`
    
    setClick(flag?rowsPerPage:click+rowsPerPage)

    fetch(`${url}?${query}`)

    .then(res=>{
      const json=res.json()
      console.log(json)
      return json
    })
    .then(json=>{
      console.log(json)
      console.log(json.docs)
      setTweets(json.docs)
    })
  }

  return (
    
    <div>
    <Grid className={classes.searchArea} container spacing={3}>
        <Grid item xs={4}>
            <div className={classes.root}>
                <SearchButton rowsPerPage={rowsPerPage} clickListener={clickListener} search={setSearch}/>
            </div>
        </Grid>
        <Grid item xs={8}>
            <div className={classes.root}>
    
                <Facets 
                  values={{poi:poi,country:country,lang:lang,topic:topic}}
                  setters={{setPoi:setPoi,setCountry:setCountry,setLang:setLang,setTopic:setTopic }}/>
            </div>
        </Grid>
        
    </Grid>
    {
      tweets.length>0?
      <Paper elevation={5}>
        <div className={classes.TextArea}>
          
          <TextArea search={search} tweets={tweets}/>
          <Grid item xs={4}>
          <div className={classes.pagination}>
            <Button color='primary' onClick={e=>clickListener(click,false)}>load more</Button>
             </div>
          </Grid>
        
        </div>
        </Paper>:null
    }
    </div>
    
    
    

  );
}
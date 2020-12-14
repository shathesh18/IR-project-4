import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchButton from './SearchButton'
import Grid from '@material-ui/core/Grid';
import Facets from './Facets'
import TextArea from './TextArea'
import Paper from '@material-ui/core/Paper';
import {Container, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { removeUndefinedProps } from '@material-ui/data-grid';


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
  const url='http://54.208.237.78/get'
  //const url='http://192.168.1.222:8004/api/search'
  const classes = useStyles();
  const [search,setSearch]=useState("")
  const [tweets,setTweets]=useState([])
  const [news,setNews]=useState([])
  const rowsPerPage=40
  const [click,setClick]=useState(rowsPerPage)
  const [sort,setSort]=useState(0)
 
  console.log(tweets)
    const [poi,setPoi]=useState("")
    const [country,setCountry]=useState("")
    const [lang,setLang]=useState("")
    const [topic,setTopic]=useState("")
    const [analytics,setAnalytics]=useState([])
    const [tweets_country,SetTweets_country]=useState([])
    const [tweets_language,setTweets_language]=useState([])
    const [poi_tweets,setPoi_tweets]=useState([])
    const [tweet_sentiments,setTweet_sentiments]=useState([])
    const [analysis,setAnalysis]=useState([])
    console.log(click)
  const clickListener=(click,flag,sorter)=>{
  
    
    setClick(click+rowsPerPage)
    var query=`end=${flag?rowsPerPage:click}`
    if (search!=='') query=`${query}&search=${search}`
    if (country!=='') query=`${query}&country=${country}`
    if (poi!=='') query=`${query}&poi_name=${poi}` 
    if (lang!=='') query=`${query}&lang=${lang}`
    if (topic!=='') query=`${query}&topic=${topic}`
    if (sorter!==0) query=`${query}&sort=${sorter}`
    setSort(sorter)
    if (flag) setClick(80)
    fetch(`${url}?${query}`)

    .then(res=>{
      const json=res.json()
      console.log(json)
      return json
    })
    .then(json=>{
      console.log(json)
      //json=json[0]
      const country=json.tweets_country
      SetTweets_country(country)
      console.log(json.news)
      setNews(json.news)
      console.log(news)
      setTweets(json.docs)
      setTweets_language(json.tweets_language)
      setPoi_tweets(json.poi_tweets)
      setTweet_sentiments(json.tweets_sentiment)
      setAnalysis(json.analysis)

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
      tweets!==undefined && tweets.length>0?
      <Paper elevation={5}>
        <div className={classes.TextArea}>
          
          <TextArea 
          tweets_language={tweets_language}
           tweets_country={tweets_country} 
           tweet_sentiments={tweet_sentiments}
           poi_tweets={poi_tweets}
           search={search} 
           news={news} 
           tweets={tweets}
           analysis={analysis}
           />
          <Grid item xs={4}>
          <div className={classes.pagination}>
            <Button color='primary' onClick={e=>clickListener(click,false,sort)}>load more</Button>
             </div>
          </Grid>
        
        </div>
        </Paper>:null
    }
    </div>
    
    
    

  );
}
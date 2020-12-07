import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core'

import {Grid,Typography,Divider} from '@material-ui/core';
import Button from '@material-ui/core/Button';

import YouTubePlayer from 'react-player/lib/players/YouTube';
import Video from './video'
import Iframe from './Iframe'

import TitleBar from './titleBar'

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
      heading:{
        textAlign:'center',
        fontWeight:1000,
        marginLeft:'2ch',
        marginBottom:20
      },
      
      tweet:{
        textAlign:'left',
        marginTop:20,
        marginBottom:20,
        marginLeft:10
      },
      pagination:{
        textAlign:'right' ,
        marginLeft:150,
        marginTop:10    
      },
      tweet_text:{
          marginLeft:'2ch'
      },
      positive:{
        color:'#088A08',
        fontWeight:500
      },
      neutral:{
        color:'#FFBF00',
        fontWeight:500
      },
      negative:{
          color:'#FF0000',
          fontWeight:500
      }

}));
 

const Header=(props)=>{
    const classes=useStyles()
    return (
    <div className={classes.heading}>
        {props.heading}
        
    </div>
)}

const Tweet=(props)=>{
    const classes=useStyles()
    var month=props.date.split('-')[1]
    console.log(props)
    month=month==='01'?'Jan':month==='02'?'Feb':month==='03'?'Mar':
            month==='04'?'Apr':month==='05'?'May':month==='06'?'Jun':
            month==='07'?'Jul':month==='08'?'Aug':month==='09'?'Sep':
            month==='10'?'Oct':month==='11'?'Nov':'Dec'
    console.log(month)
    const day=props.date.split('-')[2].split('T')[0]
    console.log(day)
    return (
    <div className={classes.tweet}>       
         <div style={{fontStyle:'italic', fontWeight:'bold'}}>@{props.userName} - {month} {day}</div>
         <div>{props.tweet}</div> 
         <br/>
         <div className={props.sentiment<-0.25?classes.negative:props.sentiment<0.25?classes.neutral:classes.positive}>Sentiment : {props.sentiment}</div>
    </div>
    )
}
export default function TextArea(props){


    console.log(props)
    const classes=useStyles();
    const tweets=props.tweets
    console.log(tweets[0])
    const [click,setClick]=useState(0);

    const url='http://192.168.1.222:8000/api/search'
    const handleLoadMore=()=>{
        setClick(click+1)
        fetch(`${url}?search=${props.search}&start=${click}`)
        .then(res=>{
            console.log(res.json())
        })
    }

    return (
        <div>
            
        
            <Grid container spacing={3}>
                <Grid item xs={4}>
                <Header heading='Tweets'/>
                       
                    { 
                        tweets.map(data=>(
                            <div className={classes.tweet_text}>
                                <Tweet tweet={data.tweet_text} date={data.tweet_date} sentiment={data.sentiment[0]} userName={data['user.name']}></Tweet>
                                <Divider/>
                            </div>
                        ))
                        }
                    
                </Grid>
                <Grid item xs={4}>
                    <Header heading='News'/>
                </Grid>
                <Grid item xs={4}>
                    <Header heading='Analytics'/>
                        
                </Grid>
            </Grid>
           
        </div>

    )
}
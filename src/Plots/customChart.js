
import CanvasJSReact from '../assets/canvasjs.react';
import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



const useStyles = makeStyles((theme) => ({
    
    graph: {
      marginTop: '10ch',
      marginLeft:'10ch'
    },
}))
const CustomChart =(props)=> {	
    const classes=useStyles()
    console.log(props)
    const options = {
    height:200,
    width:350,
        title: {
        text: props.title
    },
    data: [{				
        type: props.type,
        dataPoints: props.data
         }]
     }
          
     return (
        
        <div className={classes.graph}>
      
        <CanvasJSChart  options = {options}    />
        </div>
      
      );
    }
  

  export default CustomChart;
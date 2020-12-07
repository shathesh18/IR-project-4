import CanvasJSReact from '../assets/canvasjs.react';
import React, {Component} from 'react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieChart =(props)=> {	
    console.log(props)
    const options = {
    title: {
        text: "Tweets per Country"
    },
    data: [{				
        type: "pie",
        dataPoints: [{
            label:'USA',y:46215
            },
            {
            label:'India',y:62521
            },
            {
            label:'Italy',y:38795
            }]
         }]
     }
          
     return (
        
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        
      );
    }
  

  export default PieChart;
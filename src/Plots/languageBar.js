import CanvasJSReact from '../assets/canvasjs.react';
import React, {Component} from 'react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const BarChart =(props)=> {	
    console.log(props)
    const options = {
    title: {
        text: "Tweets per Language"
    },
    data: [{				
        type: "funnel",
        dataPoints: [{
            label:'English',y:80391
            },
            {
            label:'Hindi',y:23638
            },
            {
            label:'Italian',y:33371
            }]
         }]
     }
          
     return (
        
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        
      );
    }
  

  export default BarChart;
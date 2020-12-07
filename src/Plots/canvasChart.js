import CanvasJSReact from '../assets/canvasjs.react';
import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class CanvasChart extends Component {	
    render() {


    const data=require('../graphs/tweetsPerPOI.json')
    console.log(data)
      const options = {
        title: {
          text: "Tweets per POI"
        },
        data: [{				
                  type: "column",
                  dataPoints: data
         }]
     }
          
     return (
        
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        
      );
    }
  }

  export default CanvasChart;
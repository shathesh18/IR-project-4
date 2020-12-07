import CanvasJSReact from '../assets/canvasjs.react';
import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



class TopicChart extends Component {	
    render() {


    const data=require('../graphs/topicImportance.json')
    console.log(data)
      const options = {
        title: {
          text: "Topic Importance"
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

  export default TopicChart;
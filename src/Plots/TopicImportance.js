import CanvasJSReact from '../assets/canvasjs.react';
import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




const useStyles = makeStyles((theme) => ({
    
  margin:{
      marginTop:'1ch'
  },
  formControl: {
    marginLeft:'100ch',
    marginTop:'20ch',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


const TopicChart =()=> {	
    
      const classes=useStyles()
      var india=require('../graphs/INDIA_topics.json')
      console.log(india)
      const usa=require('../graphs/USA_topics.json')
      const italy=require('../graphs/ITALY_topics.json')
      const alldata=require('../graphs/topicImportance.json')
    
      const [data,setData]=useState(alldata)
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
       <div>
         <FormControl  className={classes.formControl}>
         <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
        <Select value={data} onChange={(e=>{setData(e.target.value)})}>
        <option aria-label="All" value={alldata}>All</option>
          <option value={india}>India</option>
          <option value={italy}>Italy</option>
          <option value={usa}>USA</option>
        </Select>
        </FormControl>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
          </div>
        
      );
    }
  

  export default TopicChart;
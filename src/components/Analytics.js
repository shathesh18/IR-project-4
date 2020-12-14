import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Chart from 'chart.js'
import SimpleChart from './SimpleChart'
import TimeChart from './TimeChart'
import CanvasChart from '../Plots/canvasChart'
import PieChart from '../Plots/countryPie'

import { makeStyles } from '@material-ui/core/styles';
import {Container,Grid} from '@material-ui/core';
import BarPlot from '../Plots/languageBar'
import TopicChart from '../Plots/TopicImportance'
import POIVsCovid from '../Plots/POIVsCovid'

import Maps from '../Plots/GoogleMaps'

const useStyles = makeStyles((theme) => ({
  graph: {
    marginTop: '5ch'
  },
  
}));

export default function Analytics(props) {
  const classes=useStyles()
  return (
    <Container>
      <div className={classes.graph}>
        <CanvasChart/>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div className={classes.graph}>
            <PieChart language={true}/>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.graph}>
            <BarPlot/>
          </div>
        </Grid>
      </Grid>
      <div className={classes.graph}>
        <TopicChart/>
      </div>
      <div className={classes.graph}>
        <POIVsCovid/>
      </div>
      
    { 
    /* <div className={classes.graph}>
        <Maps/>
      </div>

    */
    }
    </Container>
  );
}

import React from 'react'
import Plot from 'react-plotly.js';
import newPlot from 'plotly.js'


var covid=require('../graphs/covid_latest_2.json')
covid.mode='lines'
covid.name='Covid death curve'
var poied=require('../graphs/final_covid_tweets.json')
const t=poied['y'].map(data=>data*10)
var poi={}
poi.x=poied.x
poi['y']=t
poi.name='POI Tweets'
poi.mode='lines'
const POIVsCovid=()=>{
      var data = [  covid,poi ];
      
      var layout = {
        title:'Correlation between POIs and covid curve'
      };
      
    return (
        <div>
            <Plot data={data} layout={layout}/>
        </div>
    )
}

export default POIVsCovid
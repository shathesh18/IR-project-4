import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';
import Container from '@material-ui/core/Container';



export default class TimeChart  extends Component{
    render(){
    const data={
        datasets:[
            {
                label: 'My First dataset',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
      
                data:[{
                    t: new Date('2020-11-01T00:00:00'),
                    y: 1
                }, {
                    t: new Date('2020-10-01T00:00:00'),
                    y: 10
                }, {
                    t: new Date('2020-09-01T00:00:00'),
                    y: 17
                }, {
                    t: new Date('2020-08-01T00:00:00'),
                    y: 25
                }
            ]
        }]
    }
    const options={
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit:'month',
                    displayFormats: {
                        month: 'MMM YYYY'
                    }
                }
            }]
        }
    }
    console.log(data)
    return (

        <Container>
            <Line ref="time"  options={options} data={data}/>
        </Container>

    )
    }
    componentDidMount() {
        
        console.log(this.refs);
      }
}

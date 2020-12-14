
import React,{Component} from 'react'
import {Circle, Map, GoogleApiWrapper,InfoWindow, Marker } from 'google-maps-react';

const APIKey='AIzaSyBpt6TNwwNzjMjxx8iTwDCb9KPBp8HjfT8'

 
export class Maps extends Component {
    render() {
    const mapStyles = {
        width: '80%',
        height: '60%'
    };
    const coords = { lat: -21.805149, lng: -49.0921657 };
      return (
        <Map initialCenter={coords} style={mapStyles} google={this.props.google} zoom={14}>
   
          <Marker center={coords} onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>Chennai</h1>
              </div>
          </InfoWindow>
          <Circle
            radius={1200}
            center={coords}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={5}
            fillColor='#FF0000'
            fillOpacity={0.2}
            />
            <Circle
            radius={10000}
            center={coords}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={5}
            fillColor='#FF0000'
            fillOpacity={0.2}
            />
        </Map>
      );
    }
  }
   
  export default GoogleApiWrapper({
    apiKey: APIKey
  })(Maps)
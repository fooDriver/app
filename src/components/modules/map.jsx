import React from "react";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";

class MapComponent extends React.Component {
  render() {
    let origin;
    let destination;
    let waypoints = [];

    for (let i = 0; i < this.props.stops.length; i++) {
      if (i === 0) {
        origin = this.props.stops[i].location;
      } else if (i === this.props.stops.length - 1) {
        destination = this.props.stops[i].location;
      } else {
        waypoints.push({
          location: this.props.stops[i].location,
          stopover: true
        });
      }
    }

    const DirectionsComponent = compose(
      withProps({
        googleMapURL:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyCXxeGr4r_edFR3-KeudUsO8JVQiYmo68k",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{ height: `400px`, width: `400px` }} />
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService(); // eslint-disable-line

          DirectionsService.route(
            {
              origin: origin,
              destination: destination,
              waypoints: waypoints,
              travelMode: google.maps.TravelMode.DRIVING // eslint-disable-line
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK) { // eslint-disable-line
                this.setState({
                  directions: { ...result },
                  markers: true
                });
              } else {
                console.error(`error fetching directions ${result}`);
              }
            }
          );
        }
      })
    )(props => (
      <GoogleMap defaultZoom={3}>
        {props.directions && (
          <DirectionsRenderer
            directions={props.directions}
            suppressMarkers={props.markers}
          />
        )}
      </GoogleMap>
    ));
    return <DirectionsComponent />;
  }
}
export default MapComponent;

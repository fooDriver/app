import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let location;

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCXxeGr4r_edFR3-KeudUsO8JVQiYmo68k&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentDidMount() {
      const refs = {};

      this.setState({
        position: null,
        onMarkerMounted: ref => {
          //console.log('on marker mounted',ref);
          refs.marker = ref;
        },

        onPositionChanged: () => {
          const lat = refs.marker.getPosition().lat();
          const lng = refs.marker.getPosition().lng();
          location = {
            lat: lat,
            lng: lng,
          }
        },
      })
    },

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        const refs = {};

        this.setState({
          position: null,
          onMarkerMounted: ref => {
            //console.log('on marker mounted',ref);
            refs.marker = ref;
          },

          onPositionChanged: () => {
            const lat = refs.marker.getPosition().lat();
            const lng = refs.marker.getPosition().lng();
            location = {
              lat: lat,
              lng: lng,
            }
          },
        })
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  console.log('PROPS ARE', props);
  
  let movableMarker = <Marker
      position={{ lat: 47.6062, lng: -122.3321 }}
      draggable={true}
      clickable={true}
      ref={props.onMarkerMounted}
      onPositionChanged={props.onPositionChanged}
    />
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
    >
      {!props.newStop && movableMarker}
      {
        props.stops.map((stop, index) => (
          <Marker
            key={index}
            position={{ lat: stop.lat, lng: stop.lng }}
          />
        ))
      }
    </GoogleMap>
  )
  //}
}


)

class MyParentComponentWrapper extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      stops: [],
      isSaved: false,
    }
  }


  addNewMarker = () => {
    console.log('addnewmarker');
    this.setState({
      isSaved: false
    });
  }

  saveMarker = () => {
    console.log('savemarker');
    console.log(location);
    this.setState({
      stops: [...this.state.stops, location],
      isSaved: true,
    });
  }

  render() {
    console.log('STATE', this.state);
    return (
      <div>
        <button onClick={this.addNewMarker}>Add New Stop</button>
        <button onClick={this.saveMarker}>Save Stop</button>
        <MyMapComponent stops={this.state.stops} newStop={this.state.isSaved} />
      </div>
    )
  }
}

// goes in mymapcomponent: isMarkerShown={true}
// goes in front of marker position: props.isMarkerShown && 


export default MyParentComponentWrapper;

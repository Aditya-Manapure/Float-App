import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useState, useEffect, Component } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';
import { useAuth } from '../navigations/AuthContext';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

//import MapViewDirections from '../map/MapViewDirections';


>>>>>>> 46455c7fb3e2f904a23a14c0e04353cc626ee1c3
//import { GOOGLE_MAPS_APIKEY, OPEN_ROUTE_SERVICE_APIKEY } from "@env";
import { Dimensions } from 'react-native';
//import { set } from 'immer/dist/internal';
const { height, width } = Dimensions.get('window');
const WAYPOINT_LIMIT = 10;


const Map = () => {

  /*constructor(props) {
		super(props);

		this.state = {
			coordinates: null,
			distance: null,
			duration: null,
		};
	}

  decode(t) {
		console.log("decode");
		let points = [];
		for (let step of t) {
			let encoded = step.polyline.points;
			let index = 0, len = encoded.length;
			let lat = 0, lng = 0;
			while (index < len) {
				let b, shift = 0, result = 0;
				do {
					b = encoded.charAt(index++).charCodeAt(0) - 63;
					result |= (b & 0x1f) << shift;
					shift += 5;
				} while (b >= 0x20);

				let dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
				lat += dlat;
				shift = 0;
				result = 0;
				do {
					b = encoded.charAt(index++).charCodeAt(0) - 63;
					result |= (b & 0x1f) << shift;
					shift += 5;
				} while (b >= 0x20);
				let dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
				lng += dlng;

				points.push({ latitude: (lat / 1E5), longitude: (lng / 1E5) });
			}
		}
		return points;
	}*/

  /*let request = new XMLHttpRequest();

    request.open('POST', "https://api.openrouteservice.org/v2/directions/driving-car/json");

    request.setRequestHeader('Accept', 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8');
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', '5b3ce3597851110001cf62482663b0bbdc844998bea788272def8559');

    var jsonObject;

    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            console.log('Status:', this.status);
            console.log('Headers:', this.getAllResponseHeaders());
            console.log('Body:', this.responseText);
            this.jsonObject = this.responseText;

            const routes = [];
            const [data , setData] = useState({
              coordinates: null,
              distance: null,
              duration: null,
          });

          const componentDidMount = () =>{
            console.log("componentDidMount");
            this.fetchAndRenderRoute(this.props);
          }

          const componentDidUpdate = (prevProps) => {
            console.log("componentDidUpdate");
            if (!isEqual(prevProps.origin, this.props.origin) || !isEqual(prevProps.destination, this.props.destination) || !isEqual(prevProps.waypoints, this.props.waypoints) || !isEqual(prevProps.mode, this.props.mode) || !isEqual(prevProps.precision, this.props.precision) || !isEqual(prevProps.splitWaypoints, this.props.splitWaypoints)) {
              if (this.props.resetOnChange === false) {
                this.fetchAndRenderRoute(this.props);
              } else {
                this.resetState(() => {
                  this.fetchAndRenderRoute(this.props);
                });
              }
            }
          }

          const resetState = (cb = null) => {
            this.setState({
              coordinates: null,
              distance: null,
              duration: null,
            }, cb);
          }

            const decode = (t) => {
              console.log("decode");
              let points = [];
              for (let step of t) {
                let encoded = step.polyline.points;
                let index = 0, len = encoded.length;
                let lat = 0, lng = 0;
                while (index < len) {
                  let b, shift = 0, result = 0;
                  do {
                    b = encoded.charAt(index++).charCodeAt(0) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                  } while (b >= 0x20);

                  let dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
                  lat += dlat;
                  shift = 0;
                  result = 0;
                  do {
                    b = encoded.charAt(index++).charCodeAt(0) - 63;
                    result |= (b & 0x1f) << shift;
                    shift += 5;
                  } while (b >= 0x20);
                  let dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1));
                  lng += dlng;

                  points.push({ latitude: (lat / 1E5), longitude: (lng / 1E5) });
                }
              }
              return points;
            }

            var json = JSON.parse(this.responseText);
            if (json.status !== 'OK') {
              const errorMessage = json.error_message || json.status || 'Unknown error';
              return Promise.reject(errorMessage);
            }

            if (json.routes.length) {

              const route = json.routes[0];

              return Promise.resolve({
                distance: route.legs.reduce((carry, curr) => {
                  return carry + curr.distance.value;
                }, 0) / 1000,
                duration: route.legs.reduce((carry, curr) => {
                  return carry + (curr.duration_in_traffic ? curr.duration_in_traffic.value : curr.duration.value);
                }, 0) / 60,
                coordinates: (
                  (precision === 'low') ?
                    this.decode([{polyline: route.overview_polyline}]) :
                    route.legs.reduce((carry, curr) => {
                      return [
                        ...carry,
                        ...this.decode(curr.steps),
                      ];
                    }, [])
                ),
                fare: route.fare,
                waypointOrder: route.waypoint_order,
                legs: route.legs,
              });

            } else {
              return Promise.reject();
            }

            console.log("121423JSON_OBJECT-----------------------------");
            if(typeof jsonObject === 'string') console.log("STRINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
        }
    };

    const body = '{"coordinates":[[8.681495,49.41461],[8.686507,49.41943],[8.687872,49.420318]]}';

    request.send(body);*/

  const origin = { latitude: 16.847350827401808, longitude: 74.59880747474361 };
  const destination = { latitude: 16.845574393214125, longitude: 74.6036139934753 };
  const LATITUDE_DELTA = 0.12;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height)

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const { currentUser } = useAuth();

  const [currLat, setCurrLat] = useState(16.845839702003307);
  const [currLng, setCurrLng] = useState(74.60094760130845);
  const OPEN_ROUTE_SERVICE_APIKEY = "5b3ce3597851110001cf62482663b0bbdc844998bea788272def8559"

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setCurrLat(location.coords.latitude);
      setCurrLng(location.coords.longitude);
      console.log(location);
    })();
  }, []);

  return (
    <View>
      <MapView
        style={{
          height: '100%',
          width: '100%'
        }}
        initialRegion={{
          latitude: currLat,
          longitude: currLng,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
<<<<<<< HEAD
        <MapViewDirections
=======
<<<<<<< HEAD
          {/*<MapViewDirections
=======
        {/*<MapViewDirections
>>>>>>> 46455c7fb3e2f904a23a14c0e04353cc626ee1c3
>>>>>>> c102637da64a736996f26323ef2fe50c28cba0b2
            origin={origin}
            destination={destination}
            apikey={OPEN_ROUTE_SERVICE_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"

<<<<<<< HEAD
          />
=======
          />*/}
<<<<<<< HEAD
          <Marker
            coordinate={{ latitude : currLat , longitude : currLng }}
            title = {currentUser.displayName}
          >
            <Image
              style = {styles.mapUserImg}
              source = {{uri : currentUser ? currentUser.photoURL || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
            />
            {/*<Callout tooltip>
=======
>>>>>>> c102637da64a736996f26323ef2fe50c28cba0b2
        <Marker
          coordinate={{ latitude: currLat, longitude: currLng }}
          title={currentUser.displayName}
        >
          <Image
            style={styles.mapUserImg}
            source={{ uri: currentUser ? currentUser.photoURL || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' }}
          />
          {/*<Callout tooltip>
>>>>>>> 46455c7fb3e2f904a23a14c0e04353cc626ee1c3
              <View>
                <View style={styles.bubble}>
                  <Text style={styles.name}>{currentUser.displayName}</Text>
                  <Text>travel from Sangli to Pune at 8pm</Text>
                </View>
                <View style ={styles.arrowBorder}/>
                <View style ={styles.arrow} />
              </View>
            </Callout>*/}
        </Marker>
      </MapView>

    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  mapUserImg: {
    width: 30,
    height: 30,
    borderRadius: 20
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },


});

import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, {useState, useEffect} from 'react';
import MapView ,{ Callout, Marker } from 'react-native-maps';
import { useAuth } from '../navigations/AuthContext';
import * as Location from 'expo-location';
//import MapViewDirections from 'react-native-maps-directions';
//import { GOOGLE_MAPS_APIKEY, OPEN_ROUTE_SERVICE_APIKEY } from "@env";
import {Dimensions} from 'react-native';
//import { set } from 'immer/dist/internal';
const { height, width } = Dimensions.get( 'window' ); 

const Map = () => {
  //const origin = {latitude: 37.3318456, longitude: -122.0296002};
  //const destination = {latitude: 37.771707, longitude: -122.4053769};
  const LATITUDE_DELTA = 0.12;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height)

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  
  const { currentUser } = useAuth(); 

  const [currLat, setCurrLat] = useState(16.845839702003307);
  const [currLng, setCurrLng] = useState(74.60094760130845);
  

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
            style = {{
              height : '100%',
              width : '100%'
            }}
            initialRegion={{
            latitude: currLat,
            longitude: currLng,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            }}
      >
          {/*<MapViewDirections
            origin={origin}
            destination={destination}
            apikey={OPEN_ROUTE_SERVICE_APIKEY}
          />*/}
          <Marker
            coordinate={{ latitude : currLat , longitude : currLng }}
            title = {currentUser.displayName}
          >
            <Image 
              style = {styles.mapUserImg}
              source = {{uri : currentUser ? currentUser.photoURL || 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg' : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'}}
            />
            {/*<Callout tooltip>
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
  mapUserImg : {
    width : 30,
    height : 30,
    borderRadius : 20
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

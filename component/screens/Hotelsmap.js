import React, { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { Polyline } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { Card } from "react-native-paper";
import { EvilIcons } from "@expo/vector-icons";
import axios from "axios";

import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
//import { PetList } from './petList';
export const Hotelsmap = () => {
  const [coordinates, setcoordinates] = useState([
    {
      latitude: 30,
      longitude: 30,
    },
    {
      latitude: 30.5,
      longitude: 31.3,
    },
  ]);
  const [datainfo, setdatainfo] = useState([]);
  //const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      //console.log(location);

      let pin = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      console.log("pin", pin);
      setcoordinates([
        {
          latitude: pin.latitude,
          longitude: pin.longitude,
        },
        {
          latitude: 30.5,
          longitude: 31.3,
        },
      ]);

      axios
        .post("https://petzone99.herokuapp.com/api/v1/hotels/", pin)
        .then((res) => {
          setdatainfo(res.data.hotels);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    })();
  }, []);
  console.log("ffff", coordinates[1]);

  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Map Hotel</Text>
      </View>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialCamera={{
          center: {
            latitude: coordinates[0].latitude,
            longitude: coordinates[0].longitude,
          },
          pitch: 0,
          zoom: 10,
          heading: 0,
          altitude: 1000,
        }}
      >
        {/* <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey="AIzaSyDmDEJGBtpfiJFew29ALiJlNIyNBv5-otg" // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        /> */}

        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />
      </MapView>

      <View style={styles.container1}>
        <FlatList
          data={datainfo}
          scrollEnabled={true}
          renderItem={({ item }) => {
            return (
              <Card
                style={styles.card}
                onPress={() => {
                  let temp_state = [...coordinates];

                  // 2. Make a shallow copy of the element you want to mutate
                  let temp_element = { ...temp_state[1] };
                  // console.log(temp_element)
                  // 3. Update the property you're interested in
                  temp_element.latitude = item.latitude;
                  temp_element.longitude = item.longitude;

                  // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                  temp_state[1] = temp_element;
                  // console.log(temp_state[item])

                  // 5. Set the state to our new copy
                  setcoordinates(temp_state);
                }}
              >
                <Card.Cover
                  key={item._id}
                  style={styles.cover}
                  source={{ uri: item.imageURL }}
                />
                <Text style={styles.title}> Name: {item.title}</Text>
                <Text style={styles.title1}>
                  {" "}
                  Distance: {item.distance} KM{" "}
                  {<EvilIcons name="location" size={24} color="black" />}
                </Text>
              </Card>
            );
          }}
          keyExtractor={(info) => info._id}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header1: {
    backgroundColor: "rgba(253,239,197,1)",
    bottom: 2,
    height: 90,
    width: 410,
    marginTop: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  textheader1: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 0,
    width: 380,
    height: 118,
    borderColor: "white",
    //borderRadius:15,
    //borderStartWidth:2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  cover: {
    width: "30%",
    height: 118,
    padding: 0,
    backgroundColor: "rgb(250, 219, 216)",
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    paddingBottom: 10,
    marginLeft: 115,
    bottom: 110,
    fontWeight: "bold",
    fontSize: 16,
    color: "#5C7A95",
  },
  title1: {
    paddingBottom: 10,
    marginLeft: 130,
    bottom: 110,
    fontSize: 16,
    color: "#5C7A95",
  },
  map: {
    marginTop: 4,
    width: Dimensions.get("window").width,
    height: 400,
  },
});

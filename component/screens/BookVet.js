import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";
import axios from "axios";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
export const BookVet = (navigation) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [vetid, setvetid] = useState("");

  const [vets, setvets] = useState(vets2);
  //setvets(vets2)
  //console.log("nn",vets)
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
      maximumAge: 10000,
    });
    setLocation(location);
  })();

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  axios
    .post("", {
      headers: {
        Cookie: "cookie1=value; cookie2=value; cookie3=value;",
        Authorization: "Bearer my-token",
      },
      location: location,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  axios
    .get("", {
      headers: {
        Cookie: "cookie1=value; cookie2=value; cookie3=value;",
        Authorization: "Bearer my-token",
      },
      withCredentials: true,
    })
    .then((res) => {
      setvets(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const vets1 = vets.data;
  console.log("mm", vets1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Book a Vet</Text>
        <MaterialIcons
          style={styles.icon1}
          name="notifications-none"
          size={30}
          color="#3D405B"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={vets1}
          renderItem={({ item }) => {
            return (
              <Card
                style={styles.card}
                onPress={() =>
                  navigation.navigate("Vetdetails", {
                    vetid: item._id,
                    userid: userid,
                  })
                }
              >
                <Card.Cover
                  key={item._id}
                  style={styles.cover}
                  source={{ uri: item.profilePicture }}
                />
                <Text style={styles.title1}> DoctorName: {item.userName}</Text>
                <Text style={styles.title1}>
                  {" "}
                  workingHours from{" "}
                  {item.serviceProvider.workingHours.startingHour} to{" "}
                  {item.serviceProvider.workingHours.finishingHour}, offDays is{" "}
                  {item.serviceProvider.offDays}, rateperhour is{" "}
                  {item.serviceProvider.ratePerHour} EG{" "}
                </Text>
              </Card>
            );
          }}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  header1: {
    backgroundColor: "rgba(253,239,197,1)",
    height: 100,
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
  icon1: {
    position: "absolute",
    top: 40,
    left: 340,
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
  title1: {
    paddingBottom: 10,
    marginLeft: 120,
    bottom: 110,
    fontSize: 16,
    color: "#5C7A95",
    fontWeight: "bold",
  },
});

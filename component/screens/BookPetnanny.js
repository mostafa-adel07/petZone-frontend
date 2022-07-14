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
export const BookPetnanny = ({ route, navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [petnannys, setpetnannys] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
        maximumAge: 100000000,
      });

      let location1 = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        type: "Pet Carer",
      };

      axios
        .post(
          "https://petzone99.herokuapp.com/api/v1/users/userByDistance",
          location1
        )
        .then((res) => {
          setpetnannys(res.data.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    })();
  }, []);

  const petnannys1 = petnannys;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Book a petnanny</Text>
        <MaterialIcons
          style={styles.icon1}
          name="notifications-none"
          size={30}
          color="#3D405B"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={petnannys1}
          renderItem={({ item }) => {
            return (
              <Card
                style={styles.card}
                onPress={() =>
                  navigation.navigate("petnannydetails", {
                    petnannyid: item._id,
                  })
                }
              >
                <Card.Cover
                  key={item._id}
                  style={styles.cover}
                  source={{ uri: item.profilePicture }}
                />
                <Text style={styles.title1}>
                  {" "}
                  petnannyName: {item.serviceProvider.userName}
                </Text>
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
    marginLeft: 115,
    bottom: 110,
    fontSize: 16,
    color: "#5C7A95",
    fontWeight: "bold",
  },
});

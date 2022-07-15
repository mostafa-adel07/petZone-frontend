import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import { TextInput, ScrollView } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

export const SP1 = ({ route, navigation }) => {
  const [pin, setpin] = useState({
    latitude: 30.0707056,
    longitude: 31.2525958,
  });
  const [type, Settype] = useState("");
  const [ratePerHour, SetratePerHour] = useState("");
  const [startingHour, SetStartingHour] = useState("");
  const [offDays, Setoff_days] = useState("");
  const [finishingHour, SetfinishingHour] = useState("");
  const [landLine, Setland_line] = useState("");
  const [maxNumberClients, SetMaxNumberClients] = useState("");
  const [data2, setData2] = React.useState({
    isRequiredType: true,
    isRequiredRate: true,
    isRequiredWorking_hours: true,
    isRequiredOff_days: true,
    isRequiredLand_line: true,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setpin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);
  const {
    name,
    userName,
    phoneNumber,
    email,
    password,
    passwordConfirm,
    nationalID,
    address,
    country,
    city,
    role,
    image,
  } = route.params;

  function Next() {
    // navigation.navigate("SP2", {
    //   name: name,
    //   userName: userName,
    //   phoneNumber: phoneNumber,
    //   email: email,
    //   password: password,
    //   passwordConfirm: passwordConfirm,
    //   nationalID: nationalID,
    //   country: country,
    //   city: city,
    //   address: address,
    //   role: role,
    //   type: type,
    //   startingHour: startingHour,
    //   finishingHour: finishingHour,
    //   maxNumberClients: maxNumberClients,
    //   offDays: offDays,
    //   ratePerHour: ratePerHour,
    //   landLine: landLine,
    //   image: image,
    //   latitude: pin.latitude,
    //   longitude: pin.longitude,
    // });
    const form = new FormData();
    form.append("photo", {
      name: "a.jpg",
      uri: image,
      type: "image/" + image.slice(-3),
    });
    form.append("name", name);
    form.append("userName", userName);
    form.append("phoneNumber", phoneNumber);
    form.append("email", email);
    form.append("password", password);
    form.append("passwordConfirm", passwordConfirm);
    form.append("city", city);
    form.append("country", country);
    form.append("role", "service provider");
    form.append("address", address);
    form.append("nationalID", nationalID);
    form.append("serviceProvider", {
      location: { latitude: pin.latitude, longitude: pin.longitude },
      type: type,
      workingHours: {
        startingHour: startingHour,
        finishingHour: finishingHour,
        maxNumberClients: maxNumberClients,
      },
      offDays: [offDays],
      ratePerHour: ratePerHour,
      landLine: landLine,
      // verificationDocuments: [verificationDocuments],
    });
    console.log(form);
    axios
      .post("https://petzone99.herokuapp.com/api/v1/users/signup", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log("well done, my boy");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <SafeAreaView style={styles.con1}>
      <ScrollView contentContainerStyle={styles.Container}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter Type"
            onChangeText={(type) => Settype(type)}
            //onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter ratePerHour"
            onChangeText={(ratePerHour) => SetratePerHour(ratePerHour)}
            //onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Starting hour"
            onChangeText={(startingHour) => SetStartingHour(startingHour)}
            //onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Finishing hour"
            onChangeText={(finishingHour) => SetfinishingHour(finishingHour)}
            // onEndEditing={(e) => handelRequiredWorking_hours(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="max Number of clients"
            onChangeText={(maxNumberClients) =>
              SetMaxNumberClients(maxNumberClients)
            }
            // onEndEditing={(e) => handelRequiredOff_days(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Off Days"
            onChangeText={(off_days) => Setoff_days(off_days)}
            // onEndEditing={(e) => handelRequiredOff_days(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter landLine"
            onChangeText={(landLine) => Setland_line(landLine)}
            // onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>

        <TouchableOpacity style={styles.buttoncontainer1} onPress={Next}>
          <Text style={styles.buttontext1}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  Container: {
    backgroundColor: "rgba(253,239,197,1)",

    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 150,
  },
  input: {
    flexDirection: "row",
  },
  inputtext1: {
    borderRadius: 9,
    width: 350,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 15,
    marginRight: -10,
  },
  errormsg: {
    bottom: 5,
    paddingRight: 240,
    color: "red",
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#EA5C2B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 50,
    marginLeft: 10,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
  logo: {
    height: 128,
    width: 128,
  },
});

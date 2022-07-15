import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";

import { TextInput, ScrollView } from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

export const SP2 = ({ route, navigation }) => {
  function confirm() {
    axios({
      method: "post",
      url: "https://petzone99.herokuapp.com/api/v1/users/verifyEmail",
      data: {
        email,
      },
    })
      .then(function (response) {
        navigation.navigate("AccountVerfication");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const [verificationDocuments, SetVerificationDocuments] = useState("");
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
    type,
    startingHour,
    finishingHour,
    maxNumberClients,
    offDays,
    landLine,
    ratePerHour,
    latitude,
    longitude,
  } = route.params;

  console.log(image);
  // const addImage = async () => {
  //   let _image = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   if (!_image.cancelled) {
  //     SetVerificationDocuments(_image.uri);
  //   }
  // };
  function signup() {
    let user = {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      userName: userName,
      nationalID: nationalID,
      city: city,
      country: country,
      address: address,
      phoneNumber: phoneNumber,
      role: role,
      profilePicture: image,
      serviceProvider: {
        location: {
          latitude: latitude,
          longitude: longitude,
        },
        type: type,
        workingHours: {
          startingHour: startingHour,
          finishingHour: finishingHour,
          maxNumberClients: maxNumberClients,
        },
        offDays: [offDays],
        ratePerHour: ratePerHour,
        landLine: landLine,
        verificationDocuments: [verificationDocuments],
      },
    };

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
      location: { latitude: latitude, longitude: longitude },
      type: type,
      workingHours: {
        startingHour: startingHour,
        finishingHour: finishingHour,
        maxNumberClients: maxNumberClients,
      },
      offDays: [offDays],
      ratePerHour: ratePerHour,
      landLine: landLine,
      verificationDocuments: [verificationDocuments],
    });
    axios
      .post("https://petzone99.herokuapp.com/api/v1/users/signup", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        confirm();
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <View style={styles.container2}>
      <Text style={styles.input}> Upload verification Documents</Text>
      <View style={imageUploaderStyles.container}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity
            // onPress={addImage}
            style={imageUploaderStyles.uploadBtn}
          >
            <Text>{image ? "Edit" : "Upload"} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttoncontainer1} onPress={signup}>
        <Text style={styles.buttontext1}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    marginBottom: 0,
    alignItems: "center",
    backgroundColor: "rgba(253,239,197,1)",
  },
  input: {
    color: "#084594",
    top: 1,
    textAlign: "center",
    fontSize: 24,
    marginTop: 90,
    fontWeight: "bold",
  },

  buttoncontainer1: {
    borderRadius: 15,
    width: 150,
    height: 45,
    backgroundColor: "#EA5C2B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 100,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
});
const imageUploaderStyles = StyleSheet.create({
  container: {
    elevation: 2,
    height: 200,
    width: 200,
    top: 30,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgray",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

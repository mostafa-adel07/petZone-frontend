import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

export const SignupUser2 = ({ route, navigation }) => {
  const [image, setImage] = useState(null);
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
  } = route.params;

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };

  function Next() {
    navigation.navigate("typeSignup", {
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
      image: image,
    });
  }
  return (
    <View style={styles.container2}>
      <View style={styles.header}>
        <Text style={styles.input}> Profile Picture</Text>
      </View>
      <View style={imageUploaderStyles.container}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <View style={imageUploaderStyles.uploadBtnContainer}>
          <TouchableOpacity
            onPress={addImage}
            style={imageUploaderStyles.uploadBtn}
          >
            <Text>{image ? "Edit" : "Upload"} Image</Text>
            <AntDesign name="camera" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttoncontainer1} onPress={Next}>
        <Text style={styles.buttontext1}>Next</Text>
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
    bottom: 30,
    textAlign: "center",
    fontSize: 28,
    marginTop: 90,
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "rgba(253,239,197,1)",
    height: 125,
    width: 500,
    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
    alignItems: "center",
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 200,
    height: 50,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 80,
    paddingLeft: 50,
    marginLeft: 10,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 28,
    fontWeight: "bold",
  },
  signuptext: {
    textAlign: "center",
    color: "black",
    fontSize: 18,
    flexDirection: "row",
    marginTop: 20,
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

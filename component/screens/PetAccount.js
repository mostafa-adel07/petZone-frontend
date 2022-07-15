import React, { useState, useEffect } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";

export const PetAccount = ({ navigation }) => {
  const [petname, SetpetName] = useState("");
  const [type, Settype] = useState("");
  const [breed, Setbreed] = useState("");
  const [weight, Setweight] = useState("");
  const [age, Setage] = useState("");
  const [gender, Setgender] = useState("");
  const [color, Setcolor] = useState("");
  const [description, Setdescription] = useState("");
  const [image, setImage] = useState(null);

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
  function CreateProfile() {
    let pet = {
      petName: petname,
      petType: type,
      petBreed: breed,
      petWeight: weight,
      petage: age,
      petGender: gender,
      petColor: color,
      petDescription: description,
      petProfilePic: image,
    };

    const form = new FormData();
    form.append("photo", {
      name: "a.jpg",
      uri: image,
      type: "image/" + image.slice(-3),
    });
    form.append("petName", petname);
    form.append("petType", type);
    form.append("petBreed", breed);
    form.append("petWeight", weight);
    form.append("petage", age);
    form.append("petGender", gender);
    form.append("petColor", color);
    form.append("petDescription", description);

    axios
      .post("https://petzone99.herokuapp.com/api/v1/pets/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        navigation.navigate("UserProfile");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Create Pet Profile</Text>
        <Text style={styles.subtitle}>Fill your pet details</Text>
        <View style={imageUploaderStyles.container}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
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
        <View style={styles.txtin}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Pet Name"
              onChangeText={(petname) => SetpetName(petname)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Type"
              onChangeText={(type) => Settype(type)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Breed"
              onChangeText={(breed) => Setbreed(breed)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Weight"
              onChangeText={(weight) => Setweight(weight)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Age"
              onChangeText={(age) => Setage(age)}
              placeholderTextColor="gray"
            />
          </View>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Gender"
            onChangeText={(gender) => Setgender(gender)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Color"
            onChangeText={(color) => Setcolor(color)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Description"
            onChangeText={(description) => Setdescription(description)}
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={CreateProfile}
        >
          <Text style={styles.buttontext}>Create Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(253,239,197,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 400,
  },
  input: {
    flexDirection: "row",
  },
  title: {
    color: "#084594",
    fontSize: 30,
    alignItems: "center",
    marginTop: 90,
    paddingBottom: 20,
    fontWeight: "bold",
    marginRight: 90,
    bottom: 30,
  },
  subtitle: {
    fontSize: 20,
    marginRight: 160,
    bottom: 40,
  },
  inputtext: {
    borderRadius: 9,
    width: 350,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 20,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 10,
    marginRight: -10,
  },
  inputtext1: {
    borderRadius: 9,
    width: 350,
    height: 150,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 10,
    marginRight: -10,
  },

  buttoncontainer: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 50,
    marginLeft: 10,
  },
  buttontext: {
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
    bottom: 10,
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

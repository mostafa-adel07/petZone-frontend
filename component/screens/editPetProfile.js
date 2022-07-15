import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Constants from "expo-constants";
import { TextInput, Platform } from "react-native";
import styled from "styled-components/native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
export const EditPetProfile = ({ route, navigation }) => {
  const { id } = route.params;
  const [pet, Setpet] = useState({});
  const [petname, SetpetName] = useState("");
  const [weight, Setweight] = useState("");
  const [age, Setage] = useState("");
  const [description, Setdescription] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/pets/" + id)
      .then((res) => {
        Setpet(res.data.data.pet);
        SetpetName(res.data.data.pet.petName);
        Setweight(res.data.data.pet.petWeight);
        Setage(res.data.data.pet.petAge);
        Setdescription(res.data.data.pet.petDescription);
        setImage(res.data.data.pet.petProfilePic);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function update() {
    const form = new FormData();
    form.append("photo", {
      name: "a.jpg",
      uri: image,
      type: "image/" + image.slice(-3),
    });
    form.append("petName", petname);
    form.append("petWeight", weight);
    form.append("petage", age);
    form.append("petDescription", description);

    axios
      .patch("https://petzone99.herokuapp.com/api/v1/pets/" + id, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        alert("updated successfully!");
        navigation.navigate("PetProfile", { id: id });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!_image.cancelled) {
      setImage(_image.uri);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container2}>
        <View style={styles.con}>
          <Text style={styles.edit}>Edit PetProfile</Text>
        </View>
        <View style={imageUploaderStyles.container}>
          {pet.petProfilePic && (
            <Image
              source={{ uri: pet.petProfilePic }}
              style={{ width: 200, height: 200 }}
            />
          )}
          <View style={imageUploaderStyles.uploadBtnContainer}>
            <TouchableOpacity
              onPress={addImage}
              style={imageUploaderStyles.uploadBtn}
            >
              <Text>{pet.image ? "Edit" : "Upload"} Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.txtin}>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              value={petname}
              placeholder={pet.petName}
              onChangeText={(petname) => SetpetName(petname)}
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              value={weight}
              placeholder={pet.petWeight}
              onChangeText={(weight) => Setweight(weight)}
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              value={age}
              placeholder={pet.petage}
              onChangeText={(age) => Setage(age)}
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              value={description}
              placeholder={pet.petDescription}
              onChangeText={(description) => Setdescription(description)}
              placeholderTextColor="gray"
            />
          </View>
        </View>

        <TouchableOpacity style={styles.buttoncontainer1} onPress={update}>
          <Text style={styles.buttontext1}>Edit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container2: {
    flex: 1,
    color: "black",
    alignItems: "center",
    backgroundColor: "rgba(253,239,197,1)",
    paddingTop: 50,
    paddingBottom: 300,
  },
  con: {
    backgroundColor: "rgba(253,239,197,1)",
    bottom: 5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  edit: {
    fontSize: 30,
    paddingTop: 10,
    color: "#084594",
    fontWeight: "bold",
  },
  txtin: {
    marginTop: 20,
  },
  inputtext: {
    borderRadius: 9,
    width: 350,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 22,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 10,
    marginRight: -10,
    top: 40,
  },

  buttoncontainer1: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 70,
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

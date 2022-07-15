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
export const UpdateServiceProviderProfile = ({ navigation }) => {
  const [user, Setuser] = useState({});
  const [username, Setname] = useState("");
  const [phone, Setphone] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [nid, Setnid] = useState("");
  const [country, Setcountry] = useState("");
  const [city, Setcity] = useState("");
  const [address, Setaddress] = useState("");
  const [ratePerHour, SetratePerHour] = useState("");
  const [workingHours, Setworking_hours] = useState("");
  const [offDays, Setoff_days] = useState("");
  const [finishingHour, SetfinishingHour] = useState("");
  const [landLine, Setland_line] = useState("");
  const [image, setImage] = useState(null);

  function update() {
    fetch(``, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
      });
    }).then;
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
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.container2}>
          <View style={styles.con}>
            <Text style={styles.edit}>Edit Profile</Text>
          </View>
          <View style={imageUploaderStyles.container}>
            {user.image && (
              <Image
                source={{ uri: user.image }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <View style={imageUploaderStyles.uploadBtnContainer}>
              <TouchableOpacity
                onPress={addImage}
                style={imageUploaderStyles.uploadBtn}
              >
                <Text>{user.image ? "Edit" : "Upload"} Image</Text>
                <AntDesign name="camera" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.txtin}>
            <View style={styles.input}>
              <TextInput
                style={styles.inputtext}
                value={user.username}
                placeholder="Enter Name"
                onChangeText={(username) => Setname(username)}
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputtext}
                placeholder="Enter PhoneNumber"
                value={user.phone}
                onChangeText={(phone) => Setphone(phone)}
                keyboardType="numeric"
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputtext}
                placeholder="Enter Email"
                value={user.email}
                onChangeText={(email) => Setemail(email)}
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputtext}
                placeholder="Enter Password"
                value={user.password}
                onChangeText={(password) => Setpassword(password)}
                secureTextEntry={true}
                placeholderTextColor="gray"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                style={styles.inputtext}
                placeholder="Enter National ID"
                value={user.nid}
                onChangeText={(Nid) => Setnid(Nid)}
                keyboardType="numeric"
                placeholderTextColor="gray"
              />
            </View>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter Country"
              value={user.country}
              onChangeText={(country) => Setcountry(country)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter City"
              value={user.city}
              onChangeText={(city) => Setcity(city)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter Address"
              value={user.address}
              onChangeText={(address) => Setaddress(address)}
              placeholderTextColor="gray"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter RatePerHour"
              //value ={user.address}
              onChangeText={(ratePerHour) => Setaddress(ratePerHour)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter WorkingHours"
              // value ={user.address}
              onChangeText={(working_hours) => Setaddress(working_hours)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter OffDays"
              //value ={user.address}
              onChangeText={(off_days) => Setaddress(off_days)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter FinishHours"
              //value ={user.address}
              onChangeText={(finishingHour) => Setaddress(finishingHour)}
              placeholderTextColor="gray"
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter LandLine"
              //value ={user.address}
              onChangeText={(landLine) => Setaddress(landLine)}
              placeholderTextColor="gray"
            />
          </View>
          <TouchableOpacity style={styles.buttoncontainer1} onPress={update}>
            <Text style={styles.buttontext1}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    bottom: 20,
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
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 10,
    marginRight: -10,
  },
  icon1: {
    position: "absolute",
    top: 23,
    left: 5,
  },
  buttoncontainer1: {
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

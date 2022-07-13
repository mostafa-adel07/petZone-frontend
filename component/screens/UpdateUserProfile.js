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
export const UpdateUserProfile = ({ navigation }) => {
  /* const GetDetails=(type)=>{
    if(route.params){
     switch(type){
      case "username":
           return route.params.username
      case "phone":
           return route.params.phone
      case "email":
           return route.params.email
      case "password":
           return route.params.password
      case "nid":
           return route.params.nid
      case "country":
           return route.params.country
      case "city":
           return route.params.city
      case "address":
           return route.params.address
     }
    }
     return ""
  }*/
  /*const data ={username:"tota",phone:"01211566095",email:"tota@gmail.com",password:"1234tota",nid:"12345678912345"
,country:"eygpt",city:"cairo",address:"shoubra"}*/

  const [user, Setuser] = useState({});
  const [id, Setid] = useState(1);
  const [username, Setname] = useState("");
  const [phone, Setphone] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [nid, Setnid] = useState("");
  const [country, Setcountry] = useState("");
  const [city, Setcity] = useState("");
  const [address, Setaddress] = useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/updateMe")
      .then((res) => {
        console.log(res);
        Setuser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function update() {
    let userData = {
      username,
      phone,
      email,
      password,
      nid,
      country,
      city,
      address,
      image,
    };
    axios
      .put("", userData, {
        headers: {
          "Content-Type": "application/json",
          "My-Custom-Header": "foobar",
          Authorization: "Bearer my-token",
        },
      })
      .then(function (response) {
        console.log(response);
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
            <Ionicons
              style={styles.icon1}
              name="people-outline"
              size={24}
              color="gray"
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
            <Feather style={styles.icon1} name="phone" size={24} color="gray" />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputtext}
              placeholder="Enter Email"
              value={user.email}
              onChangeText={(email) => Setemail(email)}
              placeholderTextColor="gray"
            />
            <MaterialCommunityIcons
              style={styles.icon1}
              name="email-outline"
              size={24}
              color="gray"
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
            <MaterialIcons
              style={styles.icon1}
              name="lock-outline"
              size={24}
              color="gray"
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
            <AntDesign
              style={styles.icon1}
              name="idcard"
              size={24}
              color="gray"
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
          <Entypo style={styles.icon1} name="flag" size={24} color="gray" />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter City"
            value={user.city}
            onChangeText={(city) => Setcity(city)}
            placeholderTextColor="gray"
          />
          <MaterialCommunityIcons
            style={styles.icon1}
            name="city"
            size={24}
            color="gray"
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
          <AntDesign style={styles.icon1} name="home" size={24} color="gray" />
        </View>
        <TouchableOpacity style={styles.buttoncontainer1} onPress={update}>
          <Text style={styles.buttontext1}>Update</Text>
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
    paddingHorizontal: 35,
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

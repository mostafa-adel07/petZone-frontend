import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import axios from "axios";

export const Forgetpassword = ({ navigation }) => {
  const [data, setData] = React.useState({
    isValidEmail: true,
  });
  const handleValidus = (val) => {
    let reg = /@./;
    if (val.trim().length >= 4 && reg.test(val) !== false) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  const [email, SetEamil] = useState("");

  async function Login1() {
    let item = { email };
    await axios
      .post("https://petzone99.herokuapp.com/api/v1/users/forgotPassword", item)
      .then(function (response) {
        navigation.navigate("Verificationpasswordcode");
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          alert("There is no user with this email address.");
        } else if (error.response.status === 500) {
          alert("There was an error sending the email. Try again later!");
        }
      });
  }
  function Emilvalidator() {
    if (email == "")
      (emailError) => SetEamilError("emil feild can not be empty");
  }
  return (
    <View style={styles.container}>
      {/* {<Text style={styles.title}>Login</Text>} */}

      <Octicons
        style={styles.icon}
        name="mail-read"
        size={125}
        color="rgba(237,115,84,1)"
      />

      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder=" Email"
          placeholderTextColor="gray"
          value={email}
          onEndEditing={(e) => handleValidus(e.nativeEvent.text)}
          onBlur={Emilvalidator}
          onChangeText={(email) => SetEamil(email)}
        />
      </View>
      {data.isValidEmail ? null : (
        <Text style={{ color: "red" }}> email must have '@' and '.'</Text>
      )}

      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={Login1}
        // onPress={() => navigation.navigate('TypeSignup')}
        /**/
      >
        <Text style={styles.buttontext}>Send Email</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(253,239,197,1)",
  },
  input: {
    flexDirection: "row",
    width: 300,
    marginLeft: 50,
  },
  signupText: {
    paddingRight: 10,
    fontSize: 15,
    marginRight: 10,
  },
  title: {
    color: "black",
    fontSize: 20,
    alignItems: "center",
    marginBottom: 30,
  },

  inputtext: {
    width: 300,
    height: 50,
    //borderColor: "rgb(48, 71, 94)",
    borderWidth: 1,
    paddingHorizontal: 50,
    fontSize: 20,
    // color: "",
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 9,
    borderColor: "white",
    backgroundColor: "white",
    fontWeight: "700",
    color: "gray",

    marginRight: 15,
    marginLeft: -18,
  },
  icon1: {
    position: "absolute",
    top: 18,
    left: 75,
  },
  signuptextCont: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 1,
    flexDirection: "row",
    marginTop: 30,
    color: "black",
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 160,
    height: 50,
    backgroundColor: "rgba(237,115,84,1)",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 50,
    marginRight: 5,
  },
  buttontext: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    right: 30,
    fontWeight: "700",
  },
  logo: {
    height: 128,
    width: 128,
    marginBottom: 30,
  },
});

import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput, Platform } from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const AccountVerfication = ({ navigation }) => {
  const [verifyCode, SetverifyCode] = useState("");

  function confirm() {
    axios
      .patch(
        `https://petzone99.herokuapp.com/api/v1/users/emailVerfication/${verifyCode}`,
        {
          headers: {
            "Content-Type": "application/json",
            "My-Custom-Header": "foobar",
            Authorization: `Bearer ${verifyCode}`,
          },
        }
      )
      .then(function (response) {
        // aro7 feeeeeeeeeeeeeeeeeeeeeen
        navigation.navigate("Drawer1");
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          alert("Token is invalid or has expired ,please login again");
          navigation.navigate("Login");
        }
      });
  }
  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.icon}
        name="domain-verification"
        size={125}
        color="rgba(237,115,84,1)"
      />
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder="Enter VerficationCode"
          onChangeText={(verifyCode) => SetverifyCode(verifyCode)}
          placeholderTextColor="gray"
        />
      </View>
      <TouchableOpacity style={styles.buttoncontainer} onPress={confirm}>
        <Text style={styles.buttontext1}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(253,239,197,1)",
    flex: 1,
  },
  title: {
    color: "black",
    fontSize: 25,
    alignItems: "center",
    paddingBottom: 20,
  },
  view: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 200,
  },
  icon: {
    paddingBottom: -15,
    marginTop: 5,
  },
  input: {
    paddingTop: 5,
  },
  inputtext: {
    borderRadius: 9,
    width: 300,
    height: 40,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    paddingHorizontal: 35,
    fontSize: 15,
    color: "black",
    marginVertical: 10,
  },
  icon1: {
    position: "absolute",
    top: 18,
    left: 5,
  },

  buttoncontainer: {
    borderRadius: 15,
    width: 150,
    height: 40,
    backgroundColor: "rgba(237,115,84,1)",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 5,
    paddingLeft: 60,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    right: 30,
  },
  errormsg: {
    bottom: 5,
    paddingRight: 199,
    color: "red",
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
  },
});

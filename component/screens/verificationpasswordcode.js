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

import axios from "axios";

export const Verificationpasswordcode = ({ navigation }) => {
  const [data, setData] = React.useState({
    isValidCode: true,
  });
  const handleValidus = (val) => {
    let reg = /@./;
    if (val.trim().length >= 4 && reg.test(val) !== false) {
      setData({
        ...data,
        isValidCode: true,
      });
    } else {
      setData({
        ...data,
        isValidCode: false,
      });
    }
  };

  const [emailError, SetEamilError] = useState(true);
  //const passwordError=useState('');

  const [codeverfication, SetCode] = useState("");

  async function Login1() {
    await axios
      .post(
        `https://petzone99.herokuapp.com/api/v1/users/VerifyToken/${codeverfication}`,
        {
          headers: {
            "Content-Type": "application/json",
            "My-Custom-Header": "foobar",
            Authorization: `Bearer ${codeverfication}`,
          },
        }
      )
      .then(function (response) {
        navigation.navigate("Setnewpassword", {
          codeverfication: codeverfication,
        });
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          alert("Token is invalid or has expired ,please go send email again");
          navigation.navigate("Forgetpassword");
        }
      });
  }
  function Emilvalidator() {
    /*if(email=="")
{*/
    (emailError) => SetEamilError("emil feild can not be empty");
    //}
  }

  return (
    <View style={styles.container}>
      {/* {<Text style={styles.title}>Login</Text>} */}
      <MaterialIcons
        style={styles.icon}
        name="domain-verification"
        size={125}
        color="rgba(237,115,84,1)"
      />
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder="Enter code"
          placeholderTextColor="gray"
          value={codeverfication}
          onEndEditing={(e) => handleValidus(e.nativeEvent.text)}
          onBlur={Emilvalidator}
          onChangeText={(codeverfication) => SetCode(codeverfication)}
        />
      </View>

      <TouchableOpacity style={styles.buttoncontainer} onPress={Login1}>
        <Text style={styles.buttontext}>Verify</Text>
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
    marginTop: 15,
    paddingLeft: 60,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    right: 30,
  },
});

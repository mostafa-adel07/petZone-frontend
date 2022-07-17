import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
} from "react-native";
import { TextInput, Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";

export const Setnewpassword = ({ route, navigation }) => {
  const [password, Setpassword] = useState("");
  const [passwordConfirm, SetConfirm_password] = useState("");

  const [data, setData] = React.useState({
    isValidPassword: "",
    isConfirm_password: "",
  });

  const handleValidPassword = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };

  const handelValidConfirm_Password = (val) => {
    if (val !== password || val === "") {
      setData({
        ...data,
        isConfirm_password: false,
      });
    } else {
      setData({
        ...data,
        isConfirm_password: true,
      });
    }
  };
  const { codeverfication } = route.params;
  async function Next() {
    if (data.isValidPassword === true && data.isConfirm_password === true) {
      let item = { password, passwordConfirm };
      const url = `https://petzone99.herokuapp.com/api/v1/users/resetPassword/${codeverfication}`;
      await axios
        .patch(url, item, {
          headers: {
            "Content-Type": "application/json",
            "My-Custom-Header": "foobar",
            Authorization: `Bearer ${codeverfication}`,
          },
        })
        .then(function (response) {
          navigation.navigate("Drawer1");
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            alert(
              "Token is invalid or has expired ,please go send email again"
            );
            navigation.navigate("Forgetpassword");
          }
        });
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder="Enter Password"
          onChangeText={(password) => Setpassword(password)}
          onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
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
      {data.isValidPassword ? null : (
        <View style={styles.error}>
          <Text style={styles.errormsg2}>
            password must be 8 characters long
          </Text>
        </View>
      )}
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder="Confirm Password"
          onChangeText={(confirm_password) =>
            SetConfirm_password(confirm_password)
          }
          onEndEditing={(e) => handelValidConfirm_Password(e.nativeEvent.text)}
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
      {data.isConfirm_password ? null : (
        <View style={styles.error}>
          <Text style={styles.errormsg3}>password did not match</Text>
        </View>
      )}
      <TouchableOpacity style={styles.buttoncontainer} onPress={Next}>
        <Text style={styles.buttontext}>Update Password</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(253,239,197,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
  },
  title: {
    color: "black",
    fontSize: 30,
    alignItems: "center",
    marginTop: 90,
    paddingBottom: 20,
  },
  inputtext: {
    width: 250,
    height: 50,
    //borderColor: "rgb(48, 71, 94)",
    borderWidth: 1,
    paddingHorizontal: 60,
    fontSize: 15,
    // color: "",
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 40,
    backgroundColor: "white",
    fontWeight: "700",
    borderColor: "white",

    marginRight: 15,
    marginLeft: 18,
  },
  errormsg: {
    bottom: 5,
    paddingRight: 199,
    color: "red",
  },
  errormsg1: {
    bottom: 5,
    paddingRight: 120,
    color: "red",
  },
  errormsg2: {
    bottom: 5,
    paddingRight: 0,
    color: "red",
  },
  errormsg3: {
    bottom: 5,
    paddingRight: 0,
    color: "red",
  },
  icon1: {
    position: "absolute",
    top: 18,
    left: 35,
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 200,
    height: 40,
    backgroundColor: "rgba(237,115,84,1)",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 10,
    paddingLeft: 60,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    right: 30,
  },
});

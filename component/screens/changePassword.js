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
import { TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
export const ChangePassword = ({ navigation }) => {
  const [passwordCurrent, SetpasswordCurrent] = useState("");
  const [password, Setpassword] = useState("");
  const [passwordConfirm, SetpasswordConfirm] = useState("");
  function ChangePassword() {
    let item = {
      passwordCurrent: passwordCurrent,
      password: password,
      passwordConfirm: passwordConfirm,
    };

    axios
      .patch(
        "https://petzone99.herokuapp.com/api/v1/users/updateMyPassword",
        item,
        {
          withCredentials: true,
        }
      )
      .then(function (response) {
        alert("updated successfully, please login again!");
        navigation.navigate("Login");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <View style={styles.container2}>
      <View style={styles.con}>
        <Text style={styles.edit}>Edit password</Text>
      </View>

      <View style={styles.txtin}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder={"currentPassword"}
            secureTextEntry={true}
            onChangeText={(currentPassword) =>
              SetpasswordCurrent(currentPassword)
            }
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder={"password"}
            secureTextEntry={true}
            onChangeText={(password) => Setpassword(password)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder={"password confirm"}
            secureTextEntry={true}
            onChangeText={(password) => SetpasswordConfirm(password)}
            placeholderTextColor="gray"
          />
        </View>
        <TouchableOpacity
          style={styles.buttoncontainer1}
          onPress={ChangePassword}
        >
          <Text style={styles.buttontext1}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
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

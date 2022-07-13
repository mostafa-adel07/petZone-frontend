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

export const SignupUser = ({ navigation }) => {
  const [name, SetName] = useState("");
  const [userName, SetUsername] = useState("");
  const [phoneNumber, Setphone] = useState("");
  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");
  const [passwordConfirm, SetConfirm_password] = useState("");
  const [data, setData] = React.useState({
    isValidEmail: "",
    isValidPassword: "",
    isConfirm_password: "",
    isRequiredname: "",
    isRequiredphone: "",
  });
  const handleValidEmail = (val) => {
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
  const handelRequiredName = (val) => {
    if (val !== "") {
      setData({
        ...data,
        isRequiredname: true,
      });
    } else {
      setData({
        ...data,
        isRequiredname: false,
      });
    }
  };
  const handelRequiredPhone = (val) => {
    if (val !== "") {
      setData({
        ...data,
        isRequiredphone: true,
      });
    } else {
      setData({
        ...data,
        isRequiredphone: false,
      });
    }
  };
  function Next() {
    navigation.navigate("SignupUser1", {
      name: name,
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Register Account</Text>
        <Text style={styles.subtitle}>Fill your details blow</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Name"
            onChangeText={(name) => SetName(name)}
            onEndEditing={(e) => handelRequiredName(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
          <Ionicons
            style={styles.icon1}
            name="people-outline"
            size={24}
            color="gray"
          />
        </View>
        {data.isRequiredname ? null : (
          <View style={styles.error}>
            <Text style={styles.errormsg}>Required Input</Text>
          </View>
        )}
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter UserName"
            onChangeText={(userName) => SetUsername(userName)}
            onEndEditing={(e) => handelRequiredName(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
          <Ionicons
            style={styles.icon1}
            name="people-outline"
            size={24}
            color="gray"
          />
        </View>
        {data.isRequiredname ? null : (
          <View style={styles.error}>
            <Text style={styles.errormsg}>Required Input</Text>
          </View>
        )}
        <View>
          {/* <PhoneInput
            style={styles.inputtext}
            defaultCountry="US"
            phoneNumber={phoneNumber}
            onChange={Setphone}
          /> */}

          <TextInput
            style={styles.inputtext}
            placeholder="Enter PhoneNumber"
            onChangeText={(phone) => Setphone(phone)}
            onEndEditing={(e) => handelRequiredPhone(e.nativeEvent.text)}
            keyboardType="numeric"
            placeholderTextColor="gray"
          />
          <Feather style={styles.icon1} name="phone" size={24} color="gray" />
        </View>
        {data.isRequiredphone ? null : (
          <View style={styles.error}>
            <Text style={styles.errormsg}>Required Input</Text>
          </View>
        )}
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Enter Email"
            onChangeText={(email) => Setemail(email)}
            onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
          <MaterialCommunityIcons
            style={styles.icon1}
            name="email-outline"
            size={24}
            color="gray"
          />
        </View>
        {data.isValidEmail ? null : (
          <View style={styles.error}>
            <Text style={styles.errormsg1}>Invalid Email must have @ .</Text>
          </View>
        )}
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
            onEndEditing={(e) =>
              handelValidConfirm_Password(e.nativeEvent.text)
            }
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
            <Text style={styles.errormsg3}>password didnt match</Text>
          </View>
        )}
        <TouchableOpacity style={styles.buttoncontainer} onPress={Next}>
          <Text style={styles.buttontext}>Next</Text>
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
    marginRight: 135,
    bottom: 40,
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
  errormsg: {
    bottom: 5,
    paddingRight: 230,
    color: "red",
  },
  errormsg1: {
    bottom: 5,
    paddingRight: 140,
    color: "red",
  },
  errormsg2: {
    bottom: 5,
    paddingRight: 80,
    color: "red",
  },
  errormsg3: {
    bottom: 5,
    paddingRight: 175,
    color: "red",
  },
  icon1: {
    position: "absolute",
    top: 18,
    left: 5,
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

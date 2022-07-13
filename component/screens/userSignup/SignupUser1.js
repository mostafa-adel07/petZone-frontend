import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { TextInput, ScrollView } from "react-native";
import Constants from "expo-constants";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const SignupUser1 = ({ route, navigation }) => {
  const [nationalID, Setnid] = useState("");
  const [country, Setcountry] = useState("");
  const [city, Setcity] = useState("");
  const [address, Setaddress] = useState("");
  const [data1, setData1] = React.useState({
    isValidNational_ID: "",
    isRequiredCountry: "",
    isRequiredCity: "",
    isRequiredAddress: "",
  });
  const { name, userName, phoneNumber, email, password, passwordConfirm } =
    route.params;

  const handleValidNational_ID = (val) => {
    if (val.trim().length == 14 || val.trim().length == 0) {
      setData1({
        ...data1,
        isValidNational_ID: true,
      });
    } else {
      setData1({
        ...data1,
        isValidNational_ID: false,
      });
    }
  };
  const handelRequiredCountry = (val) => {
    if (val === "") {
      setData1({
        ...data1,
        isRequiredCountry: false,
      });
    } else {
      setData1({
        ...data1,
        isRequiredCountry: true,
      });
    }
  };
  const handelRequiredCity = (val) => {
    if (val === "") {
      setData1({
        ...data1,
        isRequiredCity: false,
      });
    } else {
      setData1({
        ...data1,
        isRequiredCity: true,
      });
    }
  };
  const handelRequiredAddress = (val) => {
    if (val === "") {
      setData1({
        ...data1,
        isRequiredAddress: false,
      });
    } else {
      setData1({
        ...data1,
        isRequiredAddress: true,
      });
    }
  };
  function Next() {
    navigation.navigate("SignupUser2", {
      name: name,
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      nationalID: nationalID,
      country: country,
      city: city,
      address: address,
    });
  }
  return (
    <View style={styles.container1}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext1}
          placeholder="Enter National ID (optional)"
          onChangeText={(Nid) => Setnid(Nid)}
          onEndEditing={(e) => handleValidNational_ID(e.nativeEvent.text)}
          keyboardType="numeric"
          placeholderTextColor="gray"
        />
        <AntDesign style={styles.icon1} name="idcard" size={24} color="gray" />
      </View>
      {data1.isValidNational_ID ? null : (
        <View style={styles.error}>
          <Text style={styles.errormsg1}>
            National_ID must be 14 numeric value
          </Text>
        </View>
      )}
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext1}
          placeholder="Enter Country"
          onChangeText={(country) => Setcountry(country)}
          onEndEditing={(e) => handelRequiredCountry(e.nativeEvent.text)}
          placeholderTextColor="gray"
        />
        <Entypo style={styles.icon1} name="flag" size={24} color="gray" />
      </View>

      {data1.isRequiredCountry ? null : (
        <View style={styles.error}>
          <Text style={styles.errormsg}>Reuired Input</Text>
        </View>
      )}
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext1}
          placeholder="Enter City"
          onChangeText={(city) => Setcity(city)}
          onEndEditing={(e) => handelRequiredCity(e.nativeEvent.text)}
          placeholderTextColor="gray"
        />
        <MaterialCommunityIcons
          style={styles.icon1}
          name="city"
          size={24}
          color="gray"
        />
      </View>
      {data1.isRequiredCity ? null : (
        <View style={styles.error}>
          <Text style={styles.errormsg}>Reuired Input</Text>
        </View>
      )}
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext1}
          placeholder="Enter Address"
          onChangeText={(address) => Setaddress(address)}
          onEndEditing={(e) => handelRequiredAddress(e.nativeEvent.text)}
          placeholderTextColor="gray"
        />
        <AntDesign style={styles.icon1} name="home" size={24} color="gray" />
      </View>
      {data1.isRequiredAddress ? null : (
        <View style={styles.error}>
          <Text style={styles.errormsg}>Reuired Input</Text>
        </View>
      )}

      <TouchableOpacity style={styles.buttoncontainer1} onPress={Next}>
        <Text style={styles.buttontext1}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    backgroundColor: "rgba(253,239,197,1)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 60,
  },
  input: {
    flexDirection: "row",
  },
  inputtext1: {
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
  errormsg: {
    bottom: 5,
    paddingRight: 235,
    color: "red",
  },
  errormsg1: {
    bottom: 5,
    paddingRight: 70,
    color: "red",
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

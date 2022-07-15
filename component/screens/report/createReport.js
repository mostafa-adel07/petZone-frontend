import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableRipple,
} from "react-native";
import { Switch, TextInput } from "react-native-paper";
import { Dropdown } from "react-native-element-dropdown";
import Svg, { Ellipse } from "react-native-svg";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
export const CreateReport = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [label, setlabel] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [Category, setCategory] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const data = [{ label: "report", value: "1" }];
  const [userid, setuserid] = useState();
  AsyncStorage.getItem("userid", (err, result) => {
    setuserid(result);
  });
  function report() {
    let item = {
      title: title,
      text: body,
      categories: ["report"],
      owner: userid,
    };
    axios
      .post("https://petzone99.herokuapp.com/api/v1/forums/", item)
      .then((res) => {
        alert("report has been successfully submitted");
        navigation.navigate("Drawer1");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <SafeAreaView style={styles.container1}>
        <View style={styles.header1}>
          <Text style={styles.textheader1}>Create Report</Text>
        </View>
        <View style={styles.text}>
          {/* <Dropdown
            style={[styles.dropdown, isFocus]}
            placeholderStyle={styles.placeholderStyle}
            data={data}
            maxHeight={100}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? " Select Category" : "..."}
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setlabel(item.label);
              setCategory(item.label);
              setIsFocus(false);
            }}
          /> */}
          <TextInput
            style={styles.input}
            label="Enter quetion title "
            mode="outlined"
            onChangeText={(title) => settitle(title)}
          />
          <TextInput
            style={styles.input1}
            label="Enter quetion body"
            mode="outlined"
            onChangeText={(body) => setbody(body)}
          />
          <TouchableOpacity style={styles.buttoncontainer} onPress={report}>
            <Text style={styles.buttontext}>Report</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    //flexDirection:"row",
    marginTop: 30,
  },
  header1: {
    backgroundColor: "rgba(253,239,197,1)",
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  textheader1: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
  },
  text: {
    top: 40,
    left: 10,
  },
  input: {
    top: 40,
    width: 350,
    height: 50,
    top: 10,
    marginLeft: 10,
    marginBottom: 40,
  },
  input1: {
    top: 40,
    width: 350,
    height: 150,
    top: 10,
    marginLeft: 10,
    marginBottom: 30,
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
  dropdown: {
    height: 40,
    width: 350,
    marginLeft: 11,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    top: 10,
    marginBottom: 40,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
});
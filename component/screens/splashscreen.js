import * as React from "react";
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
import { AntDesign } from "@expo/vector-icons";
export const Splashscreen = ({ navigation }) => {
  function start() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.image} />
      <Image
        source={require("../../assets/logotext.png")}
        style={styles.image1}
      />
      <TouchableOpacity style={styles.buttoncontainer} onPress={start}>
        <Text style={styles.buttontext}>Get Started</Text>
        <AntDesign
          name="arrowright"
          size={24}
          color="black"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(253,239,197,1)",
    flex: 1,
  },
  image: {
    width: 660,
    height:400,
    right: 120,
    marginTop: 100
  },
  image1: {
    width: 360,
    height: 70,
    marginLeft: 25,
    bottom: 50,
  },
  icon: {
    color: "white",
    marginLeft: 190,
    bottom: 18,
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 70,
    paddingLeft: 50,
    marginLeft: 35,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
    top: 10,
  },
});

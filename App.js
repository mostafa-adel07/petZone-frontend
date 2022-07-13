import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackSCreen } from "./component/screens/RootStack";
import "react-native-gesture-handler";

export default function App() {
  return (
    <>
      {
        <NavigationContainer>
          <RootStackSCreen />
        </NavigationContainer>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  input1: {
    flexDirection: "row",
  },
  inputtext1: {
    borderRadius: 9,
    width: 300,
    height: 40,
    borderColor: "#ff00ff",
    borderWidth: 1,
    paddingHorizontal: 35,
    fontSize: 30,
    color: "black",
    marginVertical: 10,
  },
  icon1: {
    position: "absolute",
    top: 18,
    left: 5,
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 300,
    height: 45,
    backgroundColor: "#ff00ff",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    right: 30,
  },
});

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
  Animated,
} from "react-native";
import { Switch, TextInput } from "react-native-paper";
import Svg, { Ellipse } from "react-native-svg";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Reports = ({ navigation }) => {
  const [reportinfo1, Setreportinfo] = useState([]);
  const [userid, setuserid] = useState("");
  AsyncStorage.getItem("userid", (err, result) => {
    setuserid(result);
  });

  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/reports")
      .then((res) => {
        Setreportinfo(res.data.reports);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const reports = reportinfo1;
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Reports</Text>
      </View>

      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => {
          navigation.navigate("CreateReport");
        }}
      >
        <Text style={styles.buttontext}>Add your own report</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <FlatList
          data={reports}
          renderItem={({ item }) => {
            return (
              <Card style={styles.card}>
                <Card.Cover
                  key={item._id}
                  style={styles.cover}
                  source={{ uri: item.ProfilePicture }}
                />
                <Text style={styles.title1}> {item.userName}</Text>
                <Text style={styles.title1}> {item.title}</Text>
                <Text style={styles.title}> {item.text}</Text>
                <Feather
                  name="message-square"
                  size={28}
                  color="black"
                  style={styles.icon}
                  onPress={() => {
                    navigation.navigate("reportComments", { id: item._id });
                  }}
                />
              </Card>
            );
          }}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    </SafeAreaView>
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
    marginTop: 50,
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
  card: {
    backgroundColor: "white",
    marginBottom: 30,
    marginLeft: "2%",
    width: "95%",
    height: 320,
    borderColor: "white",
    borderRadius: 15,
    //borderStartWidth:2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  title1: {
    paddingBottom: 5,
    marginLeft: 90,
    bottom: 40,
    fontSize: 16,
    color: "#5C7A95",
    fontWeight: "bold",
  },
  title: {
    marginLeft: 20,
    bottom: 10,
    fontSize: 16,
    color: "#5C7A95",
  },
  cover: {
    height: 70,
    width: 70,
    borderRadius: 30,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: 20,
    left: 10,
  },
  comment: {
    right: 70,
    backgroundColor: "#d6d6f3",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    left: 290,
    backgroundColor: "#d6d6f3",
    height: 45,
    width: 60,
    margin: 5,
    paddingLeft: 18,
    paddingTop: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  input: {
    width: 300,
    height: 40,
    top: 10,
    marginLeft: 10,
  },

  buttoncontainer: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#d6d6f3",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 20,
    paddingLeft: 50,
    marginLeft: 30,
  },
  buttontext: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
});

import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
  TouchableRipple,
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { PetList } from "./PetList";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export const SelectedBreedPet = ({ route, navigation }) => {
  const { id } = route.params;
  const [petinfo, setPetInfo] = useState({});
  const [image, SetImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"
  );

  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/pets/" + id)
      .then((res) => {
        setPetInfo(res.data.data.pet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Breed() {
    axios
      .post("", id, {
        headers: {
          Cookie: "cookie1=value; cookie2=value; cookie3=value;",
          "Content-Type": "application/json",
          "My-Custom-Header": "foobar",
        },
        withCredentials: true,
      })
      .then((res) => {
        navigation.navigate("HomeDrawer");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Image
          source={{ uri: image }}
          resizeMode="stretch"
          style={styles.avatar}
        ></Image>
        <Text style={styles.title0}> {petinfo.petName}</Text>

        <Text style={styles.title1}> Gender</Text>
        <Text style={styles.title2}> Type</Text>
        <View style={styles.veiwcard}>
          <Card style={styles.card} onPress={() => {}}>
            <Text style={styles.title}>{petinfo.petage}</Text>
          </Card>

          <Card style={styles.card} onPress={() => {}}>
            <Text style={styles.title}>{petinfo.petGender}</Text>
          </Card>
        </View>
        <Text style={styles.title3}> Age</Text>
        <Text style={styles.title4}> Breed </Text>
        <View style={styles.veiwcard2}>
          <Card style={styles.card} onPress={() => {}}>
            <Text style={styles.title}>{petinfo.petBreed}</Text>
          </Card>

          <Card style={styles.card} onPress={() => {}}>
            <Text style={styles.title}>{petinfo.petType}</Text>
          </Card>
        </View>

        <Text style={styles.descrptiontitle}> Descrption </Text>
        <Text style={styles.descrption}>{petinfo.petDescription}</Text>
      </View>
      <TouchableOpacity style={styles.buttoncontainer1} onPress={Adopt}>
        <Text style={styles.buttontext1}>Adopt</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FDEFC5",
    height: 120,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  textheader: {
    marginTop: 30,
    fontSize: 30,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
  },
  avatar: {
    width: 110,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    left: 0,
    top: 50,
  },
  veiwcard: {
    flexDirection: "row",
    top: -55,
    left: -15,
  },
  veiwcard2: {
    flexDirection: "row",
    top: -115,
    left: -15,
  },
  icon1: {
    position: "absolute",
    top: 28,
    left: 315,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 20,
    marginLeft: "7%",
    width: "43%",
    height: 40,
    borderColor: "white",
    borderRadius: 15,
    top: 125,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
  switch1: {
    top: -114,
    paddingBottom: 0,
    left: -105,
  },
  switchtext: {
    top: -150,
    paddingBottom: 0,
    left: -35,
    paddingLeft: 15,
  },
  title0: {
    fontSize: 25,
    fontWeight: "bold",
    left: -5,
    top: 50,
  },
  descrptiontitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    left: -140,
    marginBottom: 5,
    top: 40,
  },
  descrption: {
    fontSize: 17,
    color: "black",
    top: 40,
    //fontWeight:"bold",
    //left:-125,
    //marginBottom:5,
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 160,
    height: 45,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    top: 520,
    marginLeft: 130,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
  title: { fontWeight: "bold", fontSize: 15, color: "gray", left: 45, top: 5 },

  title1: {
    paddingBottom: 0,
    left: 60,
    top: 120,
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },

  title2: {
    paddingBottom: 25,
    left: 60,
    top: 185,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 13,
    color: "black",
  },

  title3: {
    paddingBottom: 0,
    left: -140,
    top: -20,
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },

  title4: {
    paddingBottom: 25,
    left: -145,
    top: 40,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 13,
    color: "black",
  },
});

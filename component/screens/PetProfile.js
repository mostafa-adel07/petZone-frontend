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
import { Switch } from "react-native-paper";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";

export const PetProfile = ({ route, navigation }) => {
  const [petinfo, Setpetinfo] = useState({});
  const { id } = route.params;

  const [isSwitchOn, setIsSwitchOn] = useState(petinfo.offerBreeding);
  const [isSwitchOn1, setIsSwitchOn1] = useState(petinfo.offerAdoption);
  const [image, SetImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"
  );

  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/pets/" + id)
      .then((res) => {
        Setpetinfo(res.data.data.pet);
        setIsSwitchOn(res.data.data.pet.offerBreeding);
        setIsSwitchOn1(res.data.data.pet.offerAdoption);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function onToggleSwitch() {
    {
      isSwitchOn
        ? axios
            .delete(
              "https://petzone99.herokuapp.com/api/v1/offerBreeding/" + id
            )
            .then((res) => {
              setIsSwitchOn(!isSwitchOn);
            })
            .catch((err) => {
              console.log(err.response.data);
            })
        : axios
            .post("https://petzone99.herokuapp.com/api/v1/offerBreeding/" + id)
            .then((res) => {
              setIsSwitchOn(!isSwitchOn);
            })
            .catch((err) => {
              console.log(err.response.data);
            });
    }
  }

  function onToggleSwitch1() {
    {
      isSwitchOn1
        ? axios
            .delete(
              "https://petzone99.herokuapp.com/api/v1/offerAdoption/" + id
            )
            .then((res) => {
              setIsSwitchOn1(!isSwitchOn1);
            })
            .catch((err) => {
              console.log(err.response.data);
            })
        : axios
            .post("https://petzone99.herokuapp.com/api/v1/offerAdoption/" + id)
            .then((res) => {
              setIsSwitchOn1(!isSwitchOn1);
            })
            .catch((err) => {
              console.log(err.response.data);
            });
    }
  }

  function checkHistoryVacciness() {
    {
      petinfo.historyVaccine == true
        ? navigation.navigate("PetVaccine", { id: id })
        : navigation.navigate("HistoryVaccine", {
            id: id,
            petType: petinfo.petType,
          });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => navigation.navigate("editPetProfile", { id: id })}
        >
          <Text style={styles.buttontext}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttoncontainer1}
          onPress={checkHistoryVacciness}
        >
          <Text style={styles.buttontext1}>history vacciness</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: petinfo.petProfilePic }}
          resizeMode="stretch"
          style={styles.avatar}
        ></Image>
      </View>
      <Text style={styles.title0}> {petinfo.petName}</Text>

      <Text style={styles.title1}> Gender: </Text>
      <Text style={styles.title2}> Type: </Text>
      <View style={styles.veiwcard}>
        <Card style={styles.card} onPress={() => {}}>
          <Text style={styles.title}> {petinfo.petage}</Text>
        </Card>

        <Card style={styles.card} onPress={() => {}}>
          <Text style={styles.title}> {petinfo.petGender}</Text>
        </Card>
      </View>
      <Text style={styles.title3}> Age: </Text>
      <Text style={styles.title4}> Breed: </Text>
      <View style={styles.veiwcard2}>
        <Card style={styles.card} onPress={() => {}}>
          <Text style={styles.title}> {petinfo.petBreed}</Text>
        </Card>

        <Card style={styles.card} onPress={() => {}}>
          <Text style={styles.title}> {petinfo.petType}</Text>
        </Card>
      </View>
      <Text style={styles.descrptiontitle}> Descrption</Text>
      <Text style={styles.descrption}> {petinfo.petDescription}</Text>
      <TouchableOpacity
        style={styles.buttoncontainer11}
        onPress={onToggleSwitch}
      >
        {isSwitchOn ? (
          <Text style={styles.buttontext1}>Cancel Breeding</Text>
        ) : (
          <Text style={styles.buttontext1}>Offer For Breeding</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttoncontainer12}
        // onPress={() => {console.log("rrrrrrrr");}}
        onPress={onToggleSwitch1}
      >
        {isSwitchOn1 ? (
          <Text style={styles.buttontext1}>Cancel Adoption </Text>
        ) : (
          <Text style={styles.buttontext1}>Offer For Adoption</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  header: {
    backgroundColor: "#FDEFC5",
    height: 130,
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
    top: -45,
  },
  veiwcard: {
    flexDirection: "row",
    top: 25,
    left: -15,
  },
  veiwcard2: {
    flexDirection: "row",
    top: -35,
    left: -15,
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 105,
    height: 40,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top: 55,
    left: 120,
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 105,
    height: 40,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    right: 120,
  },

  buttoncontainer11: {
    borderRadius: 15,
    width: 210,
    height: 48,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top: -30,
    left: 80,
  },
  buttoncontainer12: {
    borderRadius: 15,
    width: 210,
    height: 48,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top: -30,
    left: 80,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },

  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
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
    top: 305,
    paddingBottom: 0,
    left: 0,
  },
  switchtext: {
    top: 270,
    paddingBottom: 0,
    left: 60,
    paddingLeft: 15,
    fontWeight: "bold",
  },
  title0: {
    fontSize: 25,
    fontWeight: "bold",
    left: 150,
    top: 70,
    justifyContent: "center",
  },
  descrptiontitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    justifyContent: "center",
    marginBottom: 5,
    top: -25,
  },
  descrption: {
    fontSize: 17,
    color: "black",
    top: -30,
    //fontWeight:"bold",
    left: 6,
    //marginBottom:5,
  },
  title: { fontWeight: "bold", fontSize: 15, color: "gray", left: 60, top: 5 },

  title1: {
    paddingBottom: 0,
    left: 236,
    bottom: -75,
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },

  title2: {
    paddingBottom: 25,
    left: 246,
    bottom: -135,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 13,
    color: "black",
  },

  title3: {
    paddingBottom: 0,
    left: 74,
    bottom: 60,
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },

  title4: {
    paddingBottom: 25,
    left: 70,
    bottom: 0,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 13,
    color: "black",
  },
});

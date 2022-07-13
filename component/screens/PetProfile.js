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
        setIsSwitchOn(petinfo.offerBreeding);
        setIsSwitchOn1(petinfo.offerAdoption);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const offerBreeding = () => {
    axios
      .post("https://petzone99.herokuapp.com/api/v1/offerBreeding/" + id)
      .then((res) => {
        setIsSwitchOn(!isSwitchOn);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const deleteOfferBreeding = () => {
    axios
      .delete("https://petzone99.herokuapp.com/api/v1/offerBreeding/" + id)
      .then((res) => {
        setIsSwitchOn(!isSwitchOn);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onToggleSwitch = () => {
    {
      isSwitchOn ? offerBreeding : deleteOfferBreeding;
    }
  };

  const onToggleSwitch1 = () => {
    {
      isSwitchOn1 ? offerAdoption : deleteOfferAdoption;
    }
  };

  const offerAdoption = () => {
    axios
      .post("https://petzone99.herokuapp.com/api/v1/offerAdoption/" + id)
      .then((res) => {
        setIsSwitchOn1(!isSwitchOn1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const deleteOfferAdoption = () => {
    axios
      .delete("https://petzone99.herokuapp.com/api/v1/offerAdoption/" + id)
      .then((res) => {
        setIsSwitchOn1(!isSwitchOn1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

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
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialIcons
            style={styles.icon1}
            name="notifications-none"
            size={24}
            color="#3D405B"
          />
          <TouchableOpacity style={styles.buttoncontainer}>
            <Text style={styles.buttontext}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttoncontainer1}
            onPress={checkHistoryVacciness}
          >
            <Text style={styles.buttontext1}>history vacciness</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: image }}
            resizeMode="stretch"
            style={styles.avatar}
          ></Image>
          <Text style={styles.title0}> {petinfo.petName}</Text>

          <Text style={styles.title1}> Gender: {petinfo.petGender}</Text>
          <Text style={styles.title2}> Type: {petinfo.petType}</Text>
          <View style={styles.veiwcard}>
            <Card style={styles.card} onPress={() => {}}>
              <Text style={styles.title}>Age: {petinfo.petage}</Text>
            </Card>

            <Card style={styles.card} onPress={() => {}}>
              <Text style={styles.title}>Gender: {petinfo.petGender}</Text>
            </Card>
          </View>
          <Text style={styles.title3}> Age: {petinfo.petage}</Text>
          <Text style={styles.title4}> Breed: {petinfo.petBreed}</Text>
          <View style={styles.veiwcard2}>
            <Card style={styles.card} onPress={() => {}}>
              <Text style={styles.title}>Breed: {petinfo.petBreed}</Text>
            </Card>

            <Card style={styles.card} onPress={() => {}}>
              <Text style={styles.title}>Type: {petinfo.petType}</Text>
            </Card>
          </View>
        </View>
        <View style={styles.container1}>
          <Switch
            style={styles.switch1}
            value={isSwitchOn1}
            onValueChange={onToggleSwitch1}
          />
          <Text style={styles.switchtext}>
            Offer For Adoption {petinfo.petType}
          </Text>
          <Switch
            style={styles.switch1}
            value={isSwitchOn}
            onValueChange={onToggleSwitch}
          />
          <Text style={styles.switchtext}>
            Offer For Breeding {petinfo.petType}
          </Text>
        </View>
        <Text style={styles.descrptiontitle}> Descrption</Text>
        <Text style={styles.descrption}> {petinfo.petDescription}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    top: -5,
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
  buttoncontainer: {
    borderRadius: 15,
    width: 110,
    height: 48,
    backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top: 55,
    left: 120,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },

  buttoncontainer1: {
    borderRadius: 15,
    width: 130,
    height: 50,
    backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    bottom: 10,
    right: 125,
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
    left: -350,
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
    left: -5,
  },
  descrptiontitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    left: -2,
    marginBottom: 5,
    top: 290,
  },
  descrption: {
    fontSize: 17,
    color: "black",
    top: 300,
    //fontWeight:"bold",
    left: 6,
    //marginBottom:5,
  },
  title: { fontWeight: "bold", fontSize: 15, color: "gray", left: 45, top: 5 },

  title1: {
    paddingBottom: 0,
    left: 86,
    bottom: 5,
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },

  title2: {
    paddingBottom: 25,
    left: 86,
    bottom: -52,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 13,
    color: "black",
  },

  title3: {
    paddingBottom: 0,
    left: -94,
    bottom: 140,
    fontWeight: "bold",
    fontSize: 13,
    color: "black",
  },

  title4: {
    paddingBottom: 25,
    left: -95,
    bottom: 84,
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 13,
    color: "black",
  },
});

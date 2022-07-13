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
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { PetList } from "./PetList";
import { ScrollView } from "react-native-gesture-handler";
import { PetProfile } from "./PetProfile";

export const UserProfile = ({ navigation }) => {
  const [user, Setuser] = useState({});
  const [userid, setuserid] = useState("");
  const [image, SetImage] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"
  );
  AsyncStorage.getItem("userid", (err, result) => {
    setuserid(result);
  });

  const [petinfo, Setpetinfo] = useState([]);
  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/users/me")
      .then((res) => {
        Setuser(res.data.currentUser);
        Setpetinfo(res.data.currentUser.POA.childPet);
        console.log(res.data.currentUser);
        console.log(res.data.currentUser.POA.childPet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.personal}>
        <ImageBackground
          source={require("../assets/background5.png")}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <Text style={styles.pageName}>PET OWNER</Text>
            <TouchableOpacity>
              <Ionicons
                style={styles.icon1}
                name="settings-outline"
                size={30}
                color="black"
              />
            </TouchableOpacity>
            <Image
              source={{ uri: image }}
              resizeMode="stretch"
              style={styles.avatar}
            ></Image>

            <Text style={styles.userName}>{user.userName}</Text>
            <Text style={styles.city}>{user.city},</Text>
            <Text style={styles.country}>{user.country}</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.account}>
        <Text style={styles.expanded1}>Personal Details</Text>
        <Card style={styles.mycard}>
          <View style={styles.cardContent}>
            <MaterialIcons name="email" size={32} color="white" />
            <Text style={styles.mytext}> {user.email}</Text>
          </View>
        </Card>

        <Card style={styles.mycard1}>
          <View style={styles.cardContent}>
            <Entypo name="phone" size={32} color="white" />
            <Text style={styles.mytext}>{user.phoneNumber}</Text>
          </View>
        </Card>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => navigation.navigate("PetAccount")}
        >
          <Text style={styles.buttontext}>ADD PET+</Text>
        </TouchableOpacity>
        <Text style={styles.expanded}>{"\n"}My Pets</Text>
      </View>

      <View style={styles.container1}>
        {
          <FlatList
            data={petinfo}
            renderItem={({ item }) => {
              return (
                <Card
                  style={styles.card}
                  onPress={() => {
                    navigation.navigate("PetProfile", { id: item._id });
                  }}
                >
                  <Card.Cover
                    key={item.petName}
                    style={styles.cover}
                    source={{ uri: item.petProfilePic }}
                  />
                  <Text style={styles.title}> {item.petName}</Text>
                  <Text style={styles.title1}> Age: {item.petage}</Text>
                  <Text style={styles.title1}>Type: {item.petType}</Text>
                </Card>
              );
            }}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ padding: 10 }}
          />
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(253,239,197,1)",
    flex: 1,
  },

  container1: {
    //flexDirection:'row'
    flex: 1,
    marginTop: 50,
    marginLeft: 30,
  },
  personal: {
    marginTop: 40,
  },
  settingsList: {
    left: 51,
    height: 408,
    position: "absolute",
    right: 450,
    bottom: 274,
  },
  account: {
    height: 165,
    marginTop: 250,
    marginLeft: 45,
    marginRight: 24,
  },
  expanded: {
    color: "rgba(237,115,84,1)",
    fontSize: 25,
    marginTop: -20,
    fontWeight: "bold",
    left: 105,
  },
  expanded1: {
    color: "rgba(237,115,84,1)",
    fontSize: 22,
    marginTop: 0,
    left: 75,
    fontWeight: "bold",
    top: -30,
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: 0,
  },
  userInfo: {
    top: 70,
    left: 65,
    height: 100,
    position: "absolute",
    right: 451,
    //flexDirection: 'row',
  },
  avatar: {
    width: 110,
    height: 120,
    borderRadius: 100,
    justifyContent: "center",
    left: 85,
    top: -115,
  },
  avatar1: {
    width: 50,
    height: 70,
    borderRadius: 200 / 1,
    borderColor: "white",
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 220,
    height: 40,
    backgroundColor: "rgba(237,115,84,1)",
    paddingTop: 0,
    justifyContent: "center",
    //marginBottom: 55,
    paddingLeft: 60,
    top: 10,
    left: 10,
    flex: 0,
    marginLeft: 40,
  },

  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
    marginTop: 0,
    paddingTop: 0,
  },
  userName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: -115,
    marginLeft: -120,
    left: 210,
  },
  city: {
    marginTop: 0,
    marginBottom: 10,
    marginLeft: -78,
    left: 170,
    fontSize: 15,
    color: "gray",
    //color: 'rgba(237,115,84,1)',
  },
  country: {
    marginTop: 0,
    marginBottom: 10,
    marginLeft: -78,
    left: 215,
    bottom: 31,
    fontSize: 15,
    color: "gray",
    //color: 'rgba(237,115,84,1)',
  },
  ellipseStack: {
    height: 890,
    marginTop: 43,
    marginLeft: -50,
    marginRight: -449,
  },
  pageName: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    marginTop: -99,
    marginLeft: 35,
  },
  mycard: {
    margin: -20,
    paddingBottom: 0,
    width: 325,
    paddingLeft: 5,
    marginLeft: -5,
    backgroundColor: "rgba(237,115,84,1)",
    borderRadius: 20,
  },
  mycard1: {
    marginTop: 30,
    width: 325,
    paddingLeft: 5,
    marginLeft: -5,
    backgroundColor: "rgba(237,115,84,1)",
    borderRadius: 20,
  },
  cardContent: {
    flexDirection: "row",
    padding: 8,
  },
  mytext: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 5,
    color: "white",
  },
  icon1: {
    position: "absolute",
    top: -120,
    left: 280,
  },
  image: {
    top: -40,
    height: 200,
    width: 410,
    flex: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    marginBottom: 30,
    marginRight: 30,
    width: "96%",
    height: 118,
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
  cover: {
    width: "30%",
    height: 118,
    padding: 0,
    backgroundColor: "rgb(250, 219, 216)",
    borderRadius: 7,
    elevation: 5,
  },
  title: {
    paddingBottom: 10,
    marginLeft: 115,
    bottom: 110,
    fontWeight: "bold",
    fontSize: 16,
    color: "#5C7A95",
  },
  title1: {
    paddingBottom: 10,
    marginLeft: 130,
    bottom: 110,
    fontSize: 16,
    color: "#5C7A95",
  },
});

//export default Index;

import React, { useState, useEffect } from "react";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import Device from "expo-device";
import * as Location from "expo-location";
import { MaterialIcons, Entypo, Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-paper";
export const Service = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Services</Text>
      </View>
      <View style={styles.types}>
        <TouchableOpacity
          style={styles.type1}
          onPress={() => {
            navigation.navigate("Bookvet", { userid: userid });
          }}
        >
          <Image
            style={styles.imagestyle}
            source={require("D:/petZone/assets/veterinarian.png")}
          />
          <Text style={styles.txt1}>Book Vet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type1}
          onPress={() => {
            navigation.navigate("Booktrainer");
          }}
        >
          <Image
            style={styles.imagestyle}
            source={require("D:/petZone/assets/dog.png")}
          />
          <Text style={styles.txt1}>Book Trainer</Text>
        </TouchableOpacity>
        <View style={styles.types1}>
          <TouchableOpacity
            style={styles.type2}
            onPress={() => {
              navigation.navigate("Bookpetnanny");
            }}
          >
            <Image
              style={styles.imagestyle}
              source={require("D:/petZone/assets/animal-care.png")}
            />
            <Text style={styles.txt1}>Book PetNanny</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.type2}
            onPress={() => {
              navigation.navigate("BookHotel");
            }}
          >
            <Image
              style={styles.imagestyle}
              source={require("D:/petZone/assets/pet-friendly.png")}
            />
            <Text style={styles.txt1}>Book Hotel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  types: {
    width: 50,
    height: 65,
    flexDirection: "row",
  },
  types1: {
    width: 70,
    height: 70,
    marginTop: 250,
    right: 410,
    flexDirection: "row",
    marginHorizontal: 10,
  },
  type1: {
    backgroundColor: "rgba(253,239,197,1)",
    marginLeft: 15,
    top: 30,
    borderRadius: 5,
    height: 230,
  },
  type2: {
    backgroundColor: "rgba(253,239,197,1)",
    marginLeft: 10,
    top: 30,
    borderRadius: 5,
    height: 240,
    width: 190,
  },
  txt1: {
    color: "#325288",
    marginLeft: 30,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  imagestyle: {
    width: 185,
    height: 170,
    marginRight: 0,
    top: 7,
    resizeMode: "contain",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
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
  icon1: {
    position: "absolute",
    top: 40,
    left: 340,
  },
  card: {
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 0,
    width: 380,
    height: 118,
    borderColor: "white",
    //borderRadius:15,
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
    borderRadius: 10,
    elevation: 5,
  },
  title1: {
    paddingBottom: 10,
    marginLeft: 115,
    bottom: 110,
    fontSize: 16,
    color: "#5C7A95",
    fontWeight: "bold",
  },
});

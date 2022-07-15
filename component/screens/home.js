import React, { useState, useEffect } from "react";

import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";
import {
  MaterialIcons,
  Entypo,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import axios from "axios";

import { NavigationContainer } from "@react-navigation/native";

export const Home = ({ navigation }) => {
  const [datainfo, Setdatainfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/offerAdoption")
      .then((res) => {
        Setdatainfo(res.data.adoptedOffer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Home</Text>
      </View>
      <Text style={styles.txt}>services</Text>
      <View style={styles.services}>
        <TouchableOpacity
          style={styles.type1}
          onPress={() => {
            navigation.navigate("Booktrainer");
          }}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6381/6381356.png",
            }}
          />
          <Text style={styles.txt1}>Trainer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type2}
          onPress={() => {
            navigation.navigate("Bookpetnanny");
          }}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3047/3047827.png",
            }}
          />
          <Text style={styles.txt1}>Pet carer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type3}
          onPress={() => {
            navigation.navigate("Bookvet");
          }}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/760/760909.png",
            }}
          />
          <Text style={styles.txt2}>Vets</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.type4}
          onPress={() => {
            navigation.navigate("BookHotel");
          }}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2649/2649024.png",
            }}
          />
          <Text style={styles.txt2}>Hotels</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.type4}
          onPress={() => {
            navigation.navigate("Forum");
          }}
        >
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/942/942802.png",
            }}
          />
          <Text style={styles.txt2}>Fourms</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <FlatList
          data={datainfo}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <Card
                style={styles.card}
                onPress={() => {
                  navigation.navigate("SelectedAdoptPet", { id: item._id });
                }}
              >
                <Card.Cover
                  key={item._id}
                  style={styles.cover}
                  source={{ uri: item.petProfilePic }}
                />
                <Text style={styles.title}> {item.petName}</Text>
                <Text style={styles.title1}> {item.petBreed}</Text>
                <Text style={styles.title1}> {item.petGender}</Text>
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
  txt: {
    color: "#325288",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  services: {
    width: 50,
    height: 65,
    flexDirection: "row",
  },
  type1: {
    backgroundColor: "rgba(253,239,197,1)",
    marginLeft: 10,
    top: 10,
    borderRadius: 5,
  },
  type2: {
    backgroundColor: "rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type3: {
    backgroundColor: "rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },
  type4: {
    backgroundColor: "rgba(253,239,197,1)",
    marginLeft: 20,
    top: 10,
    borderRadius: 5,
  },

  txt1: {
    color: "#325288",
    marginLeft: 10,
    marginTop: 20,
    fontSize: 11,
    fontWeight: "bold",
  },
  txt2: {
    color: "#325288",
    marginLeft: 15,
    marginTop: 20,
    fontSize: 11,
    fontWeight: "bold",
  },

  imagestyle: {
    width: 60,
    height: 50,
    marginLeft: 2,
    top: 7,
    resizeMode: "contain",
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
  icon: {
    marginLeft: 370,
    marginTop: 50,
  },

  card: {
    backgroundColor: "white",
    marginBottom: 40,
    top: 20,
    marginLeft: "5%",
    width: "42%",
    height: 240,
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
    width: "99%",
    height: 118,
    padding: 0,
    backgroundColor: "rgb(250, 219, 216)",
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    paddingBottom: 10,
    marginLeft: 10,
    top: 20,
    fontWeight: "bold",
    fontSize: 16,
    color: "#5C7A95",
  },
  title1: {
    paddingBottom: 10,
    marginLeft: 11,
    top: 20,
    fontSize: 16,
    color: "#5C7A95",
  },
});

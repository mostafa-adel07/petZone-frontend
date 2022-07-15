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

export const Fourms = ({ navigation }) => {
  const [comment, Setcomment] = useState("");
  const [posts1, setPosts] = useState([]);

  var url = "";
  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function filterTypeCat() {
    url = "?categories=cats";
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + url)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function filterTypeDog() {
    url = "?categories=dogs";
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + url)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function filterTypeVets() {
    url = "?categories=vets";
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + url)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function filterTypePetcarers() {
    url = "?categories=petcarers";
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + url)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function filterTypeTrainers() {
    url = "?categories=trainers";
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + url)
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  function clear() {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/")
      .then((res) => {
        setPosts(res.data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  const posts = posts1;
  return (
    <SafeAreaView style={styles.container1}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Fourms</Text>
      </View>
      <TouchableOpacity
        style={styles.buttoncontainer}
        onPress={() => {
          navigation.navigate("CreateFourm");
        }}
      >
        <Text style={styles.buttontext}>Add your own post</Text>
      </TouchableOpacity>
      <Text style={styles.txt}>Categories</Text>
      <TouchableOpacity style={styles.buttoncontainer1} onPress={clear}>
        <Text style={styles.buttontext1}>All</Text>
      </TouchableOpacity>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.type1} onPress={filterTypeCat}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1818/1818401.png",
            }}
          />
          <Text style={styles.txt1}>Cats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.type2} onPress={filterTypeDog}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://icons.veryicon.com/png/o/animal/pet-icon/dog-24.png",
            }}
          />
          <Text style={styles.txt1}>Dogs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.type3} onPress={filterTypeVets}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/760/760909.png",
            }}
          />
          <Text style={styles.txt2}>Vets</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.type4} onPress={filterTypePetcarers}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3047/3047827.png",
            }}
          />
          <Text style={styles.txt2}>Petcarers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.type4} onPress={filterTypeTrainers}>
          <Image
            style={styles.imagestyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/6381/6381356.png",
            }}
          />
          <Text style={styles.txt2}>Trainers</Text>
        </TouchableOpacity>
      </View>
     
     
      <View style={styles.container}>
        <FlatList
          data={posts}
          renderItem={({ item }) => {
            return (
              <Card style={styles.card}>
                <Card.Cover
                  key={item._id}
                  style={styles.cover}
                  source={{ uri: item.profilePicture }}
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
                    console.log(item._id);
                    navigation.navigate("ForumComments", { id: item._id });
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
    marginTop: 10,
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
    height: 220,
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
    left: 240,
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
  icon1: {
    left: 310,
    backgroundColor: "#d6d6f3",
    height: 40,
    width: 50,
    margin: 5,
    bottom: 35,
    paddingLeft: 15,
    paddingTop: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 300,
    
    height: 50,
    backgroundColor: "#d6d6f3",
    paddingTop: 0,
    justifyContent: "center",
    marginTop: 5,
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
  buttoncontainer1: {
    borderRadius: 15,
    width: 100,
    height: 40,
    backgroundColor: "rgba(253,239,197,1)",
    paddingTop: 1,
    justifyContent: "center",
    top:-30,
    left:-50,
    paddingLeft: 50,
    marginLeft: 295,
  },
  buttontext1: {
    textAlign: "center",
    color: "#325288",
    fontSize: 20,
    right: 30,
    marginLeft: 10,
    fontWeight: "bold",
  },
  txt: {
    color: "#325288",
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  categories: {
    width: 50,
    height: 65,
    top:-20,
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
    marginLeft: 11,
    marginTop: 20,
    fontSize: 10,
    fontWeight: "bold",
  },
  imagestyle: {
    width: 60,
    height: 50,
    marginLeft: 2,
    top: 7,
    resizeMode: "contain",
  },
});

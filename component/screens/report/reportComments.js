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
} from "react-native";
import { TextInput } from "react-native-paper";
import { MaterialIcons, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Card } from "react-native-paper";
import axios from "axios";
export const ReportComments = ({ route }) => {
  const [commentinfo, Setcommentinfo] = useState([]);
  const [comment, Setcomment] = useState("");
  const [userid, setuserid] = useState("");
  const { id } = route.params;

  AsyncStorage.getItem("userid", (err, result) => {
    setuserid(result);
  });

  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + id)
      .then((res) => {
        Setcommentinfo(res.data.data.comments);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  function addComment() {
    let item = {
      commentText: comment,
      commentOwner: userid,
      postID: id,
    };
    console.log(item);
    axios
      .patch("https://petzone99.herokuapp.com/api/v1/forums/addComment", item)
      .then((res) => {

        alert("your comment add successful");
      })
      .catch((err) => {
       console.log(err);
      });
  }
  const Comments = commentinfo;
//const Comments=Comments1.slice(3, 20);
  //console.log("all comments",commentinfo);
  return (
    <>
      <SafeAreaView style={styles.container1}>
        <View style={styles.header1}>
          <Text style={styles.textheader1}>Comments</Text>
        </View>
        <View style={styles.container1}>
          <FlatList
            data={Comments}
            renderItem={({ item }) => {
              //console.log(item.owner.name);
              return (
                <Card style={styles.card}>
                  <Card.Cover
                    key={item._id}
                    style={styles.cover}
                    source={{ uri: item.owner.ProfilePicture }}
                  />

                  <Text style={styles.title1}> {item.owner.name}</Text>
                  <Text style={styles.title1}> {item.title}</Text>
                  <Text style={styles.title}> {item.text}</Text>
                </Card>
              );
            }}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ padding: 10 }}
          />
          <TextInput
            style={styles.input}
            label="write your comment"
            mode="outlined"
            onChangeText={(comment) => Setcomment(comment)}
          />
          <Ionicons
            name="send"
            size={24}
            color="black"
            style={styles.icon1}
            onPress={addComment}
          />
        </View>
      </SafeAreaView>
    </>
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
    marginTop: 30,
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
    left: 280,
    backgroundColor: "#d6d6f3",
    height: 40,
    width: 50,
    margin: 5,
    bottom:35,
    paddingLeft: 15,
    paddingTop: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  input: {
    width: 270,
    height: 40,
    top: 10,
    marginLeft: 10,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 30,
    marginLeft: "2%",
    width: "95%",
    height: 180,
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
});

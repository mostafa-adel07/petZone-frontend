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
import { Card } from "react-native-paper";
import axios from "axios";
export const Comments = ({ route }) => {
  const [commentinfo, Setcommentinfo] = useState([]);

  const { id } = route.params;
  useEffect(() => {
    axios
      .get("https://petzone99.herokuapp.com/api/v1/forums/" + id)
      .then((res) => {
        Setcommentinfo(res.data.data.comments);
        console.log(commentinfo);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const Comments = commentinfo;
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
              return (
                <Card style={styles.card}>
                  <Card.Cover
                    key={item._id}
                    style={styles.cover}
                    // source={{ uri: item.owner.ProfilePicture }}
                  />
                  {/* <Text style={styles.title1}> {item.owner.userName}</Text> */}
                  <Text style={styles.title1}> {item.title}</Text>
                  <Text style={styles.title}> {item.text}</Text>
                </Card>
              );
            }}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ padding: 10 }}
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

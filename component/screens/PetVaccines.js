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
export const PetVaccines = ({ route, navigation }) => {
  const { id } = route.params;
  const vaccine = [
    { vaccineName: "Rabies", vaccineDate: "1M 3D" },
    { vaccineName: "Distemper", vaccineDate: "2M 5D" },
    { vaccineName: "Hepatitis", vaccineDate: "4M 2D" },
    { vaccineName: "Parvovirus", vaccineDate: "0" },
  ];
  const [Vaccieninfo, SetVaccieninfo] = useState(vaccine);
  var string2 = "?_id=" + id;
  axios
    .get("" + string2, {
      headers: {
        Cookie: "cookie1=value; cookie2=value; cookie3=value;",
        Authorization: "Bearer my-token",
      },
      withCredentials: true,
    })
    .then((res) => {
      SetVaccieninfo(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <SafeAreaView style={styles.container1}>
        <View style={styles.header1}>
          <Text style={styles.textheader1}>Pet Vaccines</Text>
        </View>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => {
            navigation.navigate("VaccineDescription", { id: id });
          }}
        >
          <Text style={styles.buttontext}>Add Vaccines</Text>
        </TouchableOpacity>
        <View style={styles.container1}>
          <FlatList
            data={Vaccieninfo}
            renderItem={({ item }) => {
              return (
                <Card style={styles.card}>
                  <Text style={styles.title1}>
                    {" "}
                    VaccineName: {item.vaccineName}
                  </Text>
                  <Text style={styles.title1}>
                    {" "}
                    VaccineDate: {item.vaccineDate}
                  </Text>
                  {item.vaccineDate == "0" ? (
                    <TouchableOpacity style={styles.buttoncontainer1}>
                      <Text style={styles.buttontext1}> yes </Text>
                    </TouchableOpacity>
                  ) : null}
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
  title1: {
    paddingBottom: 10,
    marginLeft: 20,
    bottom: -25,
    fontSize: 16,
    color: "#5C7A95",
    fontWeight: "bold",
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 110,
    height: 35,
    backgroundColor: "#ED7354",
    paddingTop: -1,
    justifyContent: "center",
    bottom: 10,
    marginLeft: 250,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 130,
    height: 48,
    backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    top: 10,
    left: 260,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },
});

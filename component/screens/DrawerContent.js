import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import axios from "axios";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Image
                style={styles.imagestyle1}
                source={require("../../assets/609803.png")}
              />
              
            )}
            label="Home"
            marginLeft={17}
            onPress={() => {
              props.navigation.navigate("Home");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Image
                style={styles.imagestyle}
                source={require("../../assets/4115394.png")}
              />
            )}
            label="Profile"
            marginLeft={17}
            // initialParams={{userid: userid}}
            onPress={() => {
              props.navigation.navigate("UserProfile");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Image
                style={styles.imagestyle}
                source={require("../../assets/5267183.png")}
              />
            )}
            label="Adoption"
            marginLeft={10}
            onPress={() => {
              props.navigation.navigate("AdoptionList");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Image
                style={styles.imagestyle}
                source={require("../../assets/2002537.png")}
              />
            )}
            label="Breeding"
            marginLeft={10}
            onPress={() => {
              props.navigation.navigate("BreedingList");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Image
                style={styles.imagestyle}
                source={require("../../assets/1049357.png")}
              />
            )}
            label="Breed Detection"
            marginLeft={10}
            onPress={() => {
              props.navigation.navigate("BreedDetection");
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Image
                style={styles.imagestyle}
                source={require("../../assets/1062506.png")}
              />
            )}
            label="Report injuired animal"
            marginLeft={15}
            onPress={() => {
              props.navigation.navigate("Report");
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Image
                style={styles.imagestyle}
                source={require("../../assets/3064478.png")}
              />
          )}
          label="change password"
          onPress={() => {
            props.navigation.navigate("ChangePassword");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Image
                style={styles.imagestyle}
                source={require("../../assets/1574351.png")}
              />
          )}
          label="Log Out"
          onPress={() => {
            axios
              .post("https://petzone99.herokuapp.com/api/v1/users/logout")
              .then(function (response) {
                props.navigation.navigate("Login");
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  imagestyle1: {
    width: 35,
    height: 30,
    marginLeft: 2,
    top: 2,
    resizeMode: "contain",
  },
  imagestyle: {
    width: 35,
    height: 40,
    marginLeft: 2,
    top: 2,
    resizeMode: "contain",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 20,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

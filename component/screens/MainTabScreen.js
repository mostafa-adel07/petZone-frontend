import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { UserProfile } from "./UserProfile";
import { Home } from "./home";
import { AdoptionList } from "./AdoptionList";
import { BreedingList } from "./BreedingList";
import { Login } from "./login";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Service, service } from "./services";
const Tab = createBottomTabNavigator();
export const MainTabScreen = ({ props }) => {
  function profile() {
    props.navigation.navigate("UserProfile");
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "transparent",
        },
        headerTransparent: true,
        headerTitle: "",
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          ),
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Tab.Screen
        name="AdoptionList"
        component={AdoptionList}
        options={{
          tabBarLabel: "Adoption",
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.imagestyle1}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/88/88003.png",
              }}
            />
          ),
        }}
        onPress={() => {
          navigation.navigate("AdoptionList");
        }}
      />
      <Tab.Screen
        name="BreedingList"
        component={BreedingList}
        options={{
          tabBarLabel: "Breeding",
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.imagestyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2002/2002490.png",
              }}
            />
          ),
        }}
        //onPress={() => {navigation.navigate('BreedingList')}}
      />
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          ),
        }}
        //onPress={profile}
      />

      <Tab.Screen
        name="Service"
        component={Service}
        options={{
          tabBarLabel: "service",
          tabBarIcon: ({ color, size }) => (
            <Image
              style={styles.imagestyle2}
              source={{
                uri: "https://www.mcicon.com/wp-content/uploads/2021/01/Industrial_Service_1-copy-6.jpg",
              }}
            />
          ),
        }}
        //onPress={() => {navigation.navigate('Service')}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  imagestyle1: {
    width: 30,
    height: 40,
    marginLeft: 2,
    top: 2,
    resizeMode: "contain",
  },
  imagestyle: {
    width: 40,
    height: 40,
    marginLeft: 2,
    top: 2,
    resizeMode: "contain",
  },
  imagestyle2: {
    width: 48,
    height: 50,
    marginLeft: 2,
    top: 2,
    resizeMode: "contain",
  },
});

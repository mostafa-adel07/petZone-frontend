import React, { useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TextInput } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import axios from "axios";

export const Login = ({ navigation }) => {
  const [userid, setuserid] = useState("");
  const [data, setData] = useState({
    isValidEmail: true,
    isValidPassword: true,
  });
  const handleValidus = (val) => {
    let reg = /@./;
    if (val.trim().length >= 4 && reg.test(val) !== false) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  const handleValidus1 = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        isValidPassword: false,
      });
    }
  };

  const [email, SetEamil] = useState("");
  const [password, Setpassword] = useState("");
  function confirm() {
    axios({
      method: "post",
      url: "https://petzone99.herokuapp.com/api/v1/users/verifyEmail",
      data: {
        email,
      },
    })
      .then(function (response) {
        navigation.navigate("AccountVerfication");
      })
      .catch(function (error) {
        if (error.response.status === 404) {
          alert("There is no user with email address.");
        } else if (error.response.status === 500) {
          alert("There was an error sending the email. Try again later!");
        }
      });
  }
  function Login1() {
    if (data.isValidEmail && data.isValidPassword) {
      let item = { password, email };
      axios
        .post("https://petzone99.herokuapp.com/api/v1/users/login", item, {
          withCredentials: true,
        })
        .then(function (response) {
          let userid = response.data.data.user._id;
          AsyncStorage.setItem("userid", userid);

          navigation.navigate("Drawer1");
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            alert("Please provide email and password!");
          } else if (error.response.status === 401) {
            alert("Incorrect email or password");
          } else if (error.response.status === 402) {
            alert("Please active your email ");
            confirm();
          }
        });
    }
  }
  function Emilvalidator() {
    /*if(email=="")
{*/
    (emailError) => SetEamilError("emil feild can not be empty");
    //}
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/picturegogandboy.png")}
      />

      <Text style={styles.WELCOMBACK}> Welcome Back! </Text>
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder="Enter your Email"
          placeholderTextColor="gray"
          value={email}
          onEndEditing={(e) => handleValidus(e.nativeEvent.text)}
          onBlur={Emilvalidator}
          onChangeText={(email) => SetEamil(email)}
        />
        <MaterialCommunityIcons
          style={styles.icon1}
          name="email-outline"
          size={24}
          color="gray"
        />
      </View>
      {data.isValidEmail ? null : (
        <Text style={{ color: "red" }}> email must have '@' and '.'</Text>
      )}
      <View style={styles.input}>
        <TextInput
          style={styles.inputtext}
          placeholder="Enter Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          value={password}
          onEndEditing={(e) => handleValidus1(e.nativeEvent.text)}
          onChangeText={(password) => Setpassword(password)}
        />
        <MaterialIcons
          style={styles.icon1}
          name="lock-outline"
          size={24}
          color="gray"
        />
      </View>
      {data.isValidPassword ? null : (
        <Text style={{ color: "red" }}>
          {" "}
          username must be 8 charactors long.
        </Text>
      )}
      <View style={styles.signuptextCont}>
        <TouchableOpacity onPress={() => navigation.navigate("Forgetpassword")}>
          <Text style={styles.forgetpassword}> Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttoncontainer} onPress={Login1}>
        <Text style={styles.buttontext}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={styles.signupText1}> -- Or Continue with -- </Text>

      <View style={styles.iconsView}>
        <MaterialIcons
          style={styles.icon11}
          name="facebook"
          size={55}
          color="rgba(90,116,139,1)"
        />
        <Ionicons
          style={styles.icon11}
          name="logo-google"
          size={50}
          color="rgba(90,116,139,1)"
        />
      </View>
      <View style={styles.signuptextCont}>
        <Text style={styles.signupText12}> New User ? </Text>

        <TouchableOpacity onPress={() => navigation.navigate("SignupUser")}>
          <Text style={styles.buttontext1}> Creat Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(253,239,197,1)",
    //backdropFilter: "blur(45px)",
  },
  input: {
    flexDirection: "row",
    width: 300,
  },
  signupText: {
    paddingRight: 10,
    fontSize: 15,
    marginRight: 10,
  },
  signupText1: {
    paddingRight: 10,
    fontSize: 15,
    marginRight: 0,
    color: "gray",
  },
  signupText12: {
    paddingRight: 10,
    fontSize: 15,
    marginRight: 60,
    color: "gray",
  },
  title: {
    color: "black",
    fontSize: 20,
    alignItems: "center",
    marginBottom: 30,
  },

  inputtext: {
    borderRadius: 9,
    width: 300,
    height: 45,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 35,
    fontSize: 15,
    color: "black",
    marginVertical: 10,
    backgroundColor: "white",
  },
  icon1: {
    position: "absolute",
    top: 18,
    left: 5,
  },
  signuptextCont: {
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 1,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 135,
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 300,
    height: 45,
    backgroundColor: "rgba(237,115,84,1)",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
  },
  buttontext: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    right: 30,
  },
  buttontext1: {
    textAlign: "center",
    color: "rgb(221, 74, 72)",
    fontSize: 15,
    right: 75,
  },
  forgetpassword: {
    textAlign: "left",
    color: "rgb(221, 74, 72)",
    fontSize: 15,
  },
  logo: {
    height: 250,
    width: 250,
  },
  iconsView: {
    flexDirection: "row",
  },
  WELCOMBACK: {
    color: "rgba(90,116,139,1)",
    fontSize: 25,
    fontWeight: "700",
  },
  icon11: {
    marginRight: 5,
    marginLeft: 5,
  },
});

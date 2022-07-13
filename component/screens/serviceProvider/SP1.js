import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
  StatusBar,
} from "react-native";
import { TextInput, ScrollView } from "react-native";

export const SP1 = ({ route, navigation }) => {
  const [type, Settype] = useState("");
  const [ratePerHour, SetratePerHour] = useState("");
  const [startingHour, SetStartingHour] = useState("");
  const [offDays, Setoff_days] = useState("");
  const [finishingHour, SetfinishingHour] = useState("");
  const [landLine, Setland_line] = useState("");
  const [maxNumberClients, SetMaxNumberClients] = useState("");
  const [data2, setData2] = React.useState({
    isRequiredType: true,
    isRequiredRate: true,
    isRequiredWorking_hours: true,
    isRequiredOff_days: true,
    isRequiredLand_line: true,
  });
  const {
    name,
    userName,
    phoneNumber,
    email,
    password,
    passwordConfirm,
    nationalID,
    address,
    country,
    city,
    role,
    image,
  } = route.params;
  const handelRequiredType = (val) => {
    if (val === "") {
      setData2({
        ...data2,
        isRequiredType: false,
      });
    } else {
      setData2({
        ...data2,
        isRequiredType: true,
      });
    }
  };
  const handelRequiredRate = (val) => {
    if (val === "") {
      setData2({
        ...data2,
        isRequiredRate: false,
      });
    } else {
      setData2({
        ...data2,
        isRequiredRate: true,
      });
    }
  };
  const handelRequiredWorking_hours = (val) => {
    if (val === "") {
      setData2({
        ...data2,
        isRequiredWorking_hours: false,
      });
    } else {
      setData2({
        ...data2,
        isRequiredWorking_hours: true,
      });
    }
  };
  const handelRequiredOff_days = (val) => {
    if (val === "") {
      setData2({
        ...data2,
        isRequiredOff_days: false,
      });
    } else {
      setData2({
        ...data2,
        isRequiredOff_days: true,
      });
    }
  };

  const handelRequiredLand_line = (val) => {
    if (val === "") {
      setData2({
        ...data2,
        isRequiredLand_line: false,
      });
    } else {
      setData2({
        ...data2,
        isRequiredLand_line: true,
      });
    }
  };
  function Next() {
    navigation.navigate("SP2", {
      name: name,
      userName: userName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
      nationalID: nationalID,
      country: country,
      city: city,
      address: address,
      role: role,
      type: type,
      startingHour: startingHour,
      finishingHour: finishingHour,
      maxNumberClients: maxNumberClients,
      offDays: offDays,
      ratePerHour: ratePerHour,
      landLine: landLine,
    });
  }
  return (
    <SafeAreaView style={styles.con1}>
      <ScrollView contentContainerStyle={styles.Container}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter Type"
            onChangeText={(type) => Settype(type)}
            //onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter ratePerHour"
            onChangeText={(ratePerHour) => SetratePerHour(ratePerHour)}
            //onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Starting hour"
            onChangeText={(startingHour) => SetStartingHour(startingHour)}
            //onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>

        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Finishing hour"
            onChangeText={(finishingHour) => SetfinishingHour(finishingHour)}
            // onEndEditing={(e) => handelRequiredWorking_hours(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="max Number of clients"
            onChangeText={(maxNumberClients) =>
              SetMaxNumberClients(maxNumberClients)
            }
            // onEndEditing={(e) => handelRequiredOff_days(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Off Days"
            onChangeText={(off_days) => Setoff_days(off_days)}
            // onEndEditing={(e) => handelRequiredOff_days(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext1}
            placeholder="Enter landLine"
            onChangeText={(landLine) => Setland_line(landLine)}
            // onEndEditing={(e) => handelRequiredType(e.nativeEvent.text)}
            placeholderTextColor="gray"
          />
        </View>

        <TouchableOpacity style={styles.buttoncontainer1} onPress={Next}>
          <Text style={styles.buttontext1}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  con: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  Container: {
    backgroundColor: "rgba(253,239,197,1)",

    alignItems: "center",
    paddingTop: 120,
    paddingBottom: 150,
  },
  input: {
    flexDirection: "row",
  },
  inputtext1: {
    borderRadius: 9,
    width: 350,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: "white",
    marginVertical: 15,
    marginRight: -10,
  },
  errormsg: {
    bottom: 5,
    paddingRight: 240,
    color: "red",
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 350,
    height: 50,
    backgroundColor: "#EA5C2B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 50,
    marginLeft: 10,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    right: 30,
    fontWeight: "bold",
  },
  logo: {
    height: 128,
    width: 128,
  },
});

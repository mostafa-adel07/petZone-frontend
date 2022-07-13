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
import { CheckBox } from "react-native-elements";
import DatePicker from "react-native-datepicker";
import { Card } from "react-native-paper";
import axios from "axios";
//import ReactNativeStyleAttributes from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
export const VaccinesDescription = ({ route }) => {
  const { id } = route.params;

  //const [Vaccieninfo, SetVaccieninfo] = useState([]);
  const Vaccineinfo = [
    { vaccineName: "Rabies", VaccineDate: "1M 3D", Vaccineselected: true },
    { vaccineName: "Distemper", VaccineDate: "2M 5D", Vaccineselected: true },
    { vaccineName: "Hepatitis", VaccineDate: "4M 2D", Vaccineselected: false },
    { vaccineName: "Parvovirus", VaccineDate: "0M 0D", Vaccineselected: false },
  ];
  //const [state, setState] = useState(Vaccineinfo);
  const [state, setState] = useState(Vaccineinfo);
  const Vaccineinfo1 = [
    {
      vaccineName: "Rabies1",
      VaccineDate: "09-10-2021",
      Vaccineselected: true,
      VaccinesDescription1: "ggggggggggg",
    },
    {
      vaccineName: "Distemper1",
      VaccineDate: "09-11-2021",
      Vaccineselected: true,
      VaccinesDescription1: "uuuu",
    },
    {
      vaccineName: "Hepatitis1",
      VaccineDate: "09-12-2021",
      Vaccineselected: false,
      VaccinesDescription1: "bbbb",
    },
    {
      vaccineName: "Parvovirus1",
      VaccineDate: "09-5-2021",
      Vaccineselected: false,
      VaccinesDescription1: "vvvvv",
    },
  ];
  //const [state, setState] = useState(Vaccineinfo);
  const [date, setDate] = useState("09-10-2021");
  const [description, setdescrption] = useState("0000000");
  /*let [Vaccineinfo, setVaccineinfo] = useState(
[
{VaccineName:"Rabies",VaccineDate:"1M 3D",Vaccineselected:true},
{VaccineName:"Distemper",VaccineDate:"2M 5D",Vaccineselected:false},
{VaccineName:"Hepatitis",VaccineDate:"4M 2D",Vaccineselected:false},
{VaccineName:"Parvovirus",VaccineDate:"0M 0D",Vaccineselected:false},
]
  );*/
  // console.log(Vaccineinfo)
  console.log(state1);
  console.log(id);

  const vaccine = [
    {
      _id: "626541fe1935b590ded0fc1a",
      vaccineName: "newVaccine123",
      vaccineDescription: "healthy",
      required: true,
      recurring: true,
      recurringEvery: 3,
      forPets: "Dogs",
    },
    {
      _id: "62654f16a264754b3c508c6f",
      vaccineName: "newVaccine567",
      vaccineDescription: "healthy4",
      required: true,
      recurring: false,
      forPets: "Cats",
    },
    {
      _id: "6265797df9d0ccd3a23648bf",
      vaccineName: "newVacc",
      vaccineDescription: "healthy4",
      required: false,
      recurring: false,
      forPets: "Cats",
    },
    {
      _id: "626579a6f9d0ccd3a23648ca",
      vaccineName: "newVac11c",
      vaccineDescription: "healthy4",
      required: false,
      recurring: false,
      forPets: "Cats",
    },
    {
      _id: "626579a6f9d0ccd3a23648cb",
      vaccineName: "new1Vac11c",
      vaccineDescription: "healthy4",
      required: false,
      recurring: true,
      forPets: "Cats",
    },
  ];
  const [state1, setState1] = useState([]);
  /*const a = []
state1.forEach(v =>{
  v["check"] = false
})
state1.forEach(v=>{
  a.push(v)
})
//console.log("A",a)*/
  console.log("state1", state1);
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
      setState1(res);
    })
    .catch((err) => {
      console.log(err);
    });

  function saveHistory() {
    const arr = [];
    state1.forEach((v) => {
      if (v.check == true) {
        arr.push({ _id: v._id });
      }
    });
    console.log("array", arr);
    axios
      .post("", {
        headers: {
          Cookie: "cookie1=value; cookie2=value; cookie3=value;",
          Authorization: "Bearer my-token",
        },
        withCredentials: true,
        vaccinesID: arr,
        petID: id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <SafeAreaView style={styles.container1}>
        <View style={styles.header1}>
          <Text style={styles.textheader1}> Vaccines Description</Text>
        </View>

        <View style={styles.container1}>
          <FlatList
            data={state1}
            renderItem={({ index }) => {
              return (
                <Card style={styles.card1}>
                  <CheckBox
                    backgroundColor="white"
                    checkedColor="rgb(221,74,72)"
                    style={styles.checkbox1}
                    title={state1[index].vaccineName}
                    checked={state1[index].check}
                    onPress={() => {
                      let temp_state = [...state1];

                      // 2. Make a shallow copy of the element you want to mutate
                      let temp_element = { ...temp_state[index] };
                      // console.log(temp_element)
                      // 3. Update the property you're interested in
                      temp_element.check = !temp_element.check;

                      // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                      temp_state[index] = temp_element;
                      // console.log(temp_state[item])

                      // 5. Set the state to our new copy
                      setState1(temp_state);
                    }}
                  />

                  <TouchableOpacity
                    style={styles.button}
                    // description={state1[index].VaccinesDescription1}
                    onPress={() => {
                      alert(state1[index].vaccineDescription);
                    }}
                    // onPress={() => alert(description)}
                  >
                    <View style={styles.item}>
                      <Text style={styles.text}>
                        {" Details..............."}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              );
            }}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ padding: 10 }}
          />

          <TouchableOpacity
            style={styles.buttoncontainer1}
            onPress={saveHistory}
          >
            <Text style={styles.buttontext1}>Save History</Text>
          </TouchableOpacity>
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
    right: -7,
  },
  textheader2: {
    marginTop: -15,
    fontSize: 20,
    color: "rgb(221,74,72)",
    fontWeight: "bold",
    right: -15,
  },
  card: {
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    height: 58,
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

  card1: {
    backgroundColor: "white",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    height: 58,
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

  checkbox: {
    alignSelf: "center",
  },
  checkbox1: {
    alignSelf: "center",
  },
  card1: {
    backgroundColor: "white",
    marginBottom: 10,
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
  button: {
    backgroundColor: "rgba(253,239,197,1)",
    width: 130,
    height: 40,
    marginLeft: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    top: 5,
    fontWeight: "bold",
  },
  buttoncontainer1: {
    borderRadius: 15,
    width: 160,
    height: 48,
    backgroundColor: "#3D405B",
    paddingTop: 1,
    justifyContent: "center",
    marginTop: 15,
    paddingLeft: 60,
    bottom: 50,
    left: 120,
  },
  buttontext1: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    right: 30,
  },
});

import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet,FlatList,SafeAreaView } from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import axios from "axios";
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';
import { Card } from "react-native-paper";
export const BookTrainer = ({route,navigation}) =>{
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [trainerid,settrainerid] = useState(3);
  /*const vets = [
    {trainerName:"CAP.Claire",trainerDescription:"open for 3 days",ProfilePic:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1656678468~exp=1656679068~hmac=793482d880c3fc9b80cfceedb4bcb42fe065e829939618fe6826488a46fa8bef&w=740"},
    {trainerName:"CAP.Sally",trainerDescription:"open for 2 days",ProfilePic:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1656678468~exp=1656679068~hmac=793482d880c3fc9b80cfceedb4bcb42fe065e829939618fe6826488a46fa8bef&w=740"},
    {trainerName:"CAP.Ali",trainerDescription:"open for 5 days",ProfilePic:"https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1656678468~exp=1656679068~hmac=793482d880c3fc9b80cfceedb4bcb42fe065e829939618fe6826488a46fa8bef&w=740"},
    ];*/

    const trainer2 = {
      "data": [
          {
          "POA": {
              "numberOfPets": 0,
              "childPet": []
          },
          "serviceProvider": {
              "workingHours": {
                  "startingHour": "11:00",
                  "finishingHour": "16:00",
                  "maxNumberClients": 4
              },
              "type": "Vet",
              "rating": 0,
              "offDays": [
                  "Sun",
                  "Mon"
              ],
              "ratePerHour": 15,
              "verificationDocuments": [
                  ""
              ]
          },
          "_id": "6234b36154e254c11243a539",
          "userName": "user2",
          "name": "updated name",
          "email": "email2@gmail.com",
          "profilePicture": "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1656678468~exp=1656679068~hmac=793482d880c3fc9b80cfceedb4bcb42fe065e829939618fe6826488a46fa8bef&w=740",
          "country": "egypt",
          "address": "123 st",
          "city": "cairo",
          "phoneNumber": "1234567890",
          "role": "service provider",
          "verified": false,
          "__v": 0
      },
      {
        "POA": {
            "numberOfPets": 0,
            "childPet": []
        },
        "serviceProvider": {
            "workingHours": {
                "startingHour": "12:00",
                "finishingHour": "17:00",
                "maxNumberClients": 4
            },
            "type": "Vet",
            "rating": 0,
            "offDays": [
                "Sun",
                "Mon"
            ],
            "ratePerHour": 15,
            "verificationDocuments": [
                ""
            ]
        },
        "_id": "0111",
        "userName": "us",
        "name": "updated name",
        "email": "em@gmail.com",
        "profilePicture": "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1656678468~exp=1656679068~hmac=793482d880c3fc9b80cfceedb4bcb42fe065e829939618fe6826488a46fa8bef&w=740",
        "country": "egypt",
        "address": "11 st",
        "city": "kk",
        "phoneNumber": "2121",
        "role": "service provider",
        "verified": false,
        "__v": 0
    }, {
      "POA": {
          "numberOfPets": 0,
          "childPet": []
      },
      "serviceProvider": {
          "workingHours": {
              "startingHour": "15:00",
              "finishingHour": "18:00",
              "maxNumberClients": 4
          },
          "type": "Vet",
          "rating": 0,
          "offDays": [
              "Sun",
              "Mon"
          ],
          "ratePerHour": 15,
          "verificationDocuments": [
              ""
          ]
      },
      "_id": "22",
      "userName": "us2",
      "name": "updated name",
      "email": "emo@gmail.com",
      "profilePicture": "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?t=st=1656678468~exp=1656679068~hmac=793482d880c3fc9b80cfceedb4bcb42fe065e829939618fe6826488a46fa8bef&w=740",
      "country": "egypt",
      "address": "19 st",
      "city": "cii",
      "phoneNumber": "897",
      "role": "service provider",
      "verified": false,
      "__v": 0
  },
         
      ]
  }
  const [trainers,settrainers] = useState(trainer2);

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
      setLocation(location);
    })();
 

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  axios.post('', {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
   location:location
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  axios
  .get("" , {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    withCredentials: true,
  })
  .then((res) => {
    settrainers(res);
  })
  .catch((err) => {
    console.log(err);
  });

  const trainers1  = trainers.data;
  console.log("mm",trainers1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header1}>
        <Text style={styles.textheader1}>Book a trainer</Text>
        <MaterialIcons
          style={styles.icon1}
          name="notifications-none"
          size={30}
          color="#3D405B"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={trainers1}
          renderItem={({ item }) => {
            return  <Card style={styles.card} onPress={()=>navigation.navigate('trainerdetails',{trainerid:item._id})}>
            <Card.Cover
            key={item._id}
            style={styles.cover}
            source={{ uri: item.profilePicture}}
          />
            <Text style={styles.title1}> trainerName: {item.serviceProvider.userName}</Text>
            <Text style={styles.title1}> workingHours from {item.serviceProvider.workingHours.startingHour} to {item.serviceProvider.workingHours.finishingHour},
            offDays is {item.serviceProvider.offDays},
            rateperhour is {item.serviceProvider.ratePerHour} EG </Text>
            </Card>
          }}
          keyExtractor={(item) => item._id}
         
          contentContainerStyle={{ padding: 10 }}
        />
         
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "white",
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
  header1: {
    backgroundColor:"rgba(253,239,197,1)",
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
    position: "absolute",
    top: 40,
    left: 340,
  },
  card: {
    backgroundColor: "white",
    marginTop: 20,
    marginLeft: 0,
    width: 380,
    height: 118,
    borderColor:"white",
    //borderRadius:15,
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
    width: "30%",
    height: 118,
    padding: 0,
    backgroundColor: "rgb(250, 219, 216)",
    borderRadius:10,
    elevation: 5,
  },
  title1: {
    paddingBottom: 10,
    marginLeft: 115,
    bottom: 110,
    fontSize: 16,
    color:"#5C7A95",
    fontWeight:"bold"
  },
});

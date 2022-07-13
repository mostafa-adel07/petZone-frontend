import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, Ionicons,FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { EvilIcons } from '@expo/vector-icons';
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { ScrollView } from 'react-native-gesture-handler';
export const Vetdetails = ({route}) => {
  const {userid} = route.params
  const {vetid} = route.params;
  console.log("vetid",vetid)
  console.log("userid1",userid)
  const [user, Setuser] = useState({});
  const [id, Setid] = useState(1);
  const [username, Setname] = useState('Stan Smith');
  const [phone, Setphone] = useState('12345');
  const [email, Setemail] = useState('abc@abc.com');
  const [image, SetImage] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg'
  );
  const [city, Setcity] = useState('cairo');
  const [country, Setcountry] = useState('Egypt');

  //const [vetinfo, Setvetinfo] = useState([]);
  //const vetdetails = {}
  
  const vetdetails = {
    "data": {
        "_id": "62c2cf68047f2d162b9affab",
        "doctor": "6234b36154e254c11243a539",
        "workingDays": [
            {
                "date": "Thu Jul 05 2022 00:00:00 GMT+0200 (Eastern European Standard Time)",
                "numberOfFreeAppointments": 15,
                "_id": "62c2cf68047f2d162b9affaf"
            },
            {
                "date": "Fri Jul 06 2022 00:00:00 GMT+0200 (Eastern European Standard Time)",
                "numberOfFreeAppointments": 15,
                "_id": "62c2cf68047f2d162b9affb0"
            },
            {
                "date": "Sat Jul 07 2022 00:00:00 GMT+0200 (Eastern European Standard Time)",
                "numberOfFreeAppointments": 15,
                "_id": "62c2cf68047f2d162b9affb1"
            },
            {
                "date": "Sun Jul 8 2022 00:00:00 GMT+0200 (Eastern European Standard Time)",
                "numberOfFreeAppointments": 15,
                "_id": "62c2cf68047f2d162b9affb2"
            },
            {
                "date": "Sat Jul 09 2022 00:00:00 GMT+0200 (Eastern European Standard Time)",
                "numberOfFreeAppointments": 15,
                "_id": "62c2d882ff6963a092eb8268"
            },
            {
                "date": "Sat Jul 09 2022 00:00:00 GMT+0200 (Eastern European Standard Time)",
                "numberOfFreeAppointments": 15,
                "_id": "62c315d82c1a637df98d8b2c"
            }
        ],
        "__v": 0
    },
    "vet": { 
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
}
const [vetinf,setvetinf] = useState(vetdetails)
//console.log("date", new Date(vetdetails.data.workingDays[1].date))
var value = "Thu Jul 05 2022 00:00:00 GMT+0200 (Eastern European Standard Time)";
/*var year = value.substring(0,);
var day = value.substring(0,2);
var month = value.substring(8,10);*/
var date = value.substring(0,10)
//var str = "{day:" + day + ",month:" + month + ",year:" + year + "}";
console.log(date);
const [checkbook,setcheckbook] = useState(true)
const [checkbook1,setcheckbook1] = useState(true)
const [checkbook2,setcheckbook2] = useState(true)
let numpatient2 = vetdetails.data.workingDays[1].numberOfFreeAppointments
let numpatient3 = vetdetails.data.workingDays[2].numberOfFreeAppointments
//console.log(numpatient1)
console.log(numpatient2)
console.log(numpatient3)
function book (){
   
{
  checkbook==true?setcheckbook(false):setcheckbook(true)

}
axios.post('', {
  headers: {
    Cookie: "cookie1=value; cookie2=value; cookie3=value;",
    Authorization: "Bearer my-token",
  },
  
    day: vetdetails.data.workingDays[0]._id,
    doctor: vetdetails.data.doctor,
    patient: userid,

})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
//numpatient1--
console.log("no",vetdetails.data.workingDays[0].numberOfFreeAppointments)
}

function book1 (){
  {
    checkbook1==true?setcheckbook1(false):setcheckbook1(true)
  
  }
  axios.post('', {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    day: vetdetails.data.workingDays[1]._id,
    doctor: vetdetails.data.doctor,
    patient: userid,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function book2 (){
  {
    checkbook2==true?setcheckbook2(false):setcheckbook2(true)
  
  }
  axios.post('', {
    headers: {
      Cookie: "cookie1=value; cookie2=value; cookie3=value;",
      Authorization: "Bearer my-token",
    },
    day: vetdetails.data.workingDays[2]._id,
    doctor: vetdetails.data.doctor,
    patient: userid,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
axios
.get("" + vetid, {
  headers: {
    Cookie: "cookie1=value; cookie2=value; cookie3=value;",
    Authorization: "Bearer my-token",
  },
  withCredentials: true,
})
.then((res) => {
  vetdetails = res
})
.catch((err) => {
  console.log(err);
});



  return (
    <SafeAreaView>
      <View style={styles.container}>
      
            <ImageBackground source={require("../assets/background5.png")}  style={styles.image}>
          <View style={styles.userInfo}>
           <Text style={styles.pageName}>PET OWNER</Text>
          <TouchableOpacity>
            <Ionicons
              style={styles.icon1}
              name="settings-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
            
            
              <Image
                source={{ uri: vetdetails.vet.profilePicture}}
                resizeMode="stretch"
                style={styles.avatar}></Image>

              <Text style={styles.userName}>{vetdetails.vet.userName}</Text>
              <Text style={styles.citycountry}>
                {vetdetails.vet.city}, {vetdetails.vet.country}
                 

              </Text>
           
          </View>

         
          </ImageBackground>
          <Text style = {styles.title1}>  Consultation Fee</Text>
          <Text style = {styles.title2}>  Working Hours </Text>
          <View style={styles.veiwcard}>
 
         <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}> {vetdetails.vet.serviceProvider.ratePerHour} EG </Text>
    </Card>

     <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
      
      <Text style = {styles.title}> {vetdetails.vet.serviceProvider.workingHours.startingHour} : {vetdetails.vet.serviceProvider.workingHours.finishingHour} </Text>
    </Card>
           </View>
             <Text style = {styles.title3}>  Address:</Text>
          <View style={styles.veiwcard2}>
 
         <Card  style={styles.card2} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>{<EvilIcons name="location" size={24} color='rgba(237,115,84,1)' />} {vetdetails.vet.address}</Text>
    </Card>
    </View>
      <View style={styles.veiwcard3}>
 
         <Card  style={styles.card3} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title4}> {vetdetails.data.workingDays[0].date.substring(0,10)}</Text>
    </Card>

     <Card  style={styles.card3} onPress={()=>{console.log("hhhh")}}>
    
      
      <Text style = {styles.title4}>{vetdetails.data.workingDays[1].date.substring(0,10)}</Text>
    </Card>
     <Card  style={styles.card3} onPress={()=>{console.log("hhhh")}}>
    
      
      <Text style = {styles.title4}>{vetdetails.data.workingDays[2].date.substring(0,10)}</Text>
    </Card>
           </View>
             <View style={styles.veiwcard4}>
 
         <Card  style={styles.card4} onPress={book}>
    
     {
       checkbook?<Text style = {styles.title4}>Book</Text>: <Text style = {styles.title4}>Cancel</Text>
     }
      
    </Card>

     <Card  style={styles.card4} onPress={book1}>
     {
       checkbook1?<Text style = {styles.title4}>Book</Text>: <Text style = {styles.title4}>Cancel</Text>
     }
    </Card>
     <Card  style={styles.card4} onPress={book2} >
     {
       checkbook2?<Text style = {styles.title4}>Book</Text>: <Text style = {styles.title4}>Cancel</Text>
     }
    </Card>
           </View>
            <View style={styles.container2} >
                 <Text style={styles.expanded1}>Personal Details</Text>
                 <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                    

                      <MaterialIcons name="email" size={32}color="white" />
                      <Text style={styles.mytext}> {vetdetails.vet.email}</Text>


                            </View>
                            </Card>
                 
               <Card style={styles.mycard1} >
               <View style={styles.cardContent}>
                <Entypo name="phone" size={32}  color="white"/>
                    <Text style={styles.mytext}>{vetdetails.vet.phoneNumber}</Text>
                 </View>
                    </Card>
                </View>
             

          
         



        
      </View>
       
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(253,239,197,1)',
    height:845,

  },

  text:{
    marginLeft:10,
    right:-15,
    bottom:100,
    flexDirection: 'row',
  },
  title5:{
    color: 'rgba(237,115,84,1)',
    fontSize: 22,
    fontWeight: 'bold',
    left:-58,
    marginLeft:98,
  },

  container1: {
    //flexDirection:'row'
   //width: 600,
   // height: 200,
   left:25,
   bottom:-130,
   flex:1,
  },
  container2: {
    //flexDirection:'row'
   // width: 600,
   // height: 200,
   left:25,
   top:-105,
   //flex:1,
  },
  
  ellipse: {
    top: 0,
    left: 0,
    width: 859,
    height: 890,
    position: 'absolute',
  },
  settingsList: {
    left: 51,
    height: 408,
    position: 'absolute',
    right: 450,
    bottom: 274,
  },
  account: {
    height: 165,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24,
  },
  expanded: {
    color: 'rgba(237,115,84,1)',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
     left:105,
  },
  expanded1: {
    color: 'rgba(237,115,84,1)',
    fontSize: 22,
    marginLeft:10,
    left:75,
    fontWeight: 'bold',
    top:50,
    marginBottom:0,
    paddingBottom:0,
    paddingTop:0,
  },
  title:{ fontWeight:"bold", fontSize:19,  color: 'rgba(237,115,84,1)',left:35,top:5,},
  title1:{paddingBottom:0, left:16,top:5, fontWeight:"bold", fontSize:16,color:"#5C7A95"},

 title2:{paddingBottom:25, left:216,bottom:20, fontWeight:"bold",marginBottom:15, fontSize:16,color:"#5C7A95"},
 title3:{paddingBottom:25, left:140,bottom:60, fontWeight:"bold",marginBottom:15, fontSize:16,color:"#5C7A95"},
 title4:{fontWeight:"bold", fontSize:19,  color: 'rgba(237,115,84,1)',left:15,top:5,},
veiwcard: {
flexDirection:"row",
top:-100,
left:-15,

},
veiwcard2: {
//flexDirection:"row",
top:-140,
left:80,

},
veiwcard3: {
flexDirection:"row",
top:-140,
left:80,

},
veiwcard4: {
flexDirection:"row",
top:-130,
left:80,

},
card:{backgroundColor:"white",marginBottom:20, marginLeft:"7%",width:"43%",height:40,borderColor:"white",borderRadius:15,
 shadowColor: "#000",top:50,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 card2:{backgroundColor:"white",marginBottom:20, marginLeft:"0%",left:-50,width:"83%",height:50,borderColor:"white",borderRadius:15,
 shadowColor: "#000",top:50,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 card3:{backgroundColor:"white",marginBottom:20, marginLeft:"4%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
 shadowColor: "#000", top:50,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 card4:{backgroundColor:"white",marginBottom:20, marginLeft:"4%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
 shadowColor: "#000",top:50,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
  userInfo: {

    top: 75,
    left: 87,
    height: 100,
    position: 'absolute',
    right: 451,
    //flexDirection: 'row',
  },
  avatar: {
    width: 110,
    height: 120,
    borderRadius: 100,
    justifyContent: 'center',
     left: 45,
      top: -115,
  },
  avatar1: {
    width: 50,
    height: 70,
    borderRadius: 200 / 1,
    borderColor:"white",
    
  },
  buttoncontainer: {
    borderRadius: 15,
    width: 220,
    height: 40,
   backgroundColor: "rgba(237,115,84,1)",
    paddingTop: 0,
    justifyContent: 'center',
    //marginBottom: 55,
    paddingLeft: 60,
    top: 10,
    left: 10,
    flex: 0,
    marginLeft: 40,
   
  },

  buttontext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    right: 30,
    marginTop: 0,
    paddingTop: 0,
  },
  userName: {
    color: 'black',
    fontWeight:"bold",
    fontSize: 20,
    bottom:5,
    marginTop: -105,
    marginLeft: -115,
    left:190
  },
  citycountry: {
   bottom:6,
    marginLeft: -80,
    left:146,
    fontSize: 14,
    color:"gray"
    //color: 'rgba(237,115,84,1)',
  },
 
  ellipseStack: {
    height: 890,
    marginTop: 43,
    marginLeft: -50,
    marginRight: -449,
  },
  pageName: {
    color: 'rgba(255,255,255,1)',
    fontSize: 24,
    marginTop: -99,
    marginLeft: 35,
  },
  mycard: {
    margin: -20,
    marginTop:20,
    top:60,
    paddingBottom:0,
    width: 325,
    paddingLeft: 6,
    marginLeft: 20,
    backgroundColor: "rgba(237,115,84,1)",
   borderRadius:20,

  },
  mycard1: {
 marginTop: 30,
 top:65,
    width: 325,
    paddingLeft: 5,
    marginLeft: 20,
    backgroundColor: "rgba(237,115,84,1)",
   borderRadius:20,
  },
   mycard2: {
 marginTop: 10,
 top:70,
    width: 325,
    paddingLeft: 5,
    marginLeft: 20,
    backgroundColor: "rgba(237,115,84,1)",
   borderRadius:20,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 8,
  },
  mytext: {
    fontSize: 20,
    marginTop: 3,
    marginLeft: 5,
    color:"white",
    fontWeight:"bold",
  },
  icon1: {
    position: 'absolute',
    top: -120,
    left: 260,
  },
   image: {
       top: -15,
      height: 200,
       width: 410,
      flex: 1,
    justifyContent: "center"
  },
});

//export default Index;
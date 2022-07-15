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
export const Petnannydetails = ({route}) => {
  const {petnannyid} = route.params;
  console.log("petnannyid",petnannyid)
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
const [petnanny1,setpetnanny1] =useState({});
const [rate,setrate] = useState();
const [start,setstart] = useState();
const [finish,setfinish] = useState();

  //const [vetinfo, Setvetinfo] = useState([]);
  //const petnannydetails = {}
  

useEffect(() => {
  axios
    .get("https://petzone99.herokuapp.com/api/v1/users/" + petnannyid)
    .then((res) => {
      setpetnanny1(res.data.user);
      setrate(res.data.user.serviceProvider.ratePerHour);
      setstart(res.data.user.serviceProvider.workingHours.startingHour);
      setfinish(res.data.user.serviceProvider.workingHours.finishingHour);
      console.log("all",res.data.user);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
const petnannydetails = petnanny1;
console.log("rate",rate);
//const starthour = petnannydetails.serviceProvider.workingHours.startingHour;
//const finishhour = petnannydetails.serviceProvider.workingHours.finishingHour;
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
                source={{ uri: petnanny1.profilePicture}}
                resizeMode="stretch"
                style={styles.avatar}></Image>

              <Text style={styles.userName}>{petnanny1.userName}</Text>
              <Text style={styles.citycountry}>
                {petnanny1.city}, {petnanny1.country}
                 

              </Text>
           
          </View>

         
          </ImageBackground>
          <Text style = {styles.title1}>  Consultation Fee</Text>
          <Text style = {styles.title2}>  Working Hours </Text>
          <View style={styles.veiwcard}>
 
         <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}> {rate} EG </Text>
    </Card>

     <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
    
      
      <Text style = {styles.title}> {start} : {finish} </Text>
    </Card>
           </View>
             <Text style = {styles.title3}>  Address:</Text>
          <View style={styles.veiwcard2}>
 
         <Card  style={styles.card2} onPress={()=>{console.log("hhhh")}}>
    
     
      <Text style = {styles.title}>{<EvilIcons name="location" size={24} color='rgba(237,115,84,1)' />} {petnanny1.address}</Text>
    </Card>
    </View>
             <View style={styles.veiwcard4}>
 
           </View>
            <View style={styles.container2} >
                 <Text style={styles.expanded1}>Personal Details</Text>
                 <Card style={styles.mycard}>
                    <View style={styles.cardContent}>
                    

                      <MaterialIcons name="email" size={32}color="white" />
                      <Text style={styles.mytext}> {petnanny1.email}</Text>


                            </View>
                            </Card>
                 
               <Card style={styles.mycard1} >
               <View style={styles.cardContent}>
                <Entypo name="phone" size={32}  color="white"/>
                    <Text style={styles.mytext}>{petnanny1.phoneNumber}</Text>
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
    bottom:80,
    marginBottom:0,
    paddingBottom:0,
    paddingTop:0,
  },
  title:{ fontWeight:"bold", fontSize:19,  color: 'rgba(237,115,84,1)',left:30,top:5,},
  title1:{paddingBottom:0, left:16,bottom:150, fontWeight:"bold", fontSize:16,color:"#5C7A95"},

 title2:{paddingBottom:25, left:216,bottom:175, fontWeight:"bold",marginBottom:15, fontSize:16,color:"#5C7A95"},
 title3:{paddingBottom:25, left:140,bottom:190, fontWeight:"bold",marginBottom:15, fontSize:16,color:"#5C7A95"},
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
 shadowColor: "#000",bottom:100,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 card2:{backgroundColor:"white",marginBottom:20, marginLeft:"0%",left:-50,width:"83%",height:50,borderColor:"white",borderRadius:15,
 shadowColor: "#000",bottom:75,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 card3:{backgroundColor:"white",marginBottom:20, marginLeft:"4%",left:-90,width:"30%",height:40,borderColor:"white",borderRadius:15,
 shadowColor: "#000", bottom:90,
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
    left:188
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
    bottom:80,
    paddingBottom:0,
    width: 325,
    paddingLeft: 6,
    marginLeft: 20,
    backgroundColor: "rgba(237,115,84,1)",
   borderRadius:20,

  },
  mycard1: {
 marginTop: 30,
 bottom:70,
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
       top: -10,
      height: 200,
       width: 410,
      flex: 1,
    justifyContent: "center"
  },
});

//export default Index;
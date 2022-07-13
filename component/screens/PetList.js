import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View,FlatList,TouchableOpacity} from "react-native";
import { Card } from "react-native-paper";
import { Searchbar } from "react-native-paper";

 export const PetList = ({info}) => {
   //console.log(info);
   
  return (
   <Card  style={styles.card} onPress={()=>{console.log("hhhh")}}>
      <Card.Cover key={info.petName} style={styles.cover} source={{ uri: info.petProfilePic }} />
      <Text style ={styles.title}>  {info.petName}</Text>
      <Text style = {styles.title1}>  Age: {info.petage}</Text>
      <Text style = {styles.title2}>Gender: {info.petType}</Text>
    </Card>
 
  );
};

const styles = StyleSheet.create({
 card:{backgroundColor:"white",marginBottom:20, marginLeft:"-3%",width:"58%",height:110,borderColor:"white",borderRadius:15,borderStartWidth:10,
 shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 4.84,

elevation: 5,
 },
 cover:{width:"40%",height:110,padding:0,backgroundColor:"rgb(250, 219, 216)"},
 title:{paddingTop:15, marginLeft:140,bottom:110, fontWeight:"bold",marginBottom:35, fontSize:20, color:"#5C7A95"},
 title1:{paddingBottom:0, marginLeft:146,bottom:140, fontWeight:"bold",marginBottom:15, fontSize:13,color:"#5C7A95"},
 title2:{paddingBottom:25, marginLeft:151,bottom:150, fontWeight:"bold",marginBottom:15, fontSize:13,color:"#5C7A95"},
 buttoncontainer1:
 {
  backgroundColor:"white",
  marginLeft:210,
    marginBottom:-40,
    bottom:70,
  paddingLeft:30,
  justifyContent:"center",
  width:100,
  height:35,
},
buttontext1:
{
  fontSize:17,
  fontWeight:"bold",
  alignContent:"center",
  marginLeft:-3
},
});
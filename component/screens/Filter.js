import React,{useState,useEffect} from "react";
import { StatusBar, StyleSheet, SafeAreaView, Text, View ,FlatList,Button,TouchableOpacity} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { Searchbar } from "react-native-paper";
import {AdoptionList} from './AdoptionList';
export const Filter =()=>{ 
    const {txt1}=route.params
    const[yy,setyy]=useState("app")
  const data = [
    { label:'male', value: '1' },
    { label:'female', value: '2' },
  ];
    const data1 = [
    { label1:'black', value1: '1' },
    { label1:'white', value1: '2' },
    { label1:'brown', value1: '3' },
    { label1:'gray', value1: '4' },
    { label1:'yellow', value1: '5' },
    { label1:'blue', value1: '6' },
    { label1:'pink', value1: '7' },
    { label1:'golden', value1: '8' },
    { label1:'orange', value1: '9' },
    { label1:'silver', value1: '10' },
  ];
//const [searchTerm, SetsearchTerm] = useState("");
const [petGender,setpetGender] = useState("");
const [petColor,setpetColor] = useState("");
const [value, setValue] = useState(null);
const [label, setlabel] = useState("");
const [isFocus, setIsFocus] = useState(false);
const [value1, setValue1] = useState(null);
const [label1, setlabel1] = useState("");
const [isFocus1, setIsFocus1] = useState(false);
const [apply,setapply]=useState(false);
/*const filterdata = searchTerm ? datainfo.filter(val=>
  (val.petType.toLowerCase().includes(searchTerm.toLowerCase()))):label&&label1?datainfo.filter(val=>
  (val.petType.toLowerCase().includes(label.toLowerCase()))&&
  (val.petsex.toLowerCase()==(label1.toLowerCase()))):datainfo;*/

 return(
<SafeAreaView style ={styles.container}> 
<View style={styles.header}>
<Text style={styles.textheader}>Filter</Text>
</View>
        <Dropdown
          style={[styles.dropdown, isFocus ]}
          placeholderStyle={styles.placeholderStyle}
          data={data}
          maxHeight={100}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? ' Select Gender' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setlabel(item.label);
            setpetGender(item.label);
            setIsFocus(false);
          }}
  />
     <Dropdown
          style={[styles.dropdown1, isFocus1 ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          data={data1}
          maxHeight={100}
          paddingTop={50}
          labelField="label1"
          valueField="value1"
          placeholder={!isFocus1 ? ' Select Color' : '...'}
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setValue1(item.value1);
            setlabel1(item.label1);
            setpetColor(item.label1);
            setIsFocus1(false);
          }}
  />
  <TouchableOpacity style = {styles.buttoncontainer1} onPress={Apply}>
  <Text style = {styles.buttontext1}>Apply</Text>
  </TouchableOpacity>
</SafeAreaView>
 ) 
}
 const styles = StyleSheet.create({
 container:{
  flex:1,
  marginTop:30,
  backgroundColor:"rgba(253,239,197,1)", 
},
header:{
  backgroundColor:"#ED7354",
  height:100,
  borderBottomLeftRadius:30,
  borderBottomRightRadius:30,
  alignItems:"center"
},
textheader:{
  marginTop:30,
  fontSize:30,
  color:"white",
  fontWeight:"bold"
},
  buttoncontainer1: {
    borderRadius: 15,
    width: 160,
    height: 45,
    backgroundColor: "#ED7354",
    paddingTop: 1,
    justifyContent: 'center',
    marginTop: 390,
    marginLeft:120,
    paddingLeft: 60,
  },
  buttontext1: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    right: 30,
    fontWeight:'bold'
  },
  dropdown: {
      height: 40,
      width:170,
      marginLeft:18,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      top:160,
      backgroundColor:"white",
     justifyContent: 'space-between',
      paddingHorizontal: 12,
    },
      dropdown1: {
      height: 40,
      width:170,
      marginLeft:230,
      top:120,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      backgroundColor:"white",
      paddingHorizontal: 12,
    },
   });

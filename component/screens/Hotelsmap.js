import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Polyline } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, FlatList,ScrollView } from 'react-native';
import { Card } from "react-native-paper";
import { EvilIcons } from '@expo/vector-icons';
import * as Location from 'expo-location'; 
import MapViewDirections from 'react-native-maps-directions';
//import { PetList } from './petList';
export const Hotelsmap = () =>{
    const [pin, setpin] = useState({latitude:30.0707056,longitude:31.2525958});
    //const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          //console.log(location);
          setpin({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
          })
        })();
      }, []);
   
  console.log(pin)
  
   
      const datainfo = [
        {
          hotelName: 'charlie',
          petType: 'cat',
          petsex: 'male',
          petBreed: 'persian',
          distance: '10',
          rate: '5',
          petColor: 'white',
          hotelProfilePic:
            'https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg',
        latitude:28.0147,
        longitude:29.0155,
        },
        {
          hotelName: 'leo',
          petType: 'dog',
          oetsex: 'male',
          petBreed: 'pug',
          distance: '15',
          rate: '3',
          petColor: 'fawn',
          hotelProfilePic:
            'https://media.istockphoto.com/photos/pug-sitting-and-panting-1-year-old-isolated-on-white-picture-id450709593?k=20&m=450709593&s=612x612&w=0&h=82zzJc3Cz39B6LyrQ_N2b4zXxYzZIEH9aNDZWzrZspg=',
        latitude:32.0107,
        longitude:33.0125,
        },
        
        {
          hotelName: 'simba',
          petType: 'dog',
          petsex: 'male',
          petBreed: 'Labrador Retriever',
          distance: '6',
          rate: '4',
          petColor: 'black',
          hotelProfilePic:
            'https://elevageduverger.ca/wp-content/uploads/2019/12/Mel-and-Jak-24_square.jpg',
        latitude:34.0117,
        longitude:35.0133,
        },
        {
          hotelName: 'luna',
          petType: 'dog',
          petsex: 'female',
          petBreed: 'Maltipoo',
          distance: '20',
          rate: '4',
          petColor: 'brown',
          hotelProfilePic:
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F02%2F23%2Fmaltipoo-on-table-390083464-2000.jpg',
            latitude:26.0156,
            longitude:28.0141,
        },
        {
          hotelName: 'lola',
          petType: 'cat',
          petsex: 'female',
          petBreed: 'Siberian',
          distance: '8',
          rate: '5',
          petColor: 'white',
          hotelProfilePic:
            'https://cf.ltkcdn.net/cats/images/orig/246623-1877x1251-siberian-cat.jpg',
            latitude:25.0186,
            longitude:26.0121,
        },
      ];
      const [coordinates,setcoordinates] = useState([
        {
          latitude:pin.latitude,
          longitude:pin.longitude,
        },
        {
            latitude: 30.1727056,
            longitude: 31.2925958,
        },
      ]);
console.log("y",coordinates[0])


      return (
       
        <View style={styles.container}>
         <View style={styles.header1}>
            <Text style={styles.textheader1}>Map Hotel</Text>
         </View>
         <MapView
            style={styles.map}
            showsUserLocation={true}
            initialCamera={{
        
                center: {latitude:pin.latitude,
                longitude:pin.longitude},
                pitch: 0,
                zoom: 10,
                heading: 0,  
                altitude: 1000,
                    }}
                    
              >
                  

                  <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey='AIzaSyDmDEJGBtpfiJFew29ALiJlNIyNBv5-otg' // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
       
        <Marker coordinate={pin} />
        <Marker coordinate={coordinates[1]} />
      
      </MapView>
                 
            
    <View style={styles.container1}>
        <FlatList
          data={datainfo}
          scrollEnabled={true}
          renderItem={({ item }) => {
            return (
              <Card style={styles.card} onPress={()=>{ let temp_state = [...coordinates];
	
                // 2. Make a shallow copy of the element you want to mutate
                let temp_element = { ...temp_state[1] };
                // console.log(temp_element)
                // 3. Update the property you're interested in
                temp_element.latitude = item.latitude;
                temp_element.longitude = item.longitude;
                
                // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                temp_state[1] = temp_element;
             // console.log(temp_state[item])
                
                // 5. Set the state to our new copy
                setcoordinates( temp_state );}}>
                <Card.Cover
                  key={item.hotelName}
                  style={styles.cover}
                  source={{ uri: item.hotelProfilePic }}
                />
                <Text style={styles.title}>    Name: {item.hotelName}</Text>
                <Text style={styles.title1}> Distance: {item.distance}  KM {<EvilIcons name="location" size={24} color="black" />}</Text>
               
              </Card>
            );
          }}
          keyExtractor={(info) => info.hotelName}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
         
        </View>
      
       
      );
    
      /* return (
        <View style={styles.container}>
          <MapView style={styles.map}
           initialRegion={{
              latitude: 48.864716,
              longitude: 2.349014,
              latitudeDelta: 0.0622,
              longitudeDelta: 0.0121,
            }} />
        </View>
      );*/
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
      container1: {
        flex: 1,
        backgroundColor: '#fff',
        
      },
       header1: {
        backgroundColor:"rgba(253,239,197,1)",
        bottom: 2,
        height: 90,
        width: 410,
        marginTop: 30,
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
          title: {
            paddingBottom: 10,
            marginLeft: 115,
            bottom: 110,
            fontWeight: "bold",
            fontSize: 16,
            color:"#5C7A95"
          },
          title1: {
            paddingBottom: 10,
            marginLeft: 130,
            bottom: 110,
            fontSize: 16,
            color:"#5C7A95"
          },
      map: {
        marginTop:4,
        width: Dimensions.get('window').width,
        height: 400,
      },
    });
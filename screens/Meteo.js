import React , { useState } from 'react'
import {Text,View,TextInput,Button, Alert,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';
import Home from './Home';
import axios from 'axios';

const image = {uri:'https://picsum.photos/1300'};

 const _onPressButton=()=> {
    Alert.alert('You tapped the button!');
  }
  
const Meteo = ({navigation}) => {
  const [ville ,setVille]=useState("");
  const [meteoData,setMeteoData]=useState("null");

  const fetchMeteoData = async ()=>{
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=c3386cfe8ae378d53517515cb2773070&units=metric`);
      setMeteoData(response.data)


    } catch (error) {
      Alert.alert('Error','erreur lors de la recuperation de data');
      console.error('echec de recuperaton de data ');
    }

  };

  return (
    <>
   <View style={{flex:1}}>
    <Text style={{color:'red',textAlign:'center'}}>Page Meteo du jour  </Text>
  
    <TextInput
  style={{
    height: 40,
    width:200,
    marginLeft:100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:9999,
    margin:10,
  }}
placeholder='  Entrez le nom de la ville '
 value={ville}
 onChangeText={text=> setVille(text)}
/>
<Button
        title="Cherche Meteo"
        onPress={fetchMeteoData}
      />
     {meteoData && (
      <View style={{flex:1}}>
        <Text style={{color:'red',textAlign:'center',fontWeight:'bold',fontSize:25}}>Ville :{meteoData?.name}</Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:35}}>Temperature:{meteoData?.main?.temp} </Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:35}}>description:{meteoData?.weather[0]?.description} </Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:35}}>description:{meteoData?.weather[0]?.main} </Text>
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold',fontSize:35}}>icon :{meteoData?.weather[0].icon} </Text>
        <ImageBackground source={image} style={styles.image} resizeMode='cover'>
      <Text style={styles.text}>Wearing the inside aout </Text>
    </ImageBackground>
    </View>
     )} 

<Button
      title="Go to home page "
      onPress={() => navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => navigation.goBack()} />

   </View>

   {/* <TouchableOpacity onPress={_onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
    </TouchableOpacity> */}

   </>
  )
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,  
  },
});
export default Meteo

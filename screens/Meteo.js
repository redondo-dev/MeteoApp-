import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  
} from "react-native";

import axios from "axios";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import WEATHER_API_KEY from '@env'

const image = {uri: 'https://picsum.photos/200/300/?blur'};
const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@4x.png`;

const Meteo = ({ navigation }) => {
  const [ville, setVille] = useState("");
  const [meteoData, setMeteoData] = useState(null);
  const [forecastData, setForecastData] = useState(null); 

  const fetchMeteoData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${WEATHER_API_KEY}&lang=fr&units=metric`
      );
      setMeteoData(response.data);
      console.log(response.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${ville}&appid=${WEATHER_API_KEY}&lang=fr&units=metric`
      );
      setForecastData(forecastResponse.data.list.filter((_, index) => index % 8 === 0));
      console.log(forecastResponse.data.list);
    } catch (error) {
      Alert.alert("Error", "Erreur lors de la récupération des données");
      console.error("Échec de récupération des données", error);
    }
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
  <ImageBackground 
  source={image} 
  resizeMode="cover" 
  style={styles.image}>
   <View contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> Meteo du jour</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le nom de la ville"
            value={ville}
            onChangeText={(text) => setVille(text)}
          />
          <TouchableOpacity style={styles.button} onPress={fetchMeteoData}>
            <Text style={styles.buttonText}>Chercher Meteo</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Forecast", { ville })}
          > */}
            {/* <Text style={styles.buttonText}>Voir les prévisions</Text> */}
          {/* </TouchableOpacity> */}
        </View>
    
      {meteoData && (
        <View style={styles.weatherContainer}>
      <Text 
          style={styles.cityText}> {meteoData.name}</Text>
          <Text style={styles.tempText}>
             {Math.round(meteoData?.main?.temp)}°C
          </Text> 
           <Image
            source={{ uri: getIcon(meteoData.weather[0].icon) }}
            style={styles.weatherIcon}
          />
          <Text style={styles.descText}>
             {meteoData.weather[0].description}
          </Text> 
         
          <Text style={styles.dateText}>{formatDate(meteoData.dt)}</Text>
        
          <View style={styles.additionalInfo}>
            <View style={styles.infoRow}>
              <Icon name="water-percent" size={30} color="#4F8EF7" />
              <Text style={styles.infoText}>
                Humidité : {meteoData.main.humidity}%
              </Text>
            </View>
            <View style={styles.infoRow}>
              <Icon name="weather-windy" size={20} color="#000" />
              <Text style={styles.infoText}>
                Vitesse du vent : {meteoData.wind.speed} m/s
              </Text>
            </View>
          </View>
   
        </View>
     
        
      )}
{forecastData !== null ? (
  
<ScrollView horizontal={true} style={styles.forecastContainer}>
          {forecastData.map((forecast, index) => (
            <View key={index} style={styles.forecastItem}>
             <View style={styles.card}>
              <Text style={styles.dateText}>{formatDate(forecast.dt)}</Text>
              <Image
                source={{ uri: getIcon(forecast?.weather[0]?.icon) }}
                style={styles.forecastIcon}
              />
              <Text style={styles.tempText2}>
                {Math.round(forecast?.main?.temp)}°C
              </Text>
              </View>
            </View>
          ))}
        </ScrollView> 
        
       ) : (
        <Text style={styles.noForecastText}>Aucune prévision disponible</Text>
      )}
    </View>
   
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
   flex:1,
  flexDirection:'column'
   
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  headerContainer: {
    marginBottom: 20, 
  },
  headerText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#4F8EF7",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignSelf: "center",
    elevation:5,
    borderWidth: 2,
    borderColor: 'black', 
    
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  weatherContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  cityText: {
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 80,
  },
  tempText: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 45,
  },
  descText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  dateText: {
    color:"black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5
   
  },
  weatherIcon: {
    width: 200,
    height: 100,
    alignSelf: "center",
  },
  additionalInfo: {
    flexDirection: "row",
    justifyContent:"space-around",
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    
   
  },
  infoText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 5,
  
  },

  forecastContainer: {
     marginTop: 10, 
    // paddingVertical: 20,
  
  },
  forecastItem: {
    alignItems: "center",
    
    
justifyContent: "center",
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    width: 150,
    height:150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  tempText2:{
    fontSize:18,
    fontWeight:'bold',
  },
  forecastIcon: {
    width: 100,
    height: 80,
  },
});

export default Meteo;

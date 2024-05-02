import React from 'react';
import { View, Text, Image, StyleSheet,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FakeData from '../components/FakeData';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Application Météo</Text>
      <Image
        source={{ uri: 'https://media.istockphoto.com/id/868098786/fr/photo/thermom%C3%A8tre-sur-la-neige-indique-des-temp%C3%A9ratures-basses-z%C3%A9ro-basse-temp%C3%A9rature-en-degr%C3%A9s.webp?b=1&s=170667a&w=0&k=20&c=H0oWZROAbr86cjs5VJq-Wo_SQFpksdcRrMdNrhpUXcw=' }}
        resizeMode="cover"
        style={styles.image}
      />

<Button
      title="Go to Meteo  page "
      onPress={() =>
        navigation.navigate('Meteo')
      }
      />
  <FakeData />
    </View>
  
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Home;


   
       
  

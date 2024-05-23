import React from 'react';
import { View, Text, Button, StyleSheet,ImageBackground } from 'react-native';
 const image = {uri: 'https://picsum.photos/200/300/?blur'};
const Home = ({ navigation }) => {
    return (
    <ImageBackground  
     source={image} 
        resizeMode="cover" 
        style={styles.image}>
        <View style={styles.container}>
            <Text style={styles.text}>Bienvenue à la Méteo App de Riad</Text>
            <Button title="Aller à Meteo" onPress={() => navigation.navigate('Meteo')} />
        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
});

export default Home;

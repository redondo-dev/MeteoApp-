import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    full_name:"Matthew Turcotte",
    city:"qui ipsum laboris consequat sunt ad et velit esse labore consequat occaecat commodo",
    temp:"4"

  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    full_name:"Matthew Turcotte",
    city:"qui ipsum laboris consequat sunt ad et velit esse labore consequat occaecat commodo",
    temp:"4"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    full_name:"Judy Schulist",
    city:"amet culpa mollit qui enim veniam mollit fugiat minim consectetur Lorem mollit consectetur est incididunt aliqua cupidatat proident",
    temp:"4"
  },
];

const Item = ({title,full_name,city,temp}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>Full_Name: {full_name}</Text>
    <Text style={styles.subtitle}>City: {city}</Text>
    <Text style={styles.subtitle}>Temp: {temp}</Text>
  </View>
);

const FakeData = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => 
        <Item 
        title={item.title} 
        full_name={item.full_name}
        city={item.city}
        temp={item.temp}


        />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    elevation:5,
    color:'red',
  },
  subtitle: {
    fontSize: 32,
    elevation:5,
    color:'white',
    gap:1,
    
  },
});

export default FakeData;
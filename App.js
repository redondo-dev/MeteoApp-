import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import Meteo from './screens/Meteo'; 



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home"component={Home}options={{title: 'Welcome'}} />
      <Stack.Screen name="Meteo" component={Meteo} /> 
    
    </Stack.Navigator>
  </NavigationContainer>
  );
}


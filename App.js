import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { StyleSheet, Text, View } from 'react-native';
import {Home, Rest, OrderDelivery} from './screens';
import Tabs from './navigation/tabs';


const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName={'Home'}
        >
        <Stack.Screen name='Home' component={Tabs}/>
        <Stack.Screen name='Restaurant' component={Rest}/>
        <Stack.Screen name='Order Delivery' component={OrderDelivery}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;


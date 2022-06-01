import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "./src/pages/Home/Home";
import FoodDetail from "./src/pages/FoodDetail/FoodDetail";
const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="FoodDetailScreen" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "./src/pages/Home/Home";
import FoodDetail from "./src/pages/FoodDetail/FoodDetail";
import SignUp from "./src/pages/SignUp/SignUp";
import { StatusBar } from "react-native";
import colors from "./src/assets/colors/colors";
import Login from "./src/pages/Login/Login";
import UserInfo from "./src/pages/UserInfo/UserInfo";
const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={colors.pink} />
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="UserInfoPage" component={UserInfo} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="FoodDetailScreen" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
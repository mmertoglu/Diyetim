import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./src/pages/Home/Home";
import FoodDetail from "./src/pages/FoodDetail/FoodDetail";
import SignUp from "./src/pages/SignUp/SignUp";
import { StatusBar } from "react-native";
import colors from "./src/assets/colors/colors";
import Login from "./src/pages/Login/Login";
import UserInfo from "./src/pages/UserInfo/UserInfo";
import Profile from "./src/pages/Profile/Profile";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import auth from '@react-native-firebase/auth'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const currentUser = auth().currentUser

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="FoodDetailScreen" component={FoodDetail} />
    </Stack.Navigator>
  )
}

const TabStack = () => {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home'
          }
          if (route.name === 'Profile') {
            iconName = 'user'
          }
          return <FontAwesome name={iconName} color={color} size={24} />
        },
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarActiveBackgroundColor: 'white',
        tabBarStyle: { backgroundColor: 'white' },
        tabBarHideOnKeyboard: true
      })


      }
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

  )
}


const App = () => {
  const [userSession, setUserSession] = React.useState();
  React.useEffect(() => {
    auth().onUserChanged(user => {
      setUserSession(!!user)
    })
  }, [])
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.pink} />
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {!userSession ?
        <>
      <Stack.Screen name="SignUpPage" component={SignUp} />
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="UserInfoPage" component={UserInfo} />
      </> : 
      <Stack.Screen name="TabStack" component={TabStack} /> 
      }
        
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
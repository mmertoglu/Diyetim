import React,{useEffect,useState} from "react";
import {View,Text, FlatList, Alert} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import ParseContent from '../../utils/ParseContent'
import FoodCard from "../../components/FoodCard/FoodCard";
import styles from './WhatEat.style'
import IeatFoodCard from "../../components/IeatFoodCard/IeatFoodCard";
const WhatEat = () => {
    const [foodData,setFoodData] = useState([])
    const [userData,setUserData] = useState([])
    const currentUser = auth().currentUser.email.split('@', 1).toString()
    const newCurrent = currentUser.replace('.', '')
    useEffect(()=> {
        try {
         database().ref('users/'+newCurrent+'/'+'userInfo/').once('value').then(snapshot => {
          setUserData(snapshot.val())
        })
        } catch (error) {
            console.log(error)
        }
        try {
            database().ref('users/'+newCurrent+'/eats').on('value' ,snapshot => {
                const data = snapshot.val();
                const ParsedData = ParseContent(data);
                setFoodData(ParsedData)
            })
        } catch (error) {
            console.log(error)
        }
    },[])

    const BMH = 10 * userData.weight + (6 * userData.height) - (5* userData.age) + 5   
   
    const calorieNeeded = BMH * 1.55
    
   
    
    const sum = parseInt(foodData&& foodData.reduce((accumulator, object) => {
        return accumulator + object.nf_calories;
      }, 0));
   
      const CaloriLeft =  calorieNeeded - sum

     const removeSpecificFood = (foodId) => {
      const filteredList =  foodData.filter(x => x!=foodId)
      setFoodData(filteredList)
      database().ref('users/'+newCurrent+'/eats/'+foodId).remove()
     }

     const renderItem = ({item}) => <IeatFoodCard food={item} goFoodDetail={() => {}} removeSpecificFood={removeSpecificFood} />
    return(
        <View style={styles.container} >
            <Text style={styles.header_text} >What I eat</Text>
            <FlatList
            data={foodData}
            renderItem={renderItem}
            />
            <Text style={styles.footer_text} >Total Calories : {sum}</Text>
            <Text style={styles.footer_text} >Calorie left : {CaloriLeft}</Text>
            {CaloriLeft<0  ? <Text style={{alignSelf:'center',marginTop:5,color:'black'}} >You have exceeded your daily calorie needs</Text>:null}
        </View>
    )
}

export default WhatEat
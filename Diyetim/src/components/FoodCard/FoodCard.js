import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './FoodCard.style'
const FoodCard = ({food}) => {
    return(
        <View style={styles.container} >
           <View style={styles.image_container} >
           <Text
            style={styles.text}
            numberOfLines={1}
            >{food.food_name}</Text>
            <Image 
           source={{uri:food.photo.thumb}}
           style={styles.image}
           />
           </View>
           
           <View style={[styles.inner_container,{width:36}]} >
           <Text>Qty</Text>
           <Text style={{maxWidth:100}} numberOfLines={1}
           >{food.serving_qty}</Text>
           </View>
                <View style={styles.inner_container} >
                <Text>Food</Text>
               
                </View>
                <View style={styles.inner_container} >
                <Text>Calories</Text>
                <Text
                numberOfLines={1}
                style={{maxWidth:60}}
                >{food.nf_calories}</Text>
                </View>
                <View style={styles.inner_container}>
                <Text>Brand</Text>
                <Text
                  numberOfLines={1}
                  style={{maxWidth:50}}
                >{food.brand_name}</Text>
                </View>
        </View>
    )
}

export default FoodCard
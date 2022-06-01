import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './FoodDetail.style'
const FoodDetail = ({route}) => {
    const {item} = route.params;
    return(
        <View style={styles.container} >
            <View style={styles.image_container} >
            <Image
            style={styles.image}
            source={{uri:item.photo.thumb}}
            resizeMode='contain'
            />
            </View>
            
            <Text>{item.food_name}</Text>
        </View>
    )
}
export default FoodDetail
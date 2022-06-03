import React from "react";
import {View,Text} from 'react-native'
import Input from "../../components/Input/Input";
import styles from './UserInfo.style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const UserInfo = () => {
    return(
        <View style={styles.container} >
            <Text style={styles.text} >Your Name</Text>
            <Input placeholder='text your name...' />
            <Text style={styles.text} >Your Age</Text>
            <Input placeholder='text your age...' />
            <Text style={styles.text} >Your Height</Text>
            <Input placeholder='text your height...' />
            <Text style={styles.text} >Your Weight</Text>
            <Input placeholder='text your weight...' />
            <View style={styles.photo_container} >
            <Text style={[styles.text,{color:'black'}]} >Upload a photo </Text>
            <FontAwesome name="long-arrow-right"  size={20} color='black'/>
            </View>
           
        </View>
    )
}

export default UserInfo
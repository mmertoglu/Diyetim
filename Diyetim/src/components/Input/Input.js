import React from "react";
import {View,Text,TextInput} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import colors from "../../assets/colors/colors";
import styles from './Input.style'
const Input = ({placeholder,iconName,secureTextEntry}) => {
    return(
        <View style={styles.container} >
            <TextInput secureTextEntry={secureTextEntry} placeholder={placeholder} style={styles.input}  />
            <FontAwesome name={iconName} size={24} color={colors.pink} />
        </View>
    )
}

export default Input
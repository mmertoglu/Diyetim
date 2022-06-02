import React from "react";
import {View,Text,TextInput, TouchableOpacity} from 'react-native'
import styles from './SignUp.style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from "../../components/Input/Input";
const SignUp = () => {
    return(
        <View style={styles.container} >
            <View style={styles.header_container} >
            <MaterialCommunityIcons name="food-apple" size={140} color='white' />
            <Text style={styles.header_text} >Diyetim</Text>
            </View>
            <View style={styles.body_container} >
            <Input placeholder='email...' iconName='user'  />
            <Input placeholder='password' iconName='key' secureTextEntry={true} />
            <Input placeholder='re-password' iconName='key' secureTextEntry={true} />
            <TouchableOpacity style={styles.button} >
                <Text style={styles.button_text} >Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity>
            <Text style={styles.have_account_text} >Already have an account?</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp
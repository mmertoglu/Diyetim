import React,{useState} from "react";
import {View,Text,TextInput, TouchableOpacity} from 'react-native'
import styles from './Login.style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from "../../components/Input/Input";
import auth from '@react-native-firebase/auth'
const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')

    const handleSignUp = async () => {
        try {
            await auth().signInWithEmailAndPassword(email,password)
            navigation.navigate('TabStack')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View style={styles.container} >
            <View style={styles.header_container} >
            <MaterialCommunityIcons name="food-apple" size={140} color='white' />
            <Text style={styles.header_text}>Diyetim</Text>
            </View>
            <View style={styles.body_container} >
            <Input placeholder='email...' iconName='user' onChangeText={text => setEmail(text)}  />
            <Input placeholder='password' iconName='key' secureTextEntry={true} onChangeText={text => setPassword(text)} />
            <TouchableOpacity onPress={handleSignUp} style={styles.button} >
                <Text  style={styles.button_text} >Login</Text>
            </TouchableOpacity>
           
            </View>
        </View>
    )
}

export default Login
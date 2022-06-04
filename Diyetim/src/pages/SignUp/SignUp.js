import React,{useState} from "react";
import {View,Text,TextInput, TouchableOpacity} from 'react-native'
import styles from './SignUp.style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Input from "../../components/Input/Input";
import auth from '@react-native-firebase/auth'
const SignUp = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')
    const [repassword,setRepassword] = useState('')

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email,password)
            navigation.navigate('UserInfoPage')
        } catch (error) {
            console.log(error)
        }
    }
    const goLoginPage = () => {
        navigation.navigate('LoginPage')
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
            <Input placeholder='re-password' iconName='key' secureTextEntry={true} onChangeText={text => setRepassword(text)} />
            <TouchableOpacity onPress={handleSignUp} style={styles.button} >
                <Text  style={styles.button_text} >Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goLoginPage}>
            <Text style={styles.have_account_text} >Already have an account?</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp
import React,{useState} from "react";
import {View,Text, TouchableOpacity} from 'react-native'
import Input from "../../components/Input/Input";
import styles from './UserInfo.style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {launchImageLibrary} from 'react-native-image-picker';
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
const UserInfo = ({navigation}) => {
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [age,setAge] = useState('')
    const [height,setHeight] = useState()
    const [weight,setWeight] = useState()
    const currentUser = auth().currentUser.email.replace('.','')
    const newCurrent = currentUser.split('@',1).toString()
    
    const ChangePhoto = () => {
    
        const options = {
            title:'Titlee',
            storageOptions:{
                skipBackup:true,
                path:'images'
            }
        }
       launchImageLibrary(options, response => {
       if(response.didCancel) {
           console.log('user Cancelled')
       }
       else if (response.errorCode) {
           console.log(errorCode0)
       } else {
        const path= response.assets[0].uri
        setImage(path)
       }
       })
    }
    const updateProfile = async () => {
        try {
            const userInfo = {
                name:name,
                age:age,
                height:height,
                weight:weight,
                photo:image
            }
            console.log(newCurrent)
            await database().ref('users/'+newCurrent+'/'+'userInfo/').set(userInfo)
            navigation.navigate('TabStack')
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <View style={styles.container} >
            <Text style={styles.text} >Your Name</Text>
            <Input placeholder='text your name...' onChangeText={(text) => setName(text) } />
            <Text style={styles.text} >Your Age</Text>
            <Input placeholder='text your age...'  onChangeText={(text) => setAge(text)} />
            <Text style={styles.text} >Your Height</Text>
            <Input placeholder='text your height...' onChangeText={(text) => setHeight(text)} />
            <Text style={styles.text} >Your Weight</Text>
            <Input placeholder='text your weight...' onChangeText={(text) => setWeight(text)} />
            <View style={styles.photo_container} >
            <Text style={[styles.text,{color:'black'}]} >Upload a photo </Text>
            <FontAwesome name="long-arrow-right"  size={24} color='black'/>
            <FontAwesome name="photo" size={24} color='black' onPress={ChangePhoto} />
            </View>
            <TouchableOpacity style={styles.button} onPress={updateProfile} >
                <Text style={styles.button_text} >Upload Profile</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default UserInfo
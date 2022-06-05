import React,{useEffect,useState} from "react";
import {View,Text,Image, TouchableOpacity} from 'react-native'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
import styles from './Profile.style'
import WeightLoss from "../../components/WeightLoss/WeightLoss";
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from "../../assets/colors/colors";

        


const Profile = ({navigation}) => {
    const [userData,setUserData] = useState([])
    const [userSession, setUserSession] = useState();
    useEffect(() => {
        
          const currentUser = auth().currentUser.email.split('@',1).toString()
          const newCurrent = currentUser.replace('.','')

         database().ref('users/'+newCurrent+'/'+'userInfo/').once('value').then(snapshot => {
          setUserData(snapshot.val())
        })

      
    },[])


  const goSignOut = async () => {
    try {
      await 
     auth().signOut();
     
    } catch (error) {
      console.log(error)
    }
    
}

     const bodyMassIndex = parseInt(userData.weight/(userData.height*userData.height/10000))
    return(
        <View style={styles.container} >
            <AntDesign name="logout" color={colors.green} onPress={goSignOut} size={40} style={styles.logout_icon}/>
            <View style={styles.image_container}>
            <Image style={styles.image} source={{uri:userData.photo}}/>
            </View>
            <Text style={styles.name_text} >{userData.name} , {userData.age}</Text>
            <View style={styles.line_container}></View>
            <View style={styles.lottie_container} >
            <WeightLoss/>
            </View>
            <View style={styles.result_container} >
            <Text style={styles.result_text} >Your Height : {userData.height}</Text>
            <Text style={styles.result_text} >Your Weight : {userData.weight}</Text>
            <Text style={styles.result_text} >Your Body Mass Index : {bodyMassIndex}</Text>
            </View>
            <View style={styles.line_container} ></View>
            {bodyMassIndex>=20 && bodyMassIndex<=25 ? 
            <Text style={styles.last_result_text} >Your body mass index shows that you have a healthy human body.</Text> : 
            bodyMassIndex<20 ?  
            <Text style={styles.last_result_text} >Your body mass index shows that you are a thin person</Text> :
            bodyMassIndex>25 && bodyMassIndex<30 ? 
            <Text style={styles.last_result_text} >Your body mass index indicates that you are a slightly overweight person.</Text> :
            <Text style={styles.last_result_text} >Your body mass index indicates that you are a overweight person.</Text> 
        }
        <TouchableOpacity style={styles.button} >
          <Text style={styles.button_text} >Update Profile</Text>
        </TouchableOpacity>
            

        </View>
    )
}

export default Profile
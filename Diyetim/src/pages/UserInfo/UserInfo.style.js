import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";
export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.pink
    },
    text:{
        color:'white',
        fontSize:16,
        margin:10
    },
    photo_container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:8,
        elevation:10,
        marginTop:50
    }
})
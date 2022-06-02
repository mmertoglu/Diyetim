import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        backgroundColor: colors.pink,
        alignItems:'center',
        flex:1,
       
    },
    header_text:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        fontStyle:'italic'
    },
    header_container:{
        flex:4,
        alignItems:'center',
        justifyContent:'center'
    },
    body_container:{
        flex:5,
        width:'100%'
    },
    button:{
        backgroundColor:'white',
        marginTop:50,
        margin:10,
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        elevation:10
    },
    button_text:{
        color:colors.pink,
        fontSize:16,
        fontWeight:'bold'
    },
    have_account_text:{
        color:'white',
        textDecorationLine:'underline',
        fontSize:14,
        alignSelf:'center',
        marginTop:60
    }
})
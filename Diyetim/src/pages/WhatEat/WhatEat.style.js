import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";

export default StyleSheet.create({
    container:{
        flex:1,
        padding:10
    },
    header_text:{
        alignSelf:'center',
        marginBottom:20,
        fontSize:24,
        fontWeight:'bold',
        color:colors.green
    },
    footer_text:{
        fontSize:16,
        alignSelf:'center',
        fontWeight:'bold',
        color:colors.pink
    }
})
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
       paddingLeft:10,
       paddingBottom:10,
        marginHorizontal:10,
        borderRadius:8,
        borderBottomWidth:1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
        
    },
    image:{
        height:50,
        width:80,
        backgroundColor:'white'
    },
    text:{
    width:100,
    color:'black',
    fontSize:10
    },
   inner_container:{
       justifyContent:'space-between',
       alignItems:'flex-start',
       width:70,
       padding:5
       
   },
   image_container:{
       justifyContent:'space-between',
       alignItems:'flex-start',
       width:100
   }
})
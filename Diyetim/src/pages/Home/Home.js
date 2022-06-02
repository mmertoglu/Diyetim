import React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native'
import axios from 'axios'
import Config from "react-native-config";
import FoodCard from '../../components/FoodCard/FoodCard'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FoodChoiceLottie from "../../components/FoodChoiceLottie/FoodChoiceLottie";
const Home = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const fetch = async () => {
    try {
      await axios.get(`${Config.API_URL}?query=${search}&common=true&detailed=true`, {
        headers: {
          'x-app-id': "b5846f08",
          'x-app-key': "3ee19ab341a7fae7b2af8c23554673eb",
          'x-remote-user-id': "0"
        }
      }).then((response) => {
        console.log(response.data)
        setData(response.data)
        setLoading(false)
        return response.data;
      })
    } catch (error) {
      if (error.response) {

        console.log(error.response)

      } else if (error.request) {

        console.log(error.request)

      } else if (error.message) {

        console.log(error.message)
      }
    }
  }
  const goFoodDetail = (item) => {
    props.navigation.navigate('FoodDetailScreen', { item })
  }
  const renderItem = ({ item }) => <FoodCard food={item} goFoodDetail={() => goFoodDetail(item)} />
  return (
    <View style={styles.container} >
      <View style={styles.inputcontainer} >
        <TextInput
          autoCapitalize="none"
          style={styles.textinput}
          placeholder="Search food..."
          onChangeText={(text) => setSearch(text)}
        />
        <EvilIcons name="search" color={'gray'} size={30} style={styles.search_icon} onPress={fetch} />
      </View>
      {loading == true ?
        (
          <View style={styles.lottie_container} >
            <Text style={styles.lottie_container_text} >Search for a food to see its nutritional values</Text>
            <FoodChoiceLottie />
          </View>
        )
        :
        <FlatList
          data={data.branded}
          renderItem={renderItem}
        />
      }

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0'
  },
  search_icon: {
    marginRight: 10
  },
  inputcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
    elevation: 10,
    borderRadius: 8,
    margin: 10,
    backgroundColor: 'white'
  },
  lottie_container:{
    flex:1,
  },
  lottie_container_text:{
    alignSelf:'center',
    marginTop:80,
    fontSize:16,
    fontWeight:'bold',
    color:'#fc008b'
  },
  
})
export default Home;
import React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput } from 'react-native'
import axios from 'axios'
import Config from "react-native-config";
import FoodCard from "./src/components/FoodCard/FoodCard";
const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const fetch = async () => {
    try {
      await axios.get(`${Config.API_URL}?query=${search}&common=true`, {
        headers: {
          'x-app-id': "b5846f08",
          'x-app-key': "3ee19ab341a7fae7b2af8c23554673eb",
          'x-remote-user-id': "0"
        }
      }).then((response) => {
        console.log(response.data)
        setData(response.data)
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
 const renderItem = ({item}) => <FoodCard food={item} />
  return (
    <View>
      <Button
        title="fetch"
        onPress={fetch}
      />
      <TextInput
      placeholder="Search food..."
      onChangeText={(text) => setSearch(text)}
      />
      <FlatList
     style={{marginBottom:100}}
    
        data={data.branded}
        renderItem={renderItem}
      />
    </View>
  )
}

export default App;
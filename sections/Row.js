import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    padding:20,
  },
  icon:{
    paddingRight: 10,
  },
})
const Row = props => (
  <TouchableOpacity style={styles.row} onPress={() => {props.navigation.navigate('ContactDetails',{
    name: props.name,
    number: props.phone
  })}}>
  <View style={styles.icon} >
  <Ionicons name="person-circle-outline" color='#051F5F' size={40}/> 
  </View>
  <View>
  
  <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
   
  </View>
  </TouchableOpacity>

  )



export default Row
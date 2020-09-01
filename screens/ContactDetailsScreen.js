import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ContactDetailsScreen({ route, navigation}){
    const { name } = route.params;
    const { number } = route.params;
    return(
        <View style={styles.container}>
        <Ionicons name="person-circle-outline" color='#051F5F' size={150}/>
        <View style={styles.row}>
            <View style={styles.icon}>
                <Ionicons name="person-outline" color='#051F5F' size={30}/>
            </View>
             
                <Text style={styles.text}>Name: {name}</Text>
               
        </View>

        <View style={styles.row}>
            <View style={styles.icon}>
                <Ionicons name="call-outline" color='#051F5F' size={30}/>
            </View>
            
                <Text style={styles.text}>Phone Number: {number}</Text>
            
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding:10,
      },
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    icon:{
        paddingRight: 10,
      },
    text:{
        paddingTop:2,
        fontSize:20,
        fontWeight: 'bold',
    },
});
import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';

export default function LoginScreen({ navigation }){
    return(
        <View style={styles.container}>
            <Text style={{margin: 20}}>
                You are currently logged out
            </Text>
            <Button title="Press to Log In"
            onPress={()=>{navigation.navigate('Main')}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
});
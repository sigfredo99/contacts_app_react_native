import React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function SettingsScreen(){
    return(
        <View style={styles.container}>
            <Text>
                Settings coming soon!
            </Text>
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
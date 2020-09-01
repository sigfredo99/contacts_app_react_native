//React import
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button } from 'react-native';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//React Navigation Components
import { createStackNavigator } from '@react-navigation/stack';

import contacts from '../contactsgenerate';

//Sections
import ListContactsSection from '../sections/ListContactsSection';

import AddContactScreen from '../screens/AddContactScreen';
import ContactDetailsScreen from '../screens/ContactDetailsScreen';


const Stack =  createStackNavigator();
const AppContext = React.createContext();

const ContextContactList = ({navigation}) => (
    <AppContext.Consumer>
      {(props) => (
         <ListContactsSection {...props} navigation={navigation}/>
      )}
    </AppContext.Consumer>
);

const ContextAddContact = ({navigation}) => (
    <AppContext.Consumer>
      {(props) => (
         <AddContactScreen {...props} navigation={navigation}/>
      )}
    </AppContext.Consumer>
);



export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contacts,
          };
    
      }
      addContact = newContact => {
        this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact]
        }));
      };
    
    render() {
      return (
          <AppContext.Provider value={(this.state)}>
            <Stack.Navigator initialRouteName="ContactList">
            <Stack.Screen 
            name="ContactList" 
            component={ContextContactList} 
            options={{
                title: 'Contacts',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#051F5F',
                },
                headerRight: () => ( 
                    <View style={styles.container}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => {this.props.navigation.navigate('AddContact', {
                            contacts:this.state.contacts,
                            addContact:this.addContact
                        });}}>
                        <Ionicons name="person-add-outline" color='white' size={20}/>
                        </TouchableOpacity>
                    </View>
             ),
             headerLeft: () => ( 
                <View style={styles.container}>
                    <TouchableOpacity
                    style={styles.buttonlogout}
                    onPress={() => {this.props.navigation.navigate('LoginScreen');}}>
                    <Ionicons name="log-out-outline" color='white' size={25}/>
                    </TouchableOpacity>
                </View>
         ),
            }}/>
            <Stack.Screen 
            name="AddContact" 
            component={AddContactScreen} 
            options={{
                title: 'Add Contact',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#051F5F',
                },

            }}
            />
            <Stack.Screen 
            name="ContactDetails" 
            component={ContactDetailsScreen} 
            options={{
                title: 'Details',
                headerTitleAlign: 'center',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: '#051F5F',
                },

            }}
            />
        </Stack.Navigator>
          </AppContext.Provider>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
    },
    button: {
        marginRight: 12,
        backgroundColor:'#051F5F',
    },
    buttonlogout: {
        marginLeft: 12,
        backgroundColor:'#051F5F',
    },
});

import React from "react";
import { StyleSheet, View, Text} from "react-native";
import AddContactForm from '../sections/AddContactForm';

export default function AddContactScreen({route, navigation}){
    const { contacts } = route.params;
  const { addContact } = route.params;

    handleSubmit = (formState) =>{
        addContact(formState);
        navigation.navigate('ContactList');
    };

    return(
        <AddContactForm onSubmit={handleSubmit}/>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
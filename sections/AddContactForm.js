import React from 'react';
import { Text, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView, View, StyleSheet,Button} from 'react-native';
import PropTypes from 'prop-types';
//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#051F5F',
        minWidth: Dimensions.get('window').width -60,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 3,
    },
    buttondisable: {
        margin:20,
        padding: 10,
        backgroundColor: 'gray',
        color: 'white',
        width: Dimensions.get('window').width -60,
        
    },
    buttonenable: {
        margin:20,
        padding: 10,
        backgroundColor: '#051F5F',
        color: 'white',
        width: Dimensions.get('window').width -60,
        
    },
    textenable:{
        color:'white', 
        fontWeight:'bold', 
        textAlign:'center', 
        fontSize: 18, 
    },
    textdisable:{
        color:'#C2C2C2', 
        fontWeight:'bold', 
        textAlign:'center', 
        fontSize: 18, 
    },
})



export default class AddContactForm extends React.Component{
    constructor(props){
        super(props);
      
    };
    static propTypes ={
        addContact: PropTypes.func,
    }

    state={
        name: '',
        phone: '',
        isFormValid: false
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.name !== prevState.name || this.state.phone !== prevState.phone){
        this.validateForm()
        }
    }

getHandler = key => val =>{
 this.setState({[key]: val})
}


validateForm = () =>{
    const name = this.state.name.split(' ')
    if(this.state.phone.length===10 && this.state.phone>=0 && name.length>=2 && name[name.length-1] && name[0]){
        return this.setState({isFormValid: true})
    }else{
        return this.setState({isFormValid: false})
    }
}
handleSubmit = () =>{
    if(this.state.name.length>=3 && this.state.phone.length===10 && this.state.phone>=0){
        this.props.onSubmit(this.state)
    }
}
    render(){
        return(
            <KeyboardAvoidingView style={styles.container}>
                <Ionicons name="person-add-outline" color='#051F5F' size={100}/>
                <TextInput 
                style={styles.input} 
                onChangeText={this.getHandler('name')} 
                value={this.state.name}
                placeholder="Name"/>
                <TextInput 
                style={styles.input} 
                onChangeText={this.getHandler('phone')} 
                value={this.state.phone}
                keyboardType="numeric"
                placeholder="Phone"/>
                <TouchableOpacity
                style={!this.state.isFormValid ? styles.buttondisable : styles.buttonenable}
                onPress={this.handleSubmit}
                disabled={!this.state.isFormValid}
                >
                <Text style={!this.state.isFormValid ? styles.textdisable : styles.textenable}>SUBMIT</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
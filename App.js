import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//React Navigation Components
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import ContactListScreen from './screens/ContactListScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

const Tab = createBottomTabNavigator();
const RootStack =  createStackNavigator();

function Main(){
  return(
    <Tab.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Contacts') {
        iconName = 'people-outline';
      } else if (route.name === 'Settings') {
        iconName = 'list';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeBackgroundColor: '#051F5F',
    inactiveBackgroundColor:'#051F5F',
    activeTintColor: 'white',
    inactiveTintColor: '#A4BBF3',
    
  }}
      >
        <Tab.Screen name="Contacts" component={ContactListScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}


export default function App() {

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="LoginScreen"   screenOptions={{
    headerShown: false
  }}>
      <RootStack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
          />
        <RootStack.Screen 
            name="Main" 
            component={Main} 
          />
      </RootStack.Navigator>
      
    </NavigationContainer>
  );
}
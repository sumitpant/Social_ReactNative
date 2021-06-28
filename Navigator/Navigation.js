import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../views/Login';
import MainPage from '../views/MainPage';
import BottomNav from './BottomNav';
import PersonalDetails from '../views/PersonalDetails';


const Stack=createStackNavigator();

const Navigation = ({navigation}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="Home"
                component={BottomNav}
                options={{headerShown:false}}
                />
                <Stack.Screen
                name="Details"
                component={PersonalDetails}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
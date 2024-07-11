import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegistroScreen from '../screens/RegistroScreen';
import BancaScreen from '../screens/BancaScreen';
import HistorialScreen from '../screens/HistorialScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName='Login'>
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Registro" component={RegistroScreen} />
            <Tab.Screen name="Historial" component={HistorialScreen} />
            <Tab.Screen name="Banca" component={BancaScreen} />
        </Tab.Navigator>
    );
}

export default function NavegadorBottom() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}

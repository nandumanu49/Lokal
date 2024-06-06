import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import JobDetailsScreen from './components/JobDetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = 'Home' component={HomeScreen}/>
                <Stack.Screen name = 'JobDetails' component={JobDetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({})

export default AppNavigator;

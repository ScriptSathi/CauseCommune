import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Program from "./components/emission/Program"
import { data } from "./data.json"

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <StatusBar />
                <Program data={data}/>
                <BottomTabNavigator />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

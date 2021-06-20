import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Player from '../screens/Player';
import Informations from '../screens/Informations';

const Navigator = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
    return (
        <Navigator.Navigator>
            <Navigator.Screen name='Home' component={Home} />
            <Navigator.Screen name='Player' component={Player} />
            <Navigator.Screen name='Informations' component={Informations} />
        </Navigator.Navigator>
    );
};

export default BottomTabNavigator;

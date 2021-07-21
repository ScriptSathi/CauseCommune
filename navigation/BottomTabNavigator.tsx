import React, { FC } from 'react';
import Home from '../screens/Home';
import Player from '../screens/Player';
import Informations from '../screens/Informations';
import { useTheme } from '../constants/Theme';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Program from '../components/emission/Program';
import { createStackNavigator } from '@react-navigation/stack';
import HomePageNavigator from './HomePageNavigator';

const Navigator = createBottomTabNavigator();

const BottomTabNavigator: FC = () => {
    const theme = useTheme();

    return (
        <Navigator.Navigator tabBarOptions={{ style: { backgroundColor: theme.colors.secondary }, showLabel: false }}>
            <Navigator.Screen
                name='Home'
                component={HomePageNavigator}
                options={{ tabBarIcon: props => <Icon {...props} name='play-box-multiple' /> }}
            />
            <Navigator.Screen
                name='Player'
                component={Player}
                options={{ tabBarIcon: props => <Icon {...props} size={32} name='play' /> }}
            />
            <Navigator.Screen
                name='Informations'
                component={Informations}
                options={{ tabBarIcon: props => <Icon {...props} name='information' /> }}
            />
        </Navigator.Navigator>
    );
};

export default BottomTabNavigator;

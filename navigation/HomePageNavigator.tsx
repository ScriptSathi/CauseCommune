import React, { FC } from 'react';
import Home from '../screens/Home';
import Player from '../screens/Player';
import Informations from '../screens/Informations';
import { useTheme } from '../constants/Theme';
import Program from '../screens/Program';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import TitleBar from '../components/TitleBar';

const Stack = createStackNavigator();

const HomePageNavigator: FC = () => {
    const theme = useTheme();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#E73059',
                    // headerTitle: props => <TitleBar name={"Accueil"} />
                }}
            />
            <Stack.Screen
                name="L'émission"
                component={Program}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#E73059',
                    // headerTitle: props => <TitleBar name={"L'émission"} />
                }}
            />
            <Stack.Screen
                name="Player"
                component={Player}
            />
        </Stack.Navigator>
    );
};

export default HomePageNavigator;

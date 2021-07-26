import React, { FC } from 'react';
import Home from '../screens/Home';
import { useTheme } from '../constants/Theme';
import Program from '../screens/Program';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HomePageNavigator: FC = () => {
    const theme = useTheme();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: theme.colors.primary,
                }}
            />

            <Stack.Screen
                name="L'émission"
                component={Program}
                options={{
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: theme.colors.primary,
                }}
            />
        </Stack.Navigator>
    );
};

export default HomePageNavigator;

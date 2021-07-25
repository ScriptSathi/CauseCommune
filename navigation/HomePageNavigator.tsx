import React, { FC } from 'react';
import Home from '../screens/Home';
import Player from '../screens/Player';
import Informations from '../screens/Informations';
import { useTheme } from '../constants/Theme';
import Program from '../screens/Program';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';
import TitleBar from '../components/TitleBar';

import { QueryClient, QueryClientProvider } from 'react-query';
const Stack = createStackNavigator();
const queryClient = new QueryClient();
const HomePageNavigator: FC = () => {
    const theme = useTheme();
    return (
        <QueryClientProvider client={queryClient}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
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
            </Stack.Navigator>
        </QueryClientProvider>
    );
};

export default HomePageNavigator;

import 'react-native-gesture-handler';
import './startup/ALL_STARTUP_PROCESSES';
import React, { FC, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-paper';
import { navigationTheme, paperTheme } from './constants/Theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import AudioPlayerProvider from './components/player/AudioPlayerProvider';

const queryClient = new QueryClient();

const App: FC = () => {
    const [areFontsLoading, setAreFontsLoading] = useState(true);

    return (
        <SafeAreaProvider>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer theme={navigationTheme}>
                    <ThemeProvider theme={paperTheme}>
                        <AudioPlayerProvider>
                            <BottomTabNavigator />
                        </AudioPlayerProvider>
                    </ThemeProvider>
                </NavigationContainer>
            </QueryClientProvider>
        </SafeAreaProvider>
    );
};

export default App;

import { DefaultTheme as defaultPaperTheme, useTheme as useRNPTheme } from 'react-native-paper';
import { DefaultTheme as defaultNavigationTheme } from '@react-navigation/native';

enum Colors {
    PRIMARY = '#E73059',
    SECONDARY = '#202020',
    BACKGROUND = '#FEF7F9',
    ICON_FOCUSED = '#E03B60',
    ICON_NOT_FOCUSED = '#A3A3A3',
    SLIDER = 'rgba(185, 120, 139, 0.38)',
    AUDIO_PLAYER_CONTROLS = '#323232',
}

export const paperTheme = {
    ...defaultPaperTheme,
    colors: {
        ...defaultPaperTheme.colors,
        primary: Colors.PRIMARY,
        secondary: Colors.SECONDARY,
        background: Colors.BACKGROUND,
        iconFocused: Colors.ICON_FOCUSED,
        iconNotFocused: Colors.ICON_NOT_FOCUSED,
        slider: Colors.SLIDER,
        audioPlayerControl: Colors.AUDIO_PLAYER_CONTROLS,
    },
};

export const navigationTheme = {
    ...defaultNavigationTheme,
    colors: {
        ...defaultNavigationTheme.colors,
        primary: Colors.ICON_FOCUSED,
        background: Colors.BACKGROUND,
    },
};

export type PaperTheme = typeof paperTheme;
export type NavigationTheme = typeof navigationTheme;
export const useTheme = () => useRNPTheme() as PaperTheme;

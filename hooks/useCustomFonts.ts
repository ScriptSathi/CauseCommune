import { useFonts } from 'expo-font';

const useCustomFonts = () =>
    useFonts({
        TitiliumLight: require('../assets/fonts/TitilliumWeb-Light.ttf'),
        TitiliumRegular: require('../assets/fonts/TitilliumWeb-Regular.ttf'),
        MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
    });

export default useCustomFonts;

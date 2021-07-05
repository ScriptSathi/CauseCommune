import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

type Props = {
    kind: String;
    content: String;
}
const Content: React.FC<Props>  = ({ kind, content}) => {
    const [fontsLoaded] = useFonts({
        'TitiliumRegular': require('../../assets/fonts/TitilliumWeb-Regular.ttf'),
        'TitiliumLight': require('../../assets/fonts/TitilliumWeb-Light.ttf'),
        'MontserratMedium': require('../../assets/fonts/Montserrat-Medium.ttf'),
        'CC-RobotoLight': require('../../assets/fonts/Roboto-Light.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    return(
        <View style={styles.frame} >
            <View style={styles.titleFrame}>
                <Text style={styles.title}>{ kind }</Text>
            </View>
            <Text style={styles.content}>{ content }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    frame: {
        alignSelf: "center",
        width: '85%',
        backgroundColor: "white",
        borderRadius: 0,
        shadowColor: "black",
        shadowOpacity: 0.20,
        shadowRadius: 20,
        paddingBottom: 20,
    },
    titleFrame: {
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    title: {
        fontSize: 22,
        color: "#E73059",
        textAlign: "center",
        fontFamily: "MontserratMedium",
    },
    content: {
        marginLeft: 30,
        marginRight: 18,
        fontSize: 20,
    }
});

export default Content;

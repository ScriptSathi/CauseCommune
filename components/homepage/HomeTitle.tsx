import React, { FC } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
// @ts-ignore
import logo from '../../assets/images/cc-logo.png';

const HomeTitle: FC = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>La voix des possibles</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    title: {
        marginTop: -15,
        fontFamily: 'roboto',
        fontWeight: 'bold',
        fontSize: 26,
    },
});
export default HomeTitle;

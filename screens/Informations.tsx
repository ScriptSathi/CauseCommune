import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Card, Paragraph, Text, Title } from 'react-native-paper';
import libre from '../assets/images/libre.png';
import { useQuery } from 'react-query';
import getInfoPageQuery from '../queries/getInfoPage.query';

const Informations: FC = () => {

    const { data } = useQuery('/info', getInfoPageQuery);

    return(
        <View style={styles.container}>
            <Image source={libre} style={styles.logo} />
            <View style={styles.card}>
                <View style={styles.titleFrame}>
                    <Text style={styles.title}>Qui sommes nous ?</Text>
                </View>
                <Text style={styles.content}>{data}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF7F9',

    },
    logo: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
    },
    titleFrame: {
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    content: {
        fontFamily: 'TitiliumLight',
        marginLeft: 30,
        marginRight: 18,
        marginBottom: 20,
    },
    card: {
        marginTop: -20,
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 10,
        zIndex: 999,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        width: (Dimensions.get('window').width * 80) / 100,
    },
});

export default Informations;

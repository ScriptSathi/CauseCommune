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
            <Card style={styles.card}>
                <Card.Title title="Qui sommes nous ?" />
                <Card.Content>
                    <Paragraph>{data}</Paragraph>
                </Card.Content>
            </Card>
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
        height: 250,
        resizeMode: 'contain',
    },
    card: {
        marginTop: -30,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        elevation: 9,
        width: (Dimensions.get('window').width * 80) / 100,
        flex: 1,

    },
});

export default Informations;

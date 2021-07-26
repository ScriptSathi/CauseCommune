import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Content: FC<ContentProps> = ({ kind, content }) => {
    return (
        <View style={styles.frame}>
            <View style={styles.titleFrame}>
                <Text style={styles.title}>{kind}</Text>
            </View>
            <Text style={styles.content}>{content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    frame: {
        alignSelf: 'center',
        width: '85%',
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
    },
    titleFrame: {
        marginTop: 15,
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 5,
    },
    title: {
        fontSize: 22,
        color: '#E73059',
        textAlign: 'center',
        fontFamily: 'MontserratMedium',
    },
    content: {
        fontFamily: 'TitiliumLight',
        marginLeft: 30,
        marginRight: 18,
        marginBottom: 20,
        fontSize: 20,
        lineHeight: 27,
    },
});

interface ContentProps {
    kind: string;
    content: string;
}

export default Content;

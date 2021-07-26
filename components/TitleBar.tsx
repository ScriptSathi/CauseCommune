import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

const Program: FC<ProgramProps> = ({ name }) => {
    return (
        <View style={styles.background}>
            <Title style={[styles.title]}>{name}</Title>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 33,
        color: '#E73059',
        fontFamily: 'TitiliumRegular',
    },
});

interface ProgramProps {
    name: string;
}

export default Program;

import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import { Card, Paragraph } from 'react-native-paper';

export const ErrorLoader = () => {

    const styles = StyleSheet.create({
        card: {
            borderRadius: 5,
            margin: 12,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            elevation: 9,
            width: (Dimensions.get('window').width * 80) / 100,
            flex: 1,
            padding: 0,
        },

    });

    return (
        <View>
            <Card
                style={styles.card}>
                <Card.Title title='Card Title' subtitle='Card Subtitle' />
                <Card.Content>
                    <Paragraph>Oups, une erreur est survenue!</Paragraph>
                </Card.Content>
                <Card.Actions>
                    {/*<Button>Cancel</Button>*/}
                    {/*<Button>Ok</Button>*/}
                </Card.Actions>
            </Card>
        </View>


    );


};
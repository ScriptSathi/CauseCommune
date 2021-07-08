import React, { FC } from 'react';
import { Button, View } from 'react-native';

const Home: FC = ({ navigation }) => {
    return(
        <View>
            <Button
                title="Voir l'émission"
                onPress={() => navigation.navigate('Emission')}
            />
        </View>
    )
};

export default Home;

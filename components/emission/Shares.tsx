import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Linking } from 'react-native';

export type Props = {
    twitter_link: String;
    fb_link: String;
    url_link: String;
}
const Shares: React.FC<Props>  = ({ twitter_link, fb_link, url_link}) => {
    const redirectUser = (claimUrl) => Linking.openURL(claimUrl);
    return(
        <View style={styles.container}>
            <TouchableOpacity
                setOpacityTo={0.5}
                onPress={() => redirectUser(url_link)}
            >
                <Image
                    style={styles.img_link}
                    source={ require('../../assets/images/link.png') }
                />
            </TouchableOpacity>
            <TouchableOpacity
                setOpacityTo={0.5}
                onPress={() => redirectUser(fb_link)}
            >
                <Image
                    style={styles.img}
                    source={ require('../../assets/images/facebook.svg') }
                />
            </TouchableOpacity>
            <TouchableOpacity
                setOpacityTo={0.5}
                onPress={() => redirectUser(url_link)}
            >
                <Image
                    style={styles.img}
                    source={ require('../../assets/images/twitter.svg') }
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexBasis: 50,
      alignSelf: "center",
      alignItems: "center",
    },
    img: {
        margin: 12,
        width: 40,
        height: 40,
    },
    img_link: {
        width: 50,
        height: 50,
    }
});

export default Shares;

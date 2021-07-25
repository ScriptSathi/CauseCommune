import React from 'react';
import { StyleSheet, Share} from 'react-native';
import { IconButton } from 'react-native-paper';

type Props = {
    url_link: String;
}
const Shares: React.FC<Props>  = ({ url_link}) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message: url_link
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    }
    return(
            <IconButton
                onPress={() => onShare()}
                icon='share-variant'
                color="#E73059"
                size={ 30 }
                style={styles.button}
            />
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        borderRadius: 0,
        marginBottom:"2%",
    },
});

export default Shares;

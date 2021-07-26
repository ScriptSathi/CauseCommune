import React, { FC, useCallback } from 'react';
import { Share, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const Shares: FC<SharesProps> = ({ urlLink }) => {
    const onShare = useCallback(async () => {
        try {
            const result = await Share.share({
                message: urlLink,
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
    }, []);

    return <IconButton onPress={onShare} icon='share-variant' color='#E73059' size={30} style={styles.button} />;
};

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        borderRadius: 0,
        marginBottom: '2%',
    },
});

interface SharesProps {
    urlLink: string;
}

export default Shares;

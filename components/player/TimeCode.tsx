import React, { FC, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import formatMs from '../../fns/formatMs';

const TimeCode: FC<TimeCodeProps> = ({ current, max, style }) => {
    const formattedCurrent = useMemo(() => formatMs(current || 0), [current]);
    const formattedMax = useMemo(() => {
        if (!max && max !== 0) {
            return '-:--';
        }
        return formatMs(max || 0);
    }, [max]);
    return (
        <View style={[styles.root, style]}>
            <Text>{formattedCurrent}</Text>
            <Text>{formattedMax}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

interface TimeCodeProps {
    current?: number;
    max?: number;
    style?: StyleProp<ViewStyle>;
}

export default TimeCode;

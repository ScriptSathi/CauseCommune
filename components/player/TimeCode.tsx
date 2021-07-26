import React, { FC, useCallback, useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';

const TimeCode: FC<TimeCodeProps> = ({ current, max, style }) => {
    const formatMs = useCallback((ms: number) => {
        const hours = Math.floor(ms / 3600000);
        const minutes = Math.floor((ms - hours * 3600000) / 60000);
        const seconds = Math.floor((ms - hours * 3600000 - minutes * 60000) / 1000);
        return `${hours ? hours.toString() + ':' : ''}${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, []);
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

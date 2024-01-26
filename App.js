import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';

export default function App() {
    return (
        <View style={styles.container}>
            <Focus />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252250',
    },
});

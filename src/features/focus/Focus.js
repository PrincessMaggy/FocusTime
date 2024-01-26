import * as React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../components/RoundedButton';

export const Focus = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    What would you like to focus on?
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput style={{flex: 1, marginRight: 20}} />
                    <RoundedButton title='+' size={50} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        fles: 0.5,
        padding: Platform.OS === 'android' ? 16 : 18,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
    },
});

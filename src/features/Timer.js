import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {colors} from '../utils/colors';
import {spacing} from '../utils/sizes';
import {Countdown} from '../components/Countdown';
import {RoundedButton} from '../components/RoundedButton';

export const Timer = ({focusSubject}) => {
    const [isStarted, setIsStarted] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown isPaused={!isStarted} />
            </View>
            <View>
                <Text style={styles.title}>Focusing on: </Text>
                <Text style={styles.task}>{focusSubject}</Text>
            </View>
            <RoundedButton
                title='start'
                size={50}
                onPress={() => setIsStarted(true)}
            />

            <RoundedButton
                title='stop'
                size={50}
                onPress={() => setIsStarted(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
    },
    task: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

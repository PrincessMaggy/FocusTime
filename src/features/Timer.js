import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';
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
            <View style={styles.buttonWrapper}>
                {isStarted ? (
                    <RoundedButton
                        title='pause'
                        onPress={() => {
                            setIsStarted(false);
                        }}
                    />
                ) : (
                    <RoundedButton
                        title='start'
                        onPress={() => {
                            setIsStarted(true);
                        }}
                    />
                )}
            </View>
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
        fontSize: fontSizes.xl
    },
    task: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFD700',
        fontSize: fontSizes.lg,
        textDecorationLine:'underline'


    },
    countdown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        flex: 0.3,
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

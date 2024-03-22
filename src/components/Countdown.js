import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from '../utils/colors';
import {fontSizes, spacing} from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({minutes = 20, isPaused, onProgress,onEnd}) => {
    const [millis, setMillis] = useState(minutesToMillis(minutes));
    const mins = Math.floor(millis / 1000 / 60) % 60;
    const secs = Math.floor(millis / 1000) % 60;

    const reset =()=> setMillis(minutesToMillis(minutes))

    const interval = React.useRef(null);
    const countdownTime = () => {
        setMillis((time) => {
            if (time === 0) {
                clearInterval(interval.current);
                onEnd(reset); 
                return time;
            }
            const timeleft = time - 1000;
            return timeleft;
        });
    };

    useEffect(() => {
        if (isPaused) {
            return;
        }
        interval.current = setInterval(countdownTime, 1000);
        return () => clearInterval(interval.current);
    }, [isPaused]);

    useEffect(() => {
        onProgress(millis / minutesToMillis(minutes));
    }, [millis]);

    return (
        <Text style={styles.text}>
            {formatTime(mins)}:{formatTime(secs)}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: fontSizes.xxxl,
        color: colors.white,
        fontWeight: 'bold',
        padding: spacing.lg,
        backgroundColor: 'rgba(94,132,226,0.3)',
    },
});

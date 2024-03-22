import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Focus} from './src/features/Focus';
import {Timer} from './src/features/Timer';
import {colors} from './src/utils/colors';
import {spacing} from './src/utils/sizes';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
    const [focusSubject, setFocusSubject] = useState(null);
    const [focusHistory, setFocusHistory] = useState(['fhfh','fggf'])

    return (
        <View style={styles.container}>
            {focusSubject ? (
                <Timer focusSubject={focusSubject} 
                
                onTimerEnd={(subject)=> {       setFocusSubject(null);
                    setFocusHistory([...focusHistory, subject])}}
                clearSubject={() => {
                    setFocusSubject(null);
                  }}
                 />
            ) : (
                <Text> <Focus addSubject={setFocusSubject} />
        <FocusHistory focusHistory ={focusHistory}/>
        </Text>
          
            )}
            <Text>{focusSubject}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg,
        backgroundColor: colors.darkBlue,
    },
});

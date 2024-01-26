import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {TextInput} from 'react-native-paper';
import {RoundedButton} from '../../components/RoundedButton';
import {spacing, fontSizes} from '../../utils/sizes';

export const Focus = ({addSubject}) => {
    const [tempItem, setTempItem] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    What would you like to focus on?
                </Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={{flex: 1, marginRight: spacing.md}}
                        onSubmitEditing={({nativeEvent}) => {
                            setTempItem(nativeEvent.text);
                        }}
                    />
                    <RoundedButton
                        title='+'
                        size={50}
                        onPress={() => addSubject(tempItem)}
                    />
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
        flex: 0.5,
        padding: Platform.OS === 'android' ? spacing.md : spacing.sm,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: fontSizes.lg,
        marginBottom: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

import React from "react";
import { View, Text , StyleSheet ,FlatList} from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

export const FocusHistory =({focusHistory})=>{

    if (!focusHistory || !focusHistory.length) return <Text style={styles.title}>We haven't focused on anything yet.</Text>

    return (
        <View style={styles.container}>
            <Text style={styles.title}> History of items you've focused on:    </Text>
            <FlatList
        data={focusHistory}
        renderItem={({item}) => <Text style={styles.item}>- {item}</Text>}
      />
        
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    padding:spacing.md,
    flex:1
    },
    title: {
        color:colors.white,
        fontSize: fontSizes.md,
        padding:spacing.md,
        // textAlign:'center',
        fontWeight:'bold'
},
    item:{
        fontSize: fontSizes.md,
        color: colors.white,   
        paddingLeft:spacing.md, 
        paddingTop: spacing.sm
    }

})
import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { RoundedButton } from "../components/RoundedButton";


const createTwoButtonAlert = () =>
   {
    console.log("hello")
   }


export const Timing =({onChangeTime})=>{

    return (
        <View style={styles.timingButton}>
            <RoundedButton size={60} title={10} onPress={()=>{createTwoButtonAlert()}}/>
        </View>
    )
}


const styles = StyleSheet.create({
timingButton:{
    flex:1,
    alignItems:'center'
}
})
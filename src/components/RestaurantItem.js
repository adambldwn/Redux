import React from "react";
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";

export const RestaurantItem = ({item}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    text:{
        fontWeight: "200"
    },
})
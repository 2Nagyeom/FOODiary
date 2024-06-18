import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const {height} = Dimensions.get('window');

const Row = ({children, bgColor}) => {
    return (
        <View style={[styles.layout , {backgroundColor : bgColor}]}>
            {children}
        </View>
    )
    
}

const styles = StyleSheet.create({
    layout : {
        flex : 1,
        height : height,
        paddingVertical : 32,
        alignItems :'center',
    },
})

export default Row;


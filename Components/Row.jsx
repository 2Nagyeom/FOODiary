import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

const {width} = Dimensions.get('window');

const Row = ({children}) => {
    return (
        <View style={styles.layout}>
            {children}
        </View>
    )
    
}

const styles = StyleSheet.create({
    layout : {
        flex : 1,
        width : width,
        paddingHorizontal : 24,
        alignItems : 'center',
    },
})

export default Row;
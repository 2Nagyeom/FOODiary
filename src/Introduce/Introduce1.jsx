import React from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity } from "react-native";

const Introduce1 = ({navigation}) => {
    return (
        <SafeAreaView style={styles.layout}>
            <Text>
                Introduce1
            </Text>
            <TouchableOpacity
                onPress={() =>navigation.navigate('LoginStack', {page : 'Login'})}>
                <Text>go to Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layout : {
        flex : 1,
    },
})

export default Introduce1;
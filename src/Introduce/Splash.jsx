import React, { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Introduce1')
        }, 2000);
    })

    return (
        <SafeAreaView style={styles.layout}>
            <Image style={styles.Splashicon} source={SplashIcon} />
            <Text style={styles.SplashText}>FOODiary</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layout : {
        flex : 1,
        backgroundColor : '#E8E8E7',
        justifyContent : 'center',
        alignItems : 'center',
    },
    Splashicon : {
        width : 280,
        height : 280,
    },
    SplashText : {
        marginTop : 10,
        fontSize : 30,
        fontWeight : 'bold',
        color : '#000000',
        textAlign : 'center'
    }

})

const SplashIcon = require('../../assets/icons/SplashIcon.png');

export default Splash;
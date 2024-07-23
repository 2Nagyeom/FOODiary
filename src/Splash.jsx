import React, { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Main')
        }, 2000);
    })

    return (
        <SafeAreaView style={styles.layout}>
            <Image style={styles.Splashicon} source={SplashIcon} />
            <Text style={styles.SplashText}>나만의 맛집저장 리스트를</Text>
            <Text style={styles.SplashText}>만들어보아요</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layout : {
        flex : 1,
        backgroundColor : '#5341e5',
        justifyContent : 'center',
        alignItems : 'center',
    },
    Splashicon : {
        width : 164,
        height : 184,
    },
    SplashText : {
        marginTop : 10,
        fontSize : 18,
        fontWeight : 'bold',
        color : '#fff',
        textAlign : 'center'
    }

})

const SplashIcon = require('../assets/imgs/SplashImg.png');

export default Splash;
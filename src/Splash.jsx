import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Image } from "react-native";
import Geolocation from '@react-native-community/geolocation';


const Splash = ({navigation}) => {
    useEffect(() => {
        getUserLocation()
    }, [])

    const getUserLocation = () => {
        Geolocation.getCurrentPosition(info => {
            console.log('Splash =========> ', info.coords.latitude, info.coords.longitude);
            let userCurrLocation = {
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
            }

            if (userCurrLocation.latitude == 0 || userCurrLocation.longitude == 0) {
                console.error('타당하지않은 주소입니다!');
            } else {
                setTimeout(() => {
                    navigation.navigate('Main', { params : userCurrLocation })
                }, 2000);
            }

            
        })
    }

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
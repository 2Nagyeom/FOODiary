import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Image, PermissionsAndroid, Platform } from "react-native";
import { useIsFocused } from "@react-navigation/native";

import Geolocation from 'react-native-geolocation-service';
import { saveCurrLocation } from "../hooks/asyncStore";

const Splash = ({ navigation }) => {
    const isFocused = useIsFocused();

    useEffect(() => {
        getUserLocation()
    }, [isFocused])

    const getUserLocation = async () => {
        const hasPermission = await requestLocationPermission();
        
        if (hasPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    let location = {
                        latitude,
                        longitude
                    }
                    saveCurrLocation(JSON.stringify(location))
                    console.log('현재 위치 =======> ', { latitude, longitude });
                },
                (error) => {
                    console.log(error.code, error.message);
                },
                {
                    enableHighAccuracy: false,
                    timeout: 1500,
                    maximumAge: 1000
                }
            );
        } else {
            console.log('위치 권한이 거부되었습니다.');
        }
        setTimeout(() => {
            navigation.navigate('Main')
        }, 2000)
    };

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: '위치 권한 요청',
                    message: '위치 정보를 사용하기 위해 권한이 필요합니다.',
                    buttonNeutral: '나중에',
                    buttonNegative: '취소',
                    buttonPositive: '확인',
                },
            );
            return granted === PermissionsAndroid.RESULTS.GRANTED;
        } if (Platform.OS === "ios") {
            return await Geolocation.requestAuthorization("always");
        }
    };

    return (
        <SafeAreaView style={styles.layout}>
            <Image style={styles.Splashicon} source={SplashIcon} />
            <Text style={styles.SplashText}>나만의 맛집저장 리스트를</Text>
            <Text style={styles.SplashText}>만들어보아요</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#5341e5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Splashicon: {
        width: 164,
        height: 184,
    },
    SplashText: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    }

})

const SplashIcon = require('../assets/imgs/SplashImg.png');

export default Splash;
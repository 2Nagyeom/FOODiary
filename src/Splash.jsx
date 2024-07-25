import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, StyleSheet, Image, PermissionsAndroid, Platform } from "react-native";
import Geolocation from '@react-native-community/geolocation';


const Splash = ({ navigation }) => {

    const [initalLocation, setInitalLocation] = useState({
        latitude : 0,
        longitude : 0,
    })
    useEffect(() => {
        requestLocationPermission()
    }, [])

    const getUserLocation = () => {
        Geolocation.getCurrentPosition(info => {
            console.log('Splash =========> ', info.coords.latitude, info.coords.longitude);
            let userCurrLocation = {
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
            }
        })
    }

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );

            Geolocation.getCurrentPosition(info => {
                console.log('Splash =========> ', info.coords.latitude, info.coords.longitude);
                let userCurrLocation = {
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude,
                }
                setInitalLocation(userCurrLocation)
            })
            // 권한이 허용되었는지 확인
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                console.log('Location permission granted');
            } else {
                // 권한이 거부된 경우
                console.log('Location permission denied');
            }
        }

        setTimeout(() => {
            navigation.navigate('Main', { params: initalLocation })
            console.log(initalLocation);
        }, 2000);
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
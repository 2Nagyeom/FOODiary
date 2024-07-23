import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const { width, height }= Dimensions.get('window');

const Version = ({navigation}) => {
    return (
        <SafeAreaView style={{flex : 1, alignItems : 'center', backgroundColor : "#fff"}}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <Image source={backIcon} style={{width : 10, height : 16}} />
                </TouchableOpacity>
                <View>
                    <Text style={[styles.topText, {color : '#5341E5'}]}>앱정보</Text>
                </View>
                <View style={{width : 10}}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.containerText}>앱 버전</Text>
                <Text style={styles.containerText}>1.0</Text>
            </View>
        </SafeAreaView>
    )
}
const backIcon = require('../assets/icons/backIcon.png')

const styles = StyleSheet.create({
    topBar : {
        width : width,
        height : 40,
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center',
        paddingHorizontal : 16,
        paddingVertical : 12,
    },
    topText : {
        fontWeight : '700',
        fontSize : 16
    },
    container : {
        width : width - 32,
        height : 40,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginTop : 12,
        paddingHorizontal : 16,
        borderWidth : 1,
        borderRadius : 8,
        borderColor : '#5341eb',
    },
    containerText : {
        fontWeight : '500',
        fontSize : 14,
    }
})

export default Version;
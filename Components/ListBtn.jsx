import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

const {width, height} = Dimensions.get('window');

const ListBtn = ({onPress}) => {
    return (
            <TouchableOpacity 
                style={styles.btnContainer}
                onPress={onPress}>
                <Image source={listBtnImg}  style={{width : 60, height : 60}}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer : {
        // width : width,
        // height : 60,
        zIndex : 2, 
        position : 'absolute',
        top : 80,
        right : 20,
    },
    btn : {
        // marginLeft : 'auto',
        // backgroundColor : 'red'
    }
})

const listBtnImg = require('../assets/icons/listBtnImg.png');
export default ListBtn;
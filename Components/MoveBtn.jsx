import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

const {width, height} = Dimensions.get('window');

const MoveBtn = ({onPress}) => {
    return (
            <TouchableOpacity 
                style={styles.btnContainer}
                onPress={onPress}>
                <Image source={listBtnImg}  style={{width : 80, height : 80}}/>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer : {
        zIndex : 9999, 
        position : 'absolute',
        top : height * 0.86,
        right : width / 2 - 40,
        
    },
    btn : {
        // marginLeft : 'auto',
        // backgroundColor : 'red'
    }
})

const listBtnImg = require('../assets/icons/listBtnImg.png');
export default MoveBtn;
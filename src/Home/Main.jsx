import React from "react";
import { Dimensions, ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import Col from "../../Components/Row";
import Row from "../../Components/Col";

const {width, height} = Dimensions.get('window');

const Main = () => {
    return (
        <ImageBackground source={HomeBgImg} style={{width : width, height : height}}>
            <Col>
                <Row>
                    <View style={{marginTop : 32}}>
                        <Text style={[styles.text, {fontSize : 26}]}>FOODiary</Text>
                    </View>
                    <View style={styles.showView}>
                        <View style={styles.textView}>
                            <Text style={[styles.text, {fontSize : 20, fontWeight : '300'}]}><Text style={[styles.text, {color : '#5341E5'}]}>잊어</Text>버리지않게</Text>
                            <Text style={[styles.text, {fontSize : 20, fontWeight : '300'}]}>맛집<Text style={[styles.text, {color : '#5341E5'}]}> 저장</Text></Text>
                        </View>
                        <Image source={HomeLogoImg} style={{width : 100, height : 100}} />
                    </View>
                    <View style={styles.mainView}>
                        {/* add options... */}
                    </View>
                </Row>
            </Col>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    mainView : {
        marginTop : 'auto',
        width : width,
        height : height * 0.6,
        borderTopLeftRadius : 20,
        borderTopRightRadius : 20,
        backgroundColor : '#fff',
    },
    showView : {
        width : '100%',
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        marginTop : 40,
        marginBottom : 40,
    },
    textView : {
        alignItems : 'center',
        paddingLeft : 32,
        gap : 4,
    },
    text : {

        fontWeight : '700',
        textAlign : 'center',
    }
})

const HomeBgImg = require('../../assets/imgs/HomeBgImg.png');
const HomeLogoImg = require('../../assets/imgs/HomeLogoImg.png');

export default Main;
import React from "react";
import { Image, View, StyleSheet, Text, Dimensions, TextInput, TouchableOpacity } from "react-native";

import Col from "../../Components/Col";
import Row from "../../Components/Row";

const { width, height } = Dimensions.get('window');


const Reset = ({navigation}) => {
    return (
        <Col bgColor='#fff'>
            <Row>
                <Image source={resetIcon} style={{ width: 200, height: 200, marginTop : height * 0.15}} />
                <View style={styles.inpuView}>
                    <Text style={[styles.text, { color : '#A5A5A7' }]}>입력한 이메일 주소 또는 번호로</Text>
                    <Text style={[styles.text, { color : '#A5A5A7' }]}>인증번호가 발송됩니다</Text>
                    <View style={styles.inputEmailView}>
                        <TextInput style={[styles.inputEmailContainer, {paddingHorizontal : 16}]} />
                        <TouchableOpacity style={[styles.inputEmailContainer, { backgroundColor: '#5341E5' }]}>
                            <Text style={[styles.text, {color : '#fff'}]}>비밀번호 찾기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', marginTop: 'auto', gap: 8 }}>
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.text, { fontSize: 12 }]}>비밀번호가 기억났나요?</Text>
                    </TouchableOpacity>
                </View>
            </Row>
        </Col>
    )
}

const styles = StyleSheet.create({
    inpuView: {
        width: '100%',
        height: height * 0.26,
        alignItems: 'center',
        marginVertical: 32,
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 12,
        backgroundColor: '#F5F5F5'
    },
    inputEmailView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop : 'auto',
        gap: 16,
    },
    inputEmailContainer: {
        width: '100%',
        height: 48,
        alignItems : 'center',
        justifyContent : 'center',
        borderRadius: 8,
        backgroundColor: '#E9E9EB',
        fontSize: 14,
        fontWeight: '700'
    },
    text: {
        fontWeight: '700',
        fontSize: 14,
    },
})

const resetIcon = require('../../assets/icons/ResetIcon.png');

export default Reset;
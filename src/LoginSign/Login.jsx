import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Col from "../../Components/Col";
import Row from "../../Components/Row";

const Login = ({ navigation }) => {
    const [loginOption, setLoginOption] = useState('PHONE');

    return (
        <Row>
            <Col>
                <Text style={[styles.text, { marginTop: 50, fontSize: 24 }]}>로그인</Text>
                <View style={styles.touchOptionView}>
                    <TouchableOpacity
                        style={[styles.optionContainer, loginOption === 'PHONE' && { borderBottomColor: '#5341E5' }]}
                        onPress={() => setLoginOption('PHONE')}>
                        <Text style={styles.text}>휴대폰 번호</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionContainer, loginOption === 'EMAIL' && { borderBottomColor: '#5341E5' }]}
                        onPress={() => setLoginOption('EMAIL')}>
                        <Text style={styles.text}>이메일 또는 아이디</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputView}>
                    <View style={styles.inputContainer}>

                        {loginOption === 'PHONE' ? (
                            <TextInput
                                placeholder="휴대폰번호"
                                placeholderTextColor='#A5A5A7' />
                        ) : (
                            <TextInput
                                placeholder="이메일 또는 아이디"
                                placeholderTextColor='#A5A5A7' />
                        )

                        }
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="비밀번호"
                            placeholderTextColor='#A5A5A7'
                            secureTextEntry={true}
                        />
                        <TouchableOpacity>
                            <Image source={shownPwdIcon} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Reset')}>
                        <Text style={[styles.text, { fontSize: 10 }]}>비밀번호를 잃어버리셨나요?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.inputContainer, { justifyContent: 'center', marginTop: 16, backgroundColor: '#5341E5' }]}
                        onPress={() => navigation.navigate('BottomTab')}>
                        <Text style={[styles.text, { color: '#fff' }]}>완료</Text>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.text, { fontSize: 12, color: '#A5A5A7' }]}>또는</Text>
                <View style={styles.socialLoginView}>
                    <TouchableOpacity>
                        <Image source={kakaoIcon} style={styles.socialLoginIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={naverIcon} style={styles.socialLoginIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={googleIcon} style={styles.socialLoginIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={appleIcon} style={styles.socialLoginIcon} />
                    </TouchableOpacity>
                </View>
            </Col>
                <TouchableOpacity
                    style={{ marginTop: 'auto' }}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={[styles.text, { fontSize: 12 }]}>회원이 아니신가요?</Text>
                </TouchableOpacity>
        </Row>
    )
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    text: {
        fontWeight: '700',
        fontSize: 14,
    },
    touchOptionView: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 64,
    },
    optionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#D9D9D9'
    },
    inputView: {
        width: '100%',
        marginVertical: 32,
        gap: 16,
    },
    inputContainer: {
        height: 48,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        gap: 16,
        borderRadius: 8,
        backgroundColor: '#E9E9EB',
        fontWeight: '700'
    },
    socialLoginView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        marginTop: 16,

    },
    socialLoginIcon: {
        width: 40,
        height: 40,
    }
})

const shownPwdIcon = require('../../assets/icons/shownPwdIcon.png');
const naverIcon = require('../../assets/icons/naverIcon.png');
const kakaoIcon = require('../../assets/icons/kakaoIcon.png');
const googleIcon = require('../../assets/icons/googleIcon.png');
const appleIcon = require('../../assets/icons/appleIcon.png');

export default Login;
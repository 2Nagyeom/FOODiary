import React, { useState } from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

import Row from "../../Components/Row";
import Col from "../../Components/Col";

const { width, height } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Col>
            <Row>
                <Text style={[styles.text, { marginTop: 50, fontSize: 24 }]}>회원가입</Text>

                <View style={styles.inputView}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="휴대폰번호 또는 이메일 주소"
                            placeholderTextColor='#A5A5A7'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="성명"
                            placeholderTextColor='#A5A5A7'
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="비밀번호"
                            placeholderTextColor='#A5A5A7'
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="비밀번호 확인"
                            placeholderTextColor='#A5A5A7'
                            secureTextEntry={true}
                        />
                        <TouchableOpacity>
                            <Image source={shownPwdIcon} style={{ width: 24, height: 24 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.agreeOptionView}>
                        <Text style={[styles.text, { fontSize: 12 }]}>약관동의</Text>
                        <View style={styles.agreeOptionContainer}>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { textDecorationLine: 'underline', fontSize: 14, color: '#A5A5A7' }]}
                                >이용약관 동의</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 6, borderWidth: 2, borderColor: '#A5A5A7' }} />
                        </View>
                        <View style={styles.agreeOptionContainer}>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { textDecorationLine: 'underline', fontSize: 14, color: '#A5A5A7' }]}
                                >개인정보 수집 및 이용 동의</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 6, borderWidth: 2, borderColor: '#A5A5A7' }} />
                        </View>
                        <View style={styles.agreeOptionContainer}>
                            <TouchableOpacity>
                                <Text
                                    style={[styles.text, { textDecorationLine: 'underline', fontSize: 14, color: '#A5A5A7' }]}
                                >위치기반 서비스 이용약관 동의</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 6, borderWidth: 2, borderColor: '#A5A5A7' }} />
                        </View>
                    </View>
                </View>
                <View style={{ width: '100%', marginTop: 'auto', gap: 8 }}>
                    <TouchableOpacity
                        style={[styles.inputContainer, { justifyContent: 'center', backgroundColor: '#5341E5' }]}
                        onPress={() => setModalVisible(true)}>
                        <Text style={[styles.text, { color: '#fff' }]}>가입하기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ alignItems: 'center' }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.text, { fontSize: 12 }]}>아이디가 기억났나요?</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    isVisible={isModalVisible}
                    backdropOpacity={0.3}>
                    <View style={styles.ModalView}>
                        <View style={styles.ModalContainer}>
                            <Image source={completeIcon} style={{ width: 80, height: 80 }} />
                            <Text style={[styles.text, { marginVertical: 8, fontWeight: '700', fontSize: 20 }]}>회원가입 완료!</Text>
                            <Text style={[styles.text, { fontWeight: '700', color: '#A5A5A7' }]}>FOODiary 와 </Text>
                            <Text style={[styles.text, { fontWeight: '700', color: '#A5A5A7' }]}>함께 기록해요! </Text>
                            <View style={{ width: '86%', marginTop: 'auto', gap: 8 }}>
                                <TouchableOpacity
                                    style={[styles.inputContainer, { justifyContent: 'center', backgroundColor: '#5341E5' }]}
                                    onPress={() => navigation.navigate('Login')}>
                                    <Text style={[styles.text, { color: '#fff' }]}>확인</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </Row>
        </Col>
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
        fontSize: 14,
        fontWeight: '700'
    },
    agreeOptionView: {
        marginTop: 32,
    },
    agreeOptionContainer: {
        marginTop: 24,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ModalView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
    },
    ModalContainer: {
        width: width * 0.7,
        height: height * 0.3,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#fff'
    }
})

const shownPwdIcon = require('../../assets/icons/shownPwdIcon.png');
const completeIcon = require('../../assets/icons/completeIcon.png');


export default SignUp;
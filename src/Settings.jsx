import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window');

const Settings = () => {

    const [isModaVisible, setIsModalVisible] = useState(false);

    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
            console.log('삭제완료!');
        } catch (e) {
            // clear error
        }
        console.log('Done.')
    }



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.showStat}>
                <View style={styles.statDetail}>
                    <Text style={[styles.commonText, { fontSize: 14, color: '#A5A5A7' }]}>
                        작성 글
                    </Text>
                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 24, color: '#5341E5' }]}>
                        100
                    </Text>
                </View>
                <View style={{ width: 1, height: '100%', backgroundColor: '#E8E8E8' }} />
                <View style={styles.statDetail}>
                    <Text style={[styles.commonText, { fontSize: 14, color: '#A5A5A7' }]}>
                        즐겨찾기
                    </Text>
                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 24, color: '#5341E5' }]}>
                        30
                    </Text>
                </View>
            </View>
            <View style={styles.showSetLayout}>
                <View style={styles.showSetView}>
                    <TouchableOpacity 
                        style={styles.showSetContainer}
                        onPress={() => setIsModalVisible(true)}>
                        <Text style={styles.commonText}>데이터 삭제하기</Text>
                        <Image source={goInfoIcon} style={{ width: 9, height: 16 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.showSetView}>
                    <TouchableOpacity style={styles.showSetContainer}>
                        <Text style={styles.commonText}>공지사항</Text>
                        <Image source={goInfoIcon} style={{ width: 9, height: 16 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.showSetView}>
                    <TouchableOpacity style={styles.showSetContainer}>
                        <Text style={styles.commonText}>자주하는 질문</Text>
                        <Image source={goInfoIcon} style={{ width: 9, height: 16 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.showSetView}>
                    <TouchableOpacity style={styles.showSetContainer}>
                        <Text style={styles.commonText}>1 : 1 문의</Text>
                        <Image source={goInfoIcon} style={{ width: 9, height: 16 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.showSetView}>
                    <TouchableOpacity style={styles.showSetContainer}>
                        <Text style={styles.commonText}>이용약관</Text>
                        <Image source={goInfoIcon} style={{ width: 9, height: 16 }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.showSetView}>
                    <TouchableOpacity style={styles.showSetContainer}>
                        <Text style={styles.commonText}>앱 버전</Text>
                        <Image source={goInfoIcon} style={{ width: 9, height: 16 }} />
                    </TouchableOpacity>
                </View>

            </View>
            <Modal
                style={styles.modalLayout}
                isVisible={isModaVisible}
                backdropOpacity={0.5}
                animationIn='bounceIn'
                animationOut='bounceOut'
                onBackdropPress={() => setIsModalVisible(false)}>
                    <View style={styles.modalView}>
                        <Image source={warnIcon} style={{width : 48, height : 48}} />
                        <Text style={[styles.commonText, {fontWeight : '600', fontSize : 18}]}>정말 모든 데이터를 <Text style={{color : '#5341E5'}}>삭제</Text>하실건가요?</Text>
                        <Text style={[styles.commonText, {fontWeight : '600', fontSize : 14, color : '#A5A5A7'}]}>삭제된 데이터는 복구되지 않습니다.</Text>
                        <View style={styles.btnView}>
                        <TouchableOpacity 
                            style={[styles.btnComponent, {backgroundColor : '#E6E5F2'}]}
                            onPress={() => setIsModalVisible(false)}>
                            <Text style={[styles.commonText, {fontWeight : '700'}]}>취소</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.btnComponent, {backgroundColor : '#5341E5'}]}
                            onPress={() => {
                                clearAll
                                setIsModalVisible(false)}}>
                            <Text style={[styles.commonText, {fontWeight : '700', color : '#fff'}]}>확인</Text>
                        </TouchableOpacity>

                        </View>
                        
                    </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    showStat: {
        height: 100,
        flexDirection: 'row',
        paddingHorizontal: width * 0.2,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        borderBottomWidth: 14,
        borderBottomColor: '#E8E8E8',
    },
    statDetail: {
        alignItems: 'center',
        gap: 4,
    },
    showSetLayout: {
        marginTop: 40,
        justifyContent: 'center',
        gap: 16,
    },
    showSetView: {
        paddingHorizontal: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
    },

    showSetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    commonText: {
        fontSize: 16,
    },
    modalLayout : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }, 
    modalView : {
        width : width * 0.84,
        height : height * 0.24,
        backgroundColor : '#fff',
        paddingVertical : 16,
        paddingHorizontal : 16,
        gap : 12,
        // justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 12,
    },
    btnView : {
        width : '100%',
        marginTop : 'auto',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
    },
    btnComponent : {
        width : '48%',
        height : 40,
        justifyContent :'center',
        alignItems : 'center',
        borderRadius : 8,
    }
})

const goInfoIcon = require('../assets/icons/goInfoIcon.png')
const warnIcon = require('../assets/icons/warnIcon.png');

export default Settings;
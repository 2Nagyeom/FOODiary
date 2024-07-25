import React from "react";
import {Modal, View, Image, Text, TouchableOpacity } from 'react-native'

const Modal = ({isModalVisible, onPress}) => {
    return (
        <Modal
            style={styles.modalLayout}
            isVisible={isModaVisible}
            backdropOpacity={0.5}
            animationIn='bounceIn'
            animationOut='bounceOut'
            onBackdropPress={() => setIsModalVisible(false)}>
            <View style={styles.modalView}>
                <Image source={warnIcon} style={{ width: 48, height: 48 }} />
                <Text style={[styles.commonText, { fontWeight: '600', fontSize: 18 }]}>정말 모든 데이터를 <Text style={{ color: '#5341E5' }}>삭제</Text>하실건가요?</Text>
                <Text style={[styles.commonText, { fontWeight: '600', fontSize: 14, color: '#A5A5A7' }]}>삭제된 데이터는 복구되지 않습니다.</Text>
                <View style={styles.btnView}>
                    <TouchableOpacity
                        style={[styles.btnComponent, { backgroundColor: '#E6E5F2' }]}
                        onPress={() => setIsModalVisible(false)}>
                        <Text style={[styles.commonText, { fontWeight: '700' }]}>취소</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnComponent, { backgroundColor: '#5341E5' }]}
                        onPress={() => {
                            clearStoreData()
                            setIsModalVisible(false)
                            setIsToastVisible(true)
                        }}>
                        <Text style={[styles.commonText, { fontWeight: '700', color: '#fff' }]}>확인</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default Modal;


import React from "react";
import { View, StyleSheet, Text, Dimensions,Image, TouchableOpacity } from "react-native";
import Col from "../../Components/Col";
import Row from "../../Components/Row";

const { width } = Dimensions.get('window');


const Settings = () => {
    return (
        <Row bgColor='#F5F5F5'>
            <Col>
                <View style={styles.myInfoView}>
                    <Text style={[styles.text, { fontSize: 20 }]}>맛집 탐방러, <Text style={[styles.text, { fontWeight: '700', fontSize: 20 }]}>이나겸</Text></Text>
                    <Text style={[styles.text, { color: '#969696', fontWeight: '700' }]}>내 정보 수정하기</Text>
                </View>
                <View style={styles.myShopInfoView}>
                    <View style={styles.myShopInfoContainer}>
                        <Text style={[styles.text, {fontWeight : '600', color : '#A5A5A7'}]}>작성 글</Text>
                        <Text style={[styles.text, {fontWeight : '700', fontSize : 24, color : '#5341E5'}]}>7</Text>
                    </View>
                    <View style={{ width: 1, height: '100%', backgroundColor: '#E8E8E8' }} />
                    <View style={styles.myShopInfoContainer}>
                        <Text style={[styles.text, {fontWeight : '600', color : '#A5A5A7'}]}>즐겨찾기 매장</Text>
                        <Text style={[styles.text, {fontWeight : '700', fontSize : 24, color : '#5341E5'}]}>2</Text>
                    </View>
                </View>
                <View style={{ width : width, height: 14, backgroundColor: '#E8E8E8' }} />
                <View style={styles.appInfoView}>
                    <View style={styles.appInfoContainer}>
                        <Text style={[styles.text, {fontSize : 16}]}>공지사항</Text>
                        <TouchableOpacity>
                            <Image source={goInfoIcon} style={{width : 8, height : 14}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appInfoContainer}>
                        <Text style={[styles.text, {fontSize : 16}]}>자주하는 질문</Text>
                        <TouchableOpacity>
                            <Image source={goInfoIcon} style={{width : 8, height : 14}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appInfoContainer}>
                        <Text style={[styles.text, {fontSize : 16}]}>1 : 1 문의</Text>
                        <TouchableOpacity>
                            <Image source={goInfoIcon} style={{width : 8, height : 14}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appInfoContainer}>
                        <Text style={[styles.text, {fontSize : 16}]}>이용약관</Text>
                        <TouchableOpacity>
                            <Image source={goInfoIcon} style={{width : 8, height : 14}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appInfoContainer}>
                        <Text style={[styles.text, {fontSize : 16}]}>앱 버전</Text>
                        <TouchableOpacity>
                            <Image source={goInfoIcon} style={{width : 8, height : 14}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </Col>
        </Row>
    )
}

const styles = StyleSheet.create({
    myInfoView: {
        width: '100%',
        height: 200,
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingBottom: 32,
        gap: 16,

    },
    myShopInfoView: {
        width: width,
        height: 84,
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    myShopInfoContainer: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap : 16,
    },
    appInfoView : {
        width : '100%',
        justifyContent : 'center',
        marginTop : 24,
    },
    appInfoContainer : {
        height : 64,
        justifyContent : 'space-between',
        alignItems : 'center',
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : '#E8E8E8',
    },
    text: {
        fontSize: 14,
    }
})

const goInfoIcon = require('../../assets/icons/goInfoIcon.png');

export default Settings;
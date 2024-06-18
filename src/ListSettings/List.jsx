import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import Row from "../../Components/Row";
import Col from "../../Components/Row";

const { width, height } = Dimensions.get('window');

const List = () => {
    const [optionSelect, setOptionSelect] = useState('TOTAL');

    const renderItem = ({ item }) => {
        return (
            <View style={styles.shopCardView}>
                <View style={styles.shopCardInfoView}>
                    <Image source={dummyImg} style={{ width: 88, height: 88, borderRadius: 8 }} />
                    <View style={styles.shopInfoTextView}>
                        <Text style={[styles.text, { fontWeight: '700', color: '#5341E5' }]}>{item.option}</Text>
                        <Text style={[styles.text, { fontWeight: '700', fontSize: 16 }]}>{item.name}</Text>
                        <Text style={[styles.text, { marginTop : 'auto', fontWeight: '600', color: '#B7B7B7' }]}>{item.visited}</Text>
                    </View>
                </View>
                <View style={styles.shopCardaddInfoView}>
                    <TouchableOpacity>
                        <Image source={starOffIcon} style={{width : 20, height : 20}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop : 'auto'}}>
                        <Image source={menuIcon} style={{width : 18, height : 12}} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <Row bgColor='#F5F5F5'>
            <Col>
                <View style={styles.searchView}>
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchTextInput}
                            placeholder="매장명 또는 주소를 입력해주세요!"
                            placeholderTextColor='#A5A5A7'
                        />
                        <TouchableOpacity>
                            <Image source={searchIcon} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.optionView}>
                    <View style={[styles.optionContainerBar, { width: width * 0.05 }]} />
                    <TouchableOpacity
                        style={[styles.optionContainer, optionSelect == 'TOTAL' && { borderBottomColor: '#5341E5' }]}
                        onPress={() => setOptionSelect('TOTAL')}>
                        <Text style={styles.text}>전체</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionContainer, optionSelect == 'FOOD' && { borderBottomColor: '#5341E5' }]}
                        onPress={() => setOptionSelect('FOOD')}>
                        <Text style={styles.text}>음식점</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionContainer, optionSelect == 'CAFE' && { borderBottomColor: '#5341E5' }]}
                        onPress={() => setOptionSelect('CAFE')}>
                        <Text style={styles.text}>카페</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionContainer, optionSelect == 'BAR' && { borderBottomColor: '#5341E5' }]}
                        onPress={() => setOptionSelect('BAR')}>
                        <Text style={styles.text}>술집</Text>
                    </TouchableOpacity>
                    <View style={[styles.optionContainerBar, { flex: 1 }]} />
                </View>
                <View style={styles.shopListView}>
                    <FlatList
                        data={dummyItem}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </Col>
        </Row>
    )
}

const dummyItem = [
    {
        id: 0,
        introImg: dummyImg,
        option: '음식점',
        name: '뜌레주르',
        visited: '2024.06.17',
        isStar: 'false',
    },
    {
        id: 1,
        introImg: dummyImg,
        option: '음식점',
        name: '뜌레주르',
        visited: '2024.06.17',
        isStar: 'true',
    },
    {
        id: 2,
        introImg: dummyImg,
        option: '음식점',
        name: '뜌레주르',
        visited: '2024.06.17',
        isStar: 'false',
    },
    {
        id: 3,
        introImg: dummyImg,
        option: '음식점',
        name: '뜌레주르',
        visited: '2024.06.17',
        isStar: 'false',
    },
    {
        id: 4,
        introImg: dummyImg,
        option: '음식점',
        name: '뜌레주르',
        visited: '2024.06.17',
        isStar: 'false',
    },
    {
        id: 5,
        introImg: dummyImg,
        option: '음식점',
        name: '뜌레주르',
        visited: '2024.06.17',
        isStar: 'false',
    },
]

const styles = StyleSheet.create({
    searchView: {
        width: width,
        height: 84,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5341E5',
    },
    searchContainer: {
        width: '92%',
        height: 44,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    searchTextInput: {
        fontSize: 14,
        fontWeight: '700'
    },
    optionView: {
        width: width,
        height: 32,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    optionContainerBar: {
        height: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#DCDCDC'
    },
    optionContainer: {
        width: width * 0.16,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderBottomWidth: 2,
        borderBottomColor: '#DCDCDC',
    },
    shopListView: {
        width: '92%',
        marginTop: 40,

    },
    shopCardView: {
        width: '100%',
        height: 112,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 16,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    shopCardInfoView: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexDirection: 'row',
        gap: 16,
    },
    shopInfoTextView: {
        gap: 8,
        height : '100%',
    },
    shopCardaddInfoView: {
        height : '100%',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
    }
})

const searchIcon = require('../../assets/icons/searchIcon.png');
const dummyImg = require('../../assets/imgs/dummyImg.png');
const starOffIcon = require('../../assets/icons/starOffIcon.png');
const starOnIcon = require('../../assets/icons/starOnIcon.png');
const menuIcon = require('../../assets/icons/menuIcon.png');

export default List;
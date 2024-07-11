import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, TextInput, ScrollView, } from "react-native";
import Modal from "react-native-modal";
import dayjs from "dayjs";

const { width, height } = Dimensions.get('window')

const storeOptions = ['전체', '음식점', '카페', '바'];

const List = ({ navigation }) => {
    const [storeList, setStoreList] = useState([]);
    const [storeOption, setStoreOption] = useState(storeOptions[0]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [clickedItemId, setClickedItemId] = useState(null);


    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('storeInfo');

            if (jsonValue !== null) {
                setStoreList(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.log('error ========> ', e);
        }
    };

    const storeOptionItem = (item) => {
        setStoreOption(item)
    }

    const optionItem = ({ item }) => {
        const isSelected = item == storeOption

        return (
            <TouchableOpacity
                style={[styles.optionContainer, { borderBottomColor: isSelected ? '#5341E5' : '#DCDCDC' }]}
                onPress={() => storeOptionItem(item)}
            >
                <Text style={[styles.optionText, { color: isSelected ? '#5341E5' : '#DCDCDC' }]}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item, index }) => {
        const storeDate = dayjs(item.storeDate).format('YYYY.MM.DD')
        const isClickCard = clickedItemId === index;

        return ( 
            isClickCard ? (
                <View style={styles.listDetialContainer}>
                    <View style={styles.listContentView}>
                        <View style={{ gap: 16 }}>
                            <View style={{ gap: 6 }}>
                                <Text style={[styles.commonText, { fontWeight: '700', fontSize: 14, color: '#5341E5' }]}>{item.storeOption}</Text>
                                <View>
                                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 16 }]}>{item.storeName}</Text>
                                    <Text style={[styles.commonText, { fontWeight: '600', fontSize: 12, marginTop: "auto", color: '#A5A5A7' }]}>{storeDate} 날 방문</Text>
                                </View>
                            </View>
                            <View style={{ width: width-16, height: 1, backgroundColor: '#A5A5A7' }} />
                            <ScrollView
                                showsVerticalScrollIndicator={false}>
                                <View style={{gap: 16}}>
                                    <View style={{ gap: 6 }}>
                                        <Text>매장 주소</Text>
                                        <View>
                                            <Text style={[styles.commonText, { fontWeight: '700', fontSize: 16 }]}>{item.mainLocation}</Text>
                                            <Text style={styles.listCardText}>{item.subLocation}</Text>
                                        </View>
                                    </View>
                                    <View style={{ gap: 6 }}>
                                        <Text>매장 점수</Text>
                                        {
                                            item.storeState === 'GOOD' ? (
                                                <View style={{ width: 50, alignItems: 'center' }}>
                                                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 48 }]}>😍</Text>
                                                    <Text style={styles.listCardText}>좋아요!</Text>
                                                </View>
                                            ) : item.storeState === 'COMMON' ? (
                                                <View>
                                                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 48 }]}>🙂</Text>
                                                    <Text style={styles.listCardText}>보통이에요!</Text>
                                                </View>
                                            ) : (
                                                <View>
                                                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 48 }]}>😠</Text>
                                                    <Text style={styles.listCardText}>별로에요!</Text>
                                                </View>
                                            )
                                        }
                                    </View>
                                    <View style={{ gap: 6 }}>
                                        <Text>매장 사진</Text>
                                        {
                                            item.storeImage.map((v, i) => (
                                                <Image source={{ uri: v }} style={styles.listDetailImg} />
                                            ))
                                        }
                                    </View>
                                    <View style={{ gap: 6 }}>
                                        <Text>매장 상세 내용</Text>
                                        <Text style={[styles.commonText, { fontWeight: '600', fontSize: 14 }]}>{item.storeComment}</Text>
                                    </View>
                                </View>
                            </ScrollView>
                            <View style={{ width : width-16, justifyContent: 'space-between', alignItems : 'center', flexDirection: 'row', marginTop: 'auto' }}>
                                <TouchableOpacity
                                    style={styles.goModifiy}>
                                    <Text style={[styles.commonText, { fontWeight: '700', fontSize: 12, color: '#fff' }]}>수정하기</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setClickedItemId(null)}
                                >
                                    <Image source={goListIcon} style={{ width: 18, height: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View >
                </View >
            ) : (
                <View style={[styles.listContainer, { paddingRight: 32 }]}>
                    <View style={styles.listSection}>
                        {
                            item.storeImage.length > 0 ? (
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={{ uri: item.storeImage[0] }} style={styles.listImg} />
                                </View>
                            ) : (
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={insteadImg} style={styles.listImg} />
                                </View>
                            )
                        }
                        <View style={styles.listContentView}>
                            <View style={{ gap: 6, width: '60%' }}>
                                <Text style={[styles.commonText, { fontWeight: '700', fontSize: 14, color: '#5341E5' }]}>{item.storeOption}</Text>
                                <Text style={[styles.commonText, { fontWeight: '700', fontSize: 16 }]}>{item.storeName}</Text>
                                <Text
                                    style={[styles.commonText, { fontSize: 16 }]}
                                    numberOfLines={1}>{item.mainLocation}</Text>
                                <Text style={[styles.commonText, { fontSize: 14 }]}>{item.subLocation}</Text>
                                <Text style={[styles.commonText, { fontWeight: '600', fontSize: 12, marginTop: "auto", color: '#A5A5A7' }]}>{storeDate}</Text>
                            </View>
                            <View>
                                {item.storeStar == 'YES' ? (
                                    <TouchableOpacity>
                                        <Image source={starOnIcon} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity>
                                        <Image source={starOffIcon} style={{ width: 20, height: 20 }} />
                                    </TouchableOpacity>
                                )}
                                <TouchableOpacity
                                    style={{ marginTop: 'auto' }}
                                    onPress={() => setClickedItemId(index)}
                                >
                                    <Image source={goDetailIcon} style={{ width: 18, height: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )
        )
    }


    return (
        <SafeAreaView style={{ backgroundColor: '#F5F5F5', flex: 1 }}>
            <View style={styles.searchSection}>
                <View style={styles.searchBar}>
                    <TextInput
                        style={{ width: '80%' }}
                        placeholder="매장명 또는 주소를 입력하세요 !"
                    />
                    <TouchableOpacity>
                        <Image source={searchIcon} style={{ width: 24, height: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.optionSection}>
                <View style={{ flex: 1, height: '100%', borderBottomWidth: 2, borderBottomColor: '#DCDCDC' }} />
                <FlatList
                    data={storeOptions}
                    renderItem={optionItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    style={{ width: '90%' }}
                />
                <View style={{ flex: 1, height: '100%', borderBottomWidth: 2, borderBottomColor: '#DCDCDC' }} />
            </View>
            <FlatList
                data={storeList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 10 }}
            />
            <Modal
                isVisible={isModalVisible}
                style={styles.modalLayout}
                animationIn='bounceIn'
                animationOut='bounceOut'
                backdropOpacity={0.5}
                onBackdropPress={() => setIsModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text>자세히 보는 창</Text>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchSection: {
        width: width,
        height: height * 0.1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        backgroundColor: '#5341E5'
    },
    searchBar: {
        width: '100%',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 8,
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    optionSection: {
        width: width,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#F5F5F5'
    },
    optionContainer: {
        width: 92,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#DCDCDC'
        // backgroundColor :'blue'
    },
    optionText: {
        fontSize: 16,
        fontWeight: '600',
    },
    listContainer: {
        height: height * 0.18,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    listDetialContainer: {
        width: width,
        height: 400,
        marginBottom: 10,
        padding: 8,
        backgroundColor: '#fff'
    },
    listSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 20,
        paddingLeft: 8,
        paddingRight: 16,
        paddingVertical: 12,
    },
    listContentView: {
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listImg: {
        width: 136,
        height: 136,
    },
    listDetailImg: {
        width: 60,
        height: 60,
    },
    listText: {
        fontWeight: '600',
        fontSize: 16,
    },
    goModifiy : {
        width : 64, 
        height : 22,
        justifyContent: 'center',
        alignItems: 'center',
        padding : 4,
        borderRadius : 6, 
        backgroundColor : '#5341E5'
    },
    viewMoreBtn: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#5341E5',
    },
    modalLayout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        width: width * 0.84,
        height: height * 0.44,
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 16,
        gap: 12,
        // justifyContent : 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    commonText: {
        fontSize: 12,
    },
    listCardText : {
        fontSize : 14,
        fontWeight : '600',
    },
})

const searchIcon = require('../../assets/icons/searchIcon.png')
const insteadImg = require('../../assets/imgs/insteadImg.png')
const starOnIcon = require('../../assets/icons/starOnIcon.png')
const starOffIcon = require('../../assets/icons/starOffIcon.png')
const goDetailIcon = require('../../assets/icons/goDetailIcon.png')
const goListIcon = require('../../assets/icons/goListIcon.png')


export default List;
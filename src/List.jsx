import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, TextInput,  } from "react-native";
import Modal from "react-native-modal";
import dayjs from "dayjs";

const { width, height } = Dimensions.get('window')

const storeOptions = ['전체', '음식점', '카페', '바'];

const List = ({ navigation }) => {
    const [storeList, setStoreList] = useState([]);
    const [storeOption, setStoreOption] = useState(storeOptions[0]);
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    const renderItem = ({ item }) => {
        const storeDate = dayjs(item.storeDate).format('YYYY.MM.DD')

        return (
            <View style={styles.listContainer}>
                <View style={styles.listSection}>
                    {
                        item.storeImage.length > 0 ? (
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{uri : item.storeImage[0]}} style={styles.listImg} />
                                {/* {item.storeImage.map((r, i) => {
                                    return (
                                        <Image key={i} source={{ uri: r }} style={styles.listImg} />
                                    )
                                })} */}
                            </View>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={insteadImg} style={styles.listImg} />
                            </View>
                        )
                    }
                    <View style={{gap : 8, height: '100%' }}>
                        <Text style={[styles.commonText, {fontWeight : '600', fontSize : 14, color : '#5341E5'}]}>{item.storeOption}</Text>
                        <Text style={[styles.commonText, {fontWeight : '700', fontSize : 16}] }>{item.storeName}</Text>
                        <Text style={[styles.commonText, {fontWeight : '600', fontSize : 12, marginTop : 'auto', color : '#A5A5A7'}]}>{storeDate}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', height: '100%' }}>
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
                            style={styles.viewMoreBtn}
                            onPress={() => setIsModalVisible(true)}>
                            <Text style={{ fontSize: 14, fontWeight: '700', color: '#fff' }}>펼쳐보기</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
                style={{ marginTop: 40 }}
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
        height: height * 0.04,
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
        height: height * 0.16,
        marginBottom: 20,
        marginHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#fff'
    },
    listSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    listImg: {
        width: 110,
        height: 110,
        borderRadius: 8,
    },
    listText: {
        fontWeight: '600',
        fontSize: 16,
    },
    viewMoreBtn: {
        width : 80,
        justifyContent: 'center',
        alignItems : 'center',
        marginTop: 'auto',
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#5341E5',
    },
    modalLayout : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    }, 
    modalView : {
        width : width * 0.84,
        height : height * 0.44,
        backgroundColor : '#fff',
        paddingVertical : 16,
        paddingHorizontal : 16,
        gap : 12,
        // justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 12,
    },
    commonText : {
        fontSize : 12,
    }
})

const searchIcon = require('../assets/icons/searchIcon.png')
const insteadImg = require('../assets/imgs/insteadImg.png')
const starOnIcon = require('../assets/icons/starOnIcon.png')
const starOffIcon = require('../assets/icons/starOffIcon.png')


export default List;
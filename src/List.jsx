import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image, StyleSheet, Dimensions, TextInput } from "react-native";
import MoveBtn from "../Components/MoveBtn";

const { width, height } = Dimensions.get('window')

const storeOptions = ['전체', '음식점', '카페', '바'];

const List = ({ navigation }) => {
    const [storeList, setStoreList] = useState([]);
    const [storeOption, setStoreOption] = useState(storeOptions[0]);

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
        return (
            <View style={styles.listContainer}>
                <View style={styles.listSection}>
                    {
                        item.storeImage.length > 0 ? (
                            <View style={{ flexDirection: 'row' }}>
                                {item.storeImage.map((r, i) => {
                                    return (
                                        <Image key={i} source={{ uri: r }} style={styles.listImg} />
                                    )
                                })}
                            </View>
                        ) : (
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={insteadImg} style={styles.listImg} />
                            </View>
                        )
                    }
                    <View>
                        <Text>{item.storeOption}</Text>
                        <Text>{item.storeState}</Text>
                        <Text>{item.storeComment}</Text>
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
                        <TouchableOpacity style={styles.viewMoreBtn}>
                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>펼쳐보기</Text>
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
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    listText: {
        fontWeight: '600',
        fontSize: 16,
    },
    viewMoreBtn: {
        justifyContent: 'center',
        marginTop: 'auto',
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: '#5341E5',
    }
})

const searchIcon = require('../assets/icons/searchIcon.png')
const insteadImg = require('../assets/imgs/insteadImg.png')
const starOnIcon = require('../assets/icons/starOnIcon.png')
const starOffIcon = require('../assets/icons/starOffIcon.png')


export default List;
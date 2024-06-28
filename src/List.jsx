import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View, Image } from "react-native";

const List = ({ navigation }) => {
    const [storeList, setStoreList] = useState([]);

    useEffect(() => {
        getData()
    }, []);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('storeInfo');
            console.log('jsonValue =========> ', jsonValue);
            
            if (jsonValue !== null) {
                setStoreList(JSON.parse(jsonValue));
            }
        } catch (e) {
            console.log('error ========> ', e);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <View style={{marginBottom : 20, backgroundColor : 'red'}}>
                <Text>{item.mainLocation}</Text>
                <Text>{item.subLocation}</Text>
                <Text>{item.storeOption}</Text>
                <Text>{item.storeState}</Text>
                <Text>{item.storeComment}</Text>
                <View style={{ flexDirection : 'row'}}>
                    {item.storeImage.map((r, i) => {
                        return (
                            <Image key={i} source={{uri : r}}  style={{width : 40, height : 40}} />
                        )
                    })}
                </View>
                <Text>{item.storeStar}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <Text>goToMain</Text>
                </TouchableOpacity>
                <FlatList
                    data={storeList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export default List;
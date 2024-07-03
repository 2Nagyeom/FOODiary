import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";


const Settings = () => {

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
        <SafeAreaView>
            <TouchableOpacity onPress={clearAll}>
                <Text>
                    데이터 삭제하기
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Settings;
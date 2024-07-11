import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

const Detail = ({navigation, route}) => {
    console.log('route params =======> ', route);
    return (
        <SafeAreaView>
            <View>
                <Text>Detail</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <Text>Back</Text>
                    </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Detail;
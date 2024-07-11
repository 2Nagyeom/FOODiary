import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getClearData() {
    try {
        await AsyncStorage.clear()
        console.log('삭제완료!');
    } catch (e) {
        console.log('error is ==========> ', e);
    }
    console.log('Done.')
}

export async function getStoreData() {
    try {
        const jsonValue = await AsyncStorage.getItem('storeInfo');

        if (jsonValue !== null) {
            console.log('jsonValue =======> ', jsonValue);
            return JSON.parse(jsonValue)
        } else 
            return []
    } catch (e) {
        console.log('error ========> ', e);
    }
}





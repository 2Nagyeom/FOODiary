import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getStoreData() {
    try {
        const jsonValue = await AsyncStorage.getItem('storeInfo');

        if (jsonValue !== null) {
            return JSON.parse(jsonValue)
        } else
            return []
    } catch (e) {
        console.log('error ========> ', e);
    }
}

export async function clearStoreData() {
    try {
        await AsyncStorage.clear()
        console.log('삭제완료!');
    } catch (e) {
        console.log('error is ==========> ', e);
    }
    console.log('Done.')
}

export async function getCurrLocation() {
    try {
        const jsonValue = await AsyncStorage.getItem('storeLocation');

        if (jsonValue !== null) {
            return JSON.parse(jsonValue)
        } else
            return console.log('no Value');
    } catch (e) {
        console.log('error ========> ', e);
    }
}

export async function saveCurrLocation(location) {
    try {
        const jsonValue = JSON.stringify(location)
        await AsyncStorage.setItem('storeLocation', jsonValue)
    } catch (e) {
        console.log('error ========> ', e);
    }
    console.log(`${location} 이 저장되었습니다!`)
}







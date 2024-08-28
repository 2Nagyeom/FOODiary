import React, {useState} from "react";
import { SafeAreaView, ScrollView, TextInput, View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
// import DatePicker from 'react-native-date-picker'
import AsyncStorage from "@react-native-async-storage/async-storage";


const {width, height} = Dimensions.get('window');

const Detail = ({navigation, route}) => {
    // console.log('route params =======> ', route);
    const {storeGPS, mainLocation, subLocation, storeName, storeComment, storeState, storeImage, storeStar, storeOption} = route.params

    const [date, setDate] = useState(new Date())

    const [editStoreInfo, setEditStoreInfo] = useState({
        storeGPS: {
            latitude: storeGPS.latitude,
            longitude: storeGPS.longitude,
        },
        mainLocation: mainLocation,
        subLocation: subLocation,
        storeName: storeName,
        storeDate: date,
        storeOption: storeOption,
        storeState: storeState,
        storeComment: storeComment,
        storeImage: storeImage,
        storeStar: storeStar
    })
    
    const submitEditInfo = async () => {
        console.log('editStoreInfo ======> ', editStoreInfo);
        console.log('route.params ======> ', route.params); 
        try {
            const jsonValue = await AsyncStorage.getItem('storeInfo');
            const storeInfo = JSON.parse(jsonValue);
            const updatedStoreInfo = { ...storeInfo, ...editStoreInfo };
            await AsyncStorage.setItem('storeInfo', JSON.stringify(updatedStoreInfo));
            console.log('success edit storeInfo');
        } catch (error) {
            console.error('failed edit storeInfo', error);
        }
    } 

    const onChangeValue = (obj, value) => {
        setEditStoreInfo(prev => ({
            ...prev, 
            [obj]: value }
        ))
    }

    const onPickImg = () => {
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            setEditStoreInfo(prev => ({
                ...prev,
                storeImage: (images.map(v => v.sourceURL))
            }))
        });
    }


    return (
        <SafeAreaView style={{flex : 1, backgroundColor : "#fff"}}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                        <Image source={backIcon} style={{width : 10, height : 16}} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => submitEditInfo()}>
                    <Text style={[styles.commonText, {color : '#5341E5'}]}>수정완료</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.scrollLayout}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}>
                        <View style={styles.shopInfoView}>
                            <View style={[styles.gapView, { height: 240 }]}>
                                <Text style={styles.text}>매장 주소</Text>
                                <View style={{ gap: 4 }}>
                                            <Text style={[styles.text, { fontWeight: '700', fontSize: 16 }]}>{editStoreInfo.mainLocation}</Text>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Post')}>
                                        <Text style={[styles.text, { fontWeight: '700', fontSize: 12, color: '#AAAAAA' }]}>주소 바꾸기</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 16, gap: 12 }}>
                                    <View style={styles.shopTextInputContainer}>
                                        <Text style={styles.text}>자세한 주소를 입력해주세요!</Text>
                                        <TextInput
                                            style={styles.shopTextInput}
                                            placeholder={editStoreInfo.subLocation}
                                            onChangeText={value => onChangeValue('subLocation', value)}
                                        />
                                    </View>
                                    <View style={styles.shopTextInputContainer}>
                                        <Text style={styles.text}>매장명을 입력해주세요!</Text>
                                        <TextInput
                                            style={styles.shopTextInput}
                                            placeholder={editStoreInfo.storeName}
                                            onChangeText={value => onChangeValue('storeName', value)}
                                        />
                                    </View>
                                </View>
                            </View>
                            {/* <View style={[styles.gapView, { height: 240 }]}>
                                <Text style={styles.text}>매장에 간 날짜를 선택해주세요!</Text>
                                <View style={styles.datePickerContainer}>
                                    <DatePicker
                                        date={date}
                                        maximumDate={date}
                                        minuteInterval={5}
                                        locale='kor'
                                        onDateChange={setDate} />
                                </View>
                            </View> */}
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장의 유형을 선택해주세요!</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
                                    <TouchableOpacity
                                        style={
                                            editStoreInfo.storeOption == '음식점' ? styles.optionPickerComponent : [styles.optionPickerComponent, { borderColor: '#A5A5A7' }]}
                                        onPress={() => onChangeValue('storeOption', '음식점')}>
                                        <Image source={foodIcon} style={{ width: 80, height: 80 }} />
                                        <Text style={
                                            editStoreInfo.storeOption == '음식점' ? [styles.text, { fontWeight: '700', color: '#5341E5' }]
                                                : [styles.text, { color: '#A5A5A7' }]}>음식점</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={
                                            editStoreInfo.storeOption == '카페' ? styles.optionPickerComponent : [styles.optionPickerComponent, { borderColor: '#A5A5A7' }]}
                                        onPress={() => onChangeValue('storeOption', '카페')}>
                                        <Image source={cafeIcon} style={{ width: 80, height: 80 }} />
                                        <Text style={
                                            editStoreInfo.storeOption == '카페' ? [styles.text, { fontWeight: '700', color: '#5341E5' }]
                                                : [styles.text, { color: '#A5A5A7' }]}>카페</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={
                                            storeOption == '술집' ? styles.optionPickerComponent : [styles.optionPickerComponent, { borderColor: '#A5A5A7' }]}
                                        onPress={() => onChangeValue('storeOption', '술집')}>
                                        <Image source={barIcon} style={{ width: 80, height: 80 }} />
                                        <Text style={
                                            storeOption == '술집' ? [styles.text, { fontWeight: '700', color: '#5341E5' }]
                                                : [styles.text, { color: '#A5A5A7' }]}>바</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장은 어떠셨나요?</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
                                    <TouchableOpacity
                                        style={styles.conditionPickerComponent}
                                        onPress={() => onChangeValue('storeState', 'GOOD')}
                                    >
                                        <Text style={
                                            editStoreInfo.storeState == 'GOOD' ? [styles.text, { fontSize: 48 }]
                                                : [styles.text, { fontSize: 40 }]}>😍</Text>
                                        <Text style={
                                            editStoreInfo.storeState == 'GOOD' ? [styles.text, { fontWeight: '700', color: '#5341E5' }]
                                                : [styles.text, { fontWeight: '500', color: '#A5A5A7' }]}>좋았어요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.conditionPickerComponent}
                                        onPress={() => onChangeValue('storeState', 'COMMON')}
                                    >
                                        <Text style={
                                            editStoreInfo.storeState == 'COMMON' ? [styles.text, { fontSize: 48 }]
                                                : [styles.text, { fontSize: 40 }]}>🙂</Text>
                                        <Text style={
                                            editStoreInfo.storeState == 'COMMON' ? [styles.text, { fontWeight: '700', color: '#5341E5' }]
                                                : [styles.text, { fontWeight: '500', color: '#A5A5A7' }]}>보통이에요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.conditionPickerComponent}
                                        onPress={() => onChangeValue('storeState', 'BAD')}
                                    >
                                        <Text style={
                                            editStoreInfo.storeState == 'BAD' ? [styles.text, { fontSize: 48 }]
                                                : [styles.text, { fontSize: 40 }]}>😠</Text>
                                        <Text style={
                                            editStoreInfo.storeState == 'BAD' ? [styles.text, { fontWeight: '700', color: '#5341E5' }]
                                                : [styles.text, { fontWeight: '500', color: '#A5A5A7' }]}>별로에요!</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장에 대한 이야기를 써주세요!</Text>
                                <TextInput
                                    style={styles.shopDetailText}
                                    placeholder={editStoreInfo.storeComment}
                                    textAlignVertical="top"
                                    multiline={true}
                                    numberOfLines={100}
                                    onChangeText={value => onChangeValue('storeComment', value)}
                                />
                            </View>
                            <View style={[styles.gapView, { gap: 4, height: 180 }]}>
                                <Text style={styles.text}>매장에 대한 사진을 등록해주세요!</Text>
                                {
                                    editStoreInfo.storeImage.length > 0 ? (
                                        <>
                                            <ScrollView
                                                showsHorizontalScrollIndicator={false}
                                                horizontal={true}>
                                                {storeImage.map(v => (<Image source={{ uri: v }} style={{ width: 100, height: 100, borderRadius: 8, marginRight: 4 }} />))}
                                            </ScrollView>
                                            <TouchableOpacity
                                                onPress={() => onPickImg()}>
                                                <Text style={[styles.text, { fontWeight: '700', color: '#5341E5' }]}>사진 다시 고르기</Text>
                                            </TouchableOpacity>
                                        </>
                                    ) : (
                                        <TouchableOpacity
                                            onPress={() => onPickImg()}>
                                            <Text style={[styles.text, { marginLeft: 20, color: '#A5A5A7' }]}>사진 등록하기...</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장을 즐겨찾기 하시겠어요?</Text>
                                <View style={styles.chooseView}>
                                    <TouchableOpacity
                                        style={
                                            editStoreInfo.storeStar == 'YES' ? [styles.chooseContainer, { backgroundColor: '#5341E5', borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }]
                                                : [styles.chooseContainer, { borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }]}
                                        onPress={() => onChangeValue('storeStar', 'YES')}>
                                        <Text style={
                                            editStoreInfo.storeStar == 'YES' ? [styles.text, { fontWeight: '600', color: '#fff' }]
                                                : [styles.text, { color: '#A5A5A7' }]}>할래요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={
                                            editStoreInfo.storeStar == 'NO' ? [styles.chooseContainer, { backgroundColor: '#5341E5', borderTopRightRadius: 6, borderBottomRightRadius: 6 }] :
                                                [styles.chooseContainer, { borderTopRightRadius: 6, borderBottomRightRadius: 6 }]}
                                        onPress={() => onChangeValue('storeStar', 'NO')}>
                                        <Text style={
                                            editStoreInfo.storeStar == 'NO' ? [styles.text, { fontWeight: '600', color: '#fff' }]
                                                : [styles.text, { color: '#A5A5A7' }]}>안할래요!</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    topBar : {
        width : width,
        height : 40,
        flexDirection : 'row',
        justifyContent :'space-between',
        alignItems : 'center',
        paddingHorizontal : 16,
        paddingVertical : 12,
    },
    scrollLayout : {
        marginTop : 20,
        paddingHorizontal : 16,
        gap : 8,
    },
    shopInfoView: {
        height: '100%',
        alignItems: 'flex-start',
        marginBottom: 40,
        gap: 32,
    },
    gapView: {
        width: '100%',
        gap: 8,
    },
    shopTextInputContainer: {
        gap: 8
    },
    shopTextInput: {
        width: 240,
        height: 40,
        paddingHorizontal: 8,
        backgroundColor: '#E9E9EB',
        borderRadius: 8
    },
    datePickerContainer: {
        height: '80%',
    },
    optionPickerComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#5341E5',
        height: 140,
    },
    conditionPickerComponent: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    shopDetailText: {
        height: 140,
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#E9E9EB',
    },
    chooseView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    chooseContainer: {
        flex: 1,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#5341E5',
        backgroundColor: '#fff',
    },
    inputContainer: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#5341E5',
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
    },
    commonText : {
        fontSize : 16,
        fontWeight : '700',
    },
})

const backIcon = require('../../assets/icons/backIcon.png')
const foodIcon = require('../../assets/icons/foodIcon.png');
const cafeIcon = require('../../assets/icons/cafeIcon.png');
const barIcon = require('../../assets/icons/barIcon.png');

export default Detail;
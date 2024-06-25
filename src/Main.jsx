import { NaverMapView } from "@mj-studio/react-native-naver-map";
import React, { useRef, useState } from "react";
import { Dimensions, View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, TextInput } from "react-native";
import Modal from "react-native-modal";
import GCAPI from "../APIs/reGEO";

const { width, height } = Dimensions.get('screen');

const Main = () => {
    const mapRef = useRef(null);
    const scrollViewRef = useRef(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pickedLocation, setPickedLocation] = useState('');
    const [detailLocation, setDetailLocation] = useState({
        subLocation : '',
        storeName : '',
    });

    const handleOnScroll = event => {
        setScrollOffset(event.nativeEvent.contentOffset.y);
    };

    const handleScrollTo = p => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };

    const onTapMap =  async event => {
        const res = await GCAPI(event.latitude, event.longitude)
        setPickedLocation(res)
        setIsModalVisible(true);
    }

    const onChangeText = (name, value) => {
        setDetailLocation({
            ...detailLocation,
            [name] : value,
        })
    }


    return (
        <SafeAreaView>
            <NaverMapView
                ref={mapRef}
                style={{ width: width, height: height }}
                initialRegion={{
                    latitude: 35.1578157,
                    longitude: 129.0600331,
                    latitudeDelta : 0.00005,
                    longitudeDelta : 0.0028
                }}
                isShowLocationButton={true}
                // onInitialized={() => console.log('initialized!')}
                // onOptionChanged={() => console.log('Option Changed!')}
                // onCameraChanged={(args) => console.log(`Camera Changed: ${formatJson(args)}`)}
                onTapMap={onTapMap}
            />
            <Modal
                testID={'modal'}
                isVisible={isModalVisible}
                onSwipeComplete={handleClose}
                swipeDirection={['down']}
                scrollTo={handleScrollTo}
                scrollOffset={scrollOffset}
                scrollOffsetMax={400 - 300} // content height - ScrollView height
                propagateSwipe={true}
                style={styles.modal}
                onBackdropPress={() => setIsModalVisible(false)}
            >
                <View style={styles.scrollableModal}>
                    <View style={{ height: 32, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: 100, height: 4, borderRadius: 8, backgroundColor: "#AAAAAA" }} />
                    </View>
                    <ScrollView
                        ref={scrollViewRef}
                        onScroll={handleOnScroll}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}>
                        <View style={styles.shopInfoView}>
                            <View style={[styles.gapView, { height: 240 }]}>
                                <Text style={styles.text}>매장 주소</Text>
                                <View style={{ gap: 4 }}>
                                    <Text style={[styles.text, { fontWeight: '700', fontSize: 16 }]}>{pickedLocation}</Text>
                                    <TouchableOpacity>
                                        <Text style={[styles.text, { fontWeight: '700', fontSize: 12, color: '#AAAAAA' }]}>이 주소가 아니신가요?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginTop: 16, gap: 12 }}>
                                    <View style={styles.shopTextInputContainer}>
                                        <Text style={styles.text}>자세한 주소를 입력해주세요!</Text>
                                        <TextInput
                                            style={styles.shopTextInput}
                                            placeholder="예) 2층 또는 골목길 들어가기"
                                            onChangeText={value => onChangeText('subLocation', value)}
                                        />
                                    </View>
                                    <View style={styles.shopTextInputContainer}>
                                        <Text style={styles.text}>매장명을 입력해주세요!</Text>
                                        <TextInput
                                            style={styles.shopTextInput}
                                            placeholder="매장 이름"
                                            onChangeText={value => onChangeText('storeName', value)}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.gapView, { height: 240 }]}>
                                <Text style={styles.text}>매장에 간 날짜를 선택해주세요!</Text>
                                <View style={styles.datePickerContainer}></View>
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장의 유형을 선택해주세요!</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
                                    <TouchableOpacity style={styles.optionPickerComponent}>
                                        <Image source={foodIcon} style={{ width: 80, height: 80 }} />
                                        <Text style={[styles.text, { fontWeight: '600', color: '#A5A5A7' }]}>음식점</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.optionPickerComponent}>
                                        <Image source={cafeIcon} style={{ width: 80, height: 80 }} />
                                        <Text style={[styles.text, { fontWeight: '600', color: '#A5A5A7' }]}>카페</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.optionPickerComponent}>
                                        <Image source={barIcon} style={{ width: 80, height: 80 }} />
                                        <Text style={[styles.text, { fontWeight: '600', color: '#A5A5A7' }]}>바</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장은 어떠셨나요?</Text>
                                <View style={{ alignItems: 'center', flexDirection: 'row', gap: 16 }}>
                                    <TouchableOpacity style={styles.conditionPickerComponent}>
                                        <Text style={[styles.text, { fontWeight: '600', fontSize: 40 }]}>😍</Text>
                                        <Text style={[styles.text, { fontWeight: '600', color: '#A5A5A7' }]}>좋았어요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.conditionPickerComponent}>
                                        <Text style={[styles.text, { fontWeight: '600', fontSize: 40 }]}>🙂</Text>
                                        <Text style={[styles.text, { fontWeight: '600', color: '#A5A5A7' }]}>그냥그랬어요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.conditionPickerComponent}>
                                        <Text style={[styles.text, { fontWeight: '600', fontSize: 40 }]}>😠</Text>
                                        <Text style={[styles.text, { fontWeight: '600', color: '#A5A5A7' }]}>별로에요!</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장에 대한 이야기를 써주세요!</Text>
                                <TextInput
                                    style={styles.shopDetailText}
                                    placeholder="매장 음식 퀄리티가 좋았다.."
                                    textAlignVertical="top"
                                    multiline={true}
                                    numberOfLines={100}
                                />
                            </View>
                            <View style={[styles.gapView, { height: 100 }]}>
                                <Text style={styles.text}>매장에 대한 사진을 등록해주세요!</Text>
                                <TouchableOpacity>
                                    <Text style={[styles.text, { marginLeft: 20, color: '#A5A5A7' }]}>사진 등록하기...</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.gapView}>
                                <Text style={styles.text}>매장을 즐겨찾기 하시겠어요?</Text>
                                <View style={styles.chooseView}>
                                    <TouchableOpacity style={[styles.chooseContainer, { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }]}>
                                        <Text style={[styles.text, { color: '#A5A5A7' }]}>할래요!</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.chooseContainer, { borderTopRightRadius: 8, borderBottomRightRadius: 8 }]}>
                                        <Text style={[styles.text, { color: '#A5A5A7' }]}>안할래요!</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={[styles.gapView, { alignItems: 'center' }]}>
                                <Text style={[styles.text, { color: '#A5A5A7' }]}>나중에 쓰기</Text>
                                <TouchableOpacity
                                    style={[styles.inputContainer, {  }]}
                                    onPress={() => console.log(detailLocation)}>
                                    <Text style={[styles.text, { fontWeight : '700', fontSize : 16, color: '#fff' }]}>완료</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        height: height * 0.8,
        margin: 0,
    },
    scrollableModal: {
        height: height * 0.8,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    shopInfoView: {
        height: '100%',
        alignItems: 'flex-start',
        marginTop: 32,
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
        backgroundColor: 'skyblue',
    },
    optionPickerComponent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#A5A5A7',
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
        width : '100%',
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
    }
})

const foodIcon = require('../assets/icons/foodIcon.png');
const cafeIcon = require('../assets/icons/cafeIcon.png');
const barIcon = require('../assets/icons/barIcon.png');

export default Main;
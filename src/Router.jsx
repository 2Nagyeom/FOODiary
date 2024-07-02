import React from "react";
import { Image, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Splash from "./Splash";
import Main from "./Main";
import List from "./List";
import Settings from "./Settings";
import MoveBtn from "../Components/MoveBtn";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTab = ({navigation}) => {
    return (
        <>
        <Tab.Navigator 
            screenOptions={({route}) => ({ 
                tabBarStyle : {position : 'absoulte', backgroundColor : '#E9E9EB'},
                headerShown : false,
                tabBarIcon : ({focused}) => {
                    let iconName;
                    if (route.name === 'List') {
                        iconName = focused? require('../assets/icons/listOnIcon.png') : require('../assets/icons/listOffIcon.png');
                    } else if (route.name === 'Settings') {
                        iconName = focused? require('../assets/icons/settingOnIcon.png') : require('../assets/icons/settingOffIcon.png');
                    } 
                    return <Image source={iconName} style={{width : 24, height : 24}} />
                },
                tabBarActiveTintColor: '#5341E5', // 포커스 될 때 타이틀 색상
                tabBarInactiveTintColor: '#A5A5A7', // 포커스 되지 않았을 때 타이틀 색상
                })}>
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        <MoveBtn onPress={navigation.goBack}/>
        </>
    )
}

const Router = () => {
    return (
        <>
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='BottomTab' component={BottomTab} />
        </Stack.Navigator>
        </>
    )
}

export default Router;
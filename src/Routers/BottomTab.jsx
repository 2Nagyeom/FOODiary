import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image } from "react-native";

import Main from "../Home/Main";
import Register from "../Home/Register";
import List from "../ListSettings/List";
import Settings from "../ListSettings/Settings";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({ 
                tabBarStyle : {position : 'absoulte', backgroundColor : '#E9E9EB'},
                headerShown : false,
                tabBarIcon : ({focused}) => {
                    let iconName;
                    if (route.name === 'Main') {
                        iconName = focused? require('../../assets/icons/homeOnIcon.png') : require('../../assets/icons/homeOffIcon.png');
                    } else if (route.name === 'Register') {
                        iconName = focused? require('../../assets/icons/regOnIcon.png') : require('../../assets/icons/regOffIcon.png');
                    } else if (route.name === 'List') {
                        iconName = focused? require('../../assets/icons/listOnIcon.png') : require('../../assets/icons/listOffIcon.png');
                    } else if (route.name === 'Settings') {
                        iconName = focused? require('../../assets/icons/settingOnIcon.png') : require('../../assets/icons/settingOffIcon.png');
                    }
                    return <Image source={iconName} style={{width : 24, height : 24}} />
                },
                tabBarActiveTintColor: '#5341E5', // 포커스 될 때 타이틀 색상
                tabBarInactiveTintColor: '#A5A5A7', // 포커스 되지 않았을 때 타이틀 색상
                })}>
            <Tab.Screen name='Main' component={Main} />
            <Tab.Screen name="Register" component={Register} />
            <Tab.Screen name="List" component={List} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default BottomTab;
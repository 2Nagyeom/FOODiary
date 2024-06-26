import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "./Splash";
import Main from "./Main";
import Post from "./Post";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Post' component={Post} />
        </Stack.Navigator>
    )
}

export default Router;
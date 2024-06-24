import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "./Splash";
import Main from "./Main";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
    )
}

export default Router;
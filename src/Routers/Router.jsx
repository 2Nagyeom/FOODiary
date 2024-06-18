import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Splash from "../Introduce/Splash";
import Introduce1 from "../Introduce/Introduce1";
import Introduce2 from "../Introduce/Introduce2";
import Introduce3 from "../Introduce/Introduce3";
import Login from "../LoginSign/Login";
import Reset from "../LoginSign/Reset";
import SignUp from "../LoginSign/SignUp";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const IntroduceStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Introduce1' component={Introduce1} />
            <Stack.Screen name='Introduce2' component={Introduce2} />
            <Stack.Screen name='Introduce3' component={Introduce3} />
        </Stack.Navigator>
    )
}

const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown :false}}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Reset" component={Reset} />
        </Stack.Navigator>
    )
}



const Router = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}}>
            <Stack.Screen name='BottomTab' component={BottomTab} />
            <Stack.Screen name='IntroduceStack' component={IntroduceStack} />
            <Stack.Screen name="LoginStack" component={LoginStack} />
        </Stack.Navigator>
    )
}

export default Router;
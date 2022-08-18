import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SelectAction from '../../Components/selectAction';
import OnBoard from '../../Components/OnBoard';
import LoginScreen from '../../Components/LoginScreen';
import RegisterScreen from '../../Components/RegisterScreen';
import OfflineNotice from '../../Components/OfflineNotice';

const Stack = createStackNavigator();
 
const AuthNavigator = () => (
    <>
        <OfflineNotice />
        <Stack.Navigator >
            <Stack.Screen
                name='OnBoard'
                component={OnBoard}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Register'
                component={RegisterScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='SelectAction'
                component={SelectAction}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    </>

)

export default AuthNavigator;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Notifications from '../../Components/NotificationScreen';
import AccountScreen from '../../Components/AccountScreen'
import ListingEditScreen from '../../Components/ListingEditScreen';
import Order from '../../Components/Order';
import OfflineNotice from '../../Components/OfflineNotice';
import OrderHistory from '../../Components/OrderHistory';
import ShopScreen from '../../Components/ShopScreen';
import Header from '../../Components/Header'

const Stack = createStackNavigator();

const AccountNavigator = ({navigation, route}) => (

       <>    

       
            
        <OfflineNotice />

              {/* if (route.state && route.state.index > 0) {
                navigation.setOptions({ tabBarVisible: false}) 
                
            }else{
                    navigation.setOptions({tabBarVisible: true})
            } */}
            
        <Stack.Navigator >
            
            <Stack.Screen
                name='Account'
                component={AccountScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Notifications'
                component={Notifications}
                options={{
                    headerShown: false
                }}

            />

            <Stack.Screen
                name='ListingEditScreen'
                component={ListingEditScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='My Bag'
                component={Order}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Order History'
                component={OrderHistory}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Shop Screen'
                component={ShopScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    </>
)

export default AccountNavigator;
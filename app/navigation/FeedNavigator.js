import React  from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from '../../Components/DetailsScreen';
import ListingsScreen from '../../Components/ListingsScreen';
import AccountScreen from '../../Components/AccountScreen';
import OfflineNotice from '../../Components/OfflineNotice';
import AccountNavigator from './AccountNavigator';
import ShopScreen from '../../Components/ShopScreen';
import PostScreen from '../../Components/PostScreen';
import Header from '../../Components/Header';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <>
    <OfflineNotice />
    <Stack.Navigator 
        screenOptions={{
                presentation: "modal"
            }}
    >
           <Stack.Screen 
                name='ListingsScreen'
                component={ListingsScreen}
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                }}
            />
            <Stack.Screen 
                name='DetailsScreen'
                component={DetailsScreen}
                options={{
                    headerShown: false,
                    tabBarVisible: false
                }}
            />

        <Stack.Screen 
                name='AccountScreen'
                component={AccountScreen}
                options={{
                    headerShown: false,
                    tabBarVisible: false
                }}
            />

        <Stack.Screen 
                name='ShopScreen'
                component={ShopScreen}
                options={{
                    headerShown: false
                }}
            />

                <Stack.Screen 
                     name='PostScreen'
                     component={PostScreen}
                     options={{
                         headerShown: false
                     }}
                 />

    </Stack.Navigator>
    </>
)

export default FeedNavigator;
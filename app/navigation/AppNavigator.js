import React, { useContext, useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// icons
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
// screens
import NotificationScreen from "../../Components/NotificationScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import RideOrder from "../../Components/RideOrder";
import Order from "../../Components/Order";
import OfflineNotice from "../../Components/OfflineNotice";

import useNotifications from '../hooks/useNotifications';
import AppContext from "../../bigstore/cstore/compstore";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const { User_Cart } = useContext(AppContext)

    const [Cart, setCart] = useState();

    useEffect(() => {

        setCart(User_Cart)

    }, [User_Cart])

    useNotifications();
    return (
        <>
            <OfflineNotice />
            <Tab.Navigator>

                <Tab.Screen
                    name="Home" component={FeedNavigator}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) =>
                            <AntDesign name="home" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name="Notifications" component={NotificationScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) =>
                            <Ionicons name="notifications" size={size} color={color} />
                    }}
                />

                <Tab.Screen
                    name="RideOrder"
                    component={RideOrder}
                    options={({ navigation, route }) => ({
                        headerShown: false,
                        tabBarButton: () =>
                            <NewListingButton onPress={() => navigation.navigate("RideOrder")} />,
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons
                                name="plus-circle"
                                color={color}
                                size={size}
                            />)
                    })}
                />

                <Tab.Screen
                    name="My Bag" component={Order}
                    options={{
                        tabBarBadge: Cart && Cart.cart_products ? Cart.cart_products.length : 0,
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                        tabBarIcon: ({ color, size }) =>
                            <FontAwesome5
                                name="shopping-bag"
                                color={color}
                                size={size}
                            />
                    }}
                />

                <Tab.Screen
                    name="Profile" component={AccountNavigator}
                    options={{
                        headerShown: false,
                        tabBarStyle: { display: 'none' },
                         tabBarVisible: false,
                        tabBarIcon: ({ color, size }) =>
                            <MaterialCommunityIcons
                                name="account"
                                color={color}
                                size={size}
                            />
                            
                    }}
                />


            </Tab.Navigator>
        </>
    );
};

export default AppNavigator;
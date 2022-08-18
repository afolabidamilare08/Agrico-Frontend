import React, { useContext } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from 'react-native';

import Screen from './Screen';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ShopScreen from './ShopScreen';
import AppText from './AppText';
import routes from '../app/navigation/routes'
import useAuth from '../app/auth/useAuth';
import AppContext from '../bigstore/cstore/compstore';


function AccountScreen({navigation}) {

        // const {user, logOut} = useAuth();

        const { User_details,User_Cart, LogOut } = useContext(AppContext)  

        const user = User_details

    return ( 

        <Screen >
                   
                <View style={styles.profileContainer}>
                    <View style={styles.elevation}>
                        <Image
                        source={require("../assets/profile.jpg")}
                        style={styles.profilePic}
                        />  
                        
                        <TouchableOpacity style={styles.editIconContainer}>
                        <FontAwesome5 
                           name="user-edit"
                           color={colors.white}
                           size={18}
                           style={styles.editIcon}
                         />
             </TouchableOpacity>
                      
                     </View>

                     <AppText style={styles.profileName}>
                     {user.full_name}
                     </AppText>
                     <AppText style={styles.profileEmail}>
                          {user.email}
                     </AppText>
                   
                </View>
                
        
                <ScrollView style={styles.listContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.ORDER)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>    
                                <FontAwesome5 
                                        name="shopping-bag"
                                        color={colors.primary}
                                        size={24}
                                        />
                                    <AppText style={styles.profileListingsText}>
                                                My Bag
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={() => navigation.navigate(routes.NOTIFICATIONS)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center", }}>
                            <MaterialCommunityIcons name="bell" size={24} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                                Notifications
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(routes.SHOP_SCREEN)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Fontisto name="shopping-store" size={24} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                                Own your Shop
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>

                    
                    <TouchableOpacity onPress={() => navigation.navigate(routes.SHOP_SCREEN)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <MaterialCommunityIcons name="bike-fast" size={29} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                                Become a Logistics Company
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => navigation.navigate(routes.LISTING_EDIT)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Fontisto name="wallet" size={24} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                              My Store
                                </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(routes.ORDER_HISTORY)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <Fontisto name="opencart" size={24} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                                My Orders
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(routes.RIDEORDER)}>
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <MaterialCommunityIcons name="bike-fast" size={24} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                                Deliver A Package
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => LogOut()}
                     >
                            <View style={styles.profileListings}>
                            <View style={{flexDirection: 'row', alignItems:"center"}}>
                            <MaterialCommunityIcons name="exit-run" size={24} color={colors.primary} />
                                    <AppText style={styles.profileListingsText}>
                                                Logout
                                    </AppText>
                            </View>
                                    <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
                            </View>
                    </TouchableOpacity>
                                        {/* 
                                             <FlatList 
                                                data={profileItems}
                                                keyExtractor={profileItem => profileItem.id.toString()}
                                                renderItem={({item }) => 
                                                    <View style={styles.profileListings}>
                                                    <AppText style={styles.profileListingsText}>
                                                                    {profileItems.title}
                                                    </AppText>
                                                  <MaterialCommunityIcons name="chevron-right" size={24} color={colors.secondary} />
                                                    </View>
                                                }
                                                /> */}
                </ScrollView>
            

        </Screen>

    );
}

const styles = StyleSheet.create({

    listContainer:{ 
        backgroundColor: colors.white   
    },

        profileContainer:{
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 25,
            borderBottomRightRadius: 25,
        //     marginTop: -40
        },

        profilePic: {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderColor: colors.secondary,
            borderWidth: 9,
        },
        elevation: {
            elevation: 10,
             shadowColor: colors.black,
             width: 200,
             height: 200,
             borderRadius: 100,
          },

          editIconContainer:{
              borderWidth: 3,
              borderColor: colors.white,
              backgroundColor: colors.secondary,
              padding: 4,
              width: 40,
              height: 40,
              borderRadius: 50,
              marginTop: -40,
              marginLeft: 130,
              alignItems: "center",
              justifyContent: "center"
          },

          editIcon: {
                marginLeft: 4
          },

          profileName:{
              fontWeight: 'bold',
              fontSize: 25,
              marginTop: 20
          },

          profileEmail:{
              color: colors.gray,
              marginBottom: 50
          },

          profileListings:{
              padding: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between'
          },

          profileListingsText:{
                padding: 5,
                fontWeight: "bold",
                marginLeft: 15
          }
    
})

export default AccountScreen;
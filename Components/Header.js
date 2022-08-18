import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity,} from 'react-native';
import colors from '../config/colors';
import Screen from './Screen';
import { FontAwesome } from '@expo/vector-icons';
import AccountScreen from './AccountScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import routes from '../app/navigation/routes';
import { useNavigation } from '@react-navigation/native';


function Header (props) {

    const navigation = useNavigation(); 

return (
                <View style={[styles.container, props.style]}>
                    <Image
                    source={require("../assets/agrico.png")}
                    style={styles.headerLogo}
                     />

                    <View style={{flexDirection:"row", padding: 10, alignItems: "center"}}>
                        <TouchableOpacity onPress={() => navigation.navigate(routes.SHOP_SCREEN)}>
                        <Fontisto
                         name="shopping-store" 
                         size={24} 
                        color={colors.primary} 
                               style={styles.topIcon}
                          />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(routes.ORDER)}>

                        <FontAwesome5 
                        name="shopping-bag" 
                        size={24} 
                        color={colors.primary} 
                        style={styles.topIcon}
                        />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate(routes.ACCOUNT)}>

                        <MaterialCommunityIcons
                                name="account"
                                color={colors.primary}
                                size={24}
                             />
                        </TouchableOpacity>
                    </View>
                </View>
   );
 }


const styles = StyleSheet.create({
container:{
        padding: 10,
        // borderBottomLeftRadius: 20,
        // borderBottomRightRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    textHeader:{
        color: colors.primary,
        fontSize:25,
        fontWeight: "bold"
    },

    headerLogo:{
        marginLeft: 6,
        height: 50,
        width: 50,
        padding: 10
    }, 

    topIcon:{
        marginRight: 18
    }
 })
export default Header;
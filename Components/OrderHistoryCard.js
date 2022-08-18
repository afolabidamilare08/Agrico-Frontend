import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Screen from './Screen';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';


function OrderHistoryCard (props) {
    
return (
    <View style={styles.container}>
               {/* <View style={styles.orderHCTitleContainer}>
                       <View style={styles.orderHCTContainer}>
                                       <Text style={styles.orderHCTitle}>Order #{props.orderNo}</Text>
                                       <Text style={styles.orderHCDate}>{props.orderDate}</Text>
                       </View>
                       <TouchableOpacity style={styles.orderHCDropDowm}>
                               <AntDesign name="caretdown" size={24} color={colors.primary} />
                       </TouchableOpacity>
               </View> */}

               <View style={styles.orderHCItem}>
                       <View style={styles.orderHCImgC}>
                                   <Image 
                                           source={{uri:props.orderImg}}
                                           style={styles.orderHCImg}
                                   />
                       </View>
                       <View style={styles.orderHCInfo}>
                               <View style={styles.orderHCItemHeader}>
                                           <Text style={styles.orderHCItemTitle}>
                                                           {props.orderName}
                                           </Text>
                                           <Text style={styles.orderHCItemDesc} numberOfLines={1}>
                                                       {props.orderDesc}
                                           </Text>
                               </View>

                               <View style={styles.orderHCPQ}>
                                       <Text style={styles.orderHCPQT}>₦{props.orderPrice}</Text>
                                       <Text style={styles.orderHCPQT}>{props.orderQuantity}</Text>
                               </View>


                       </View>
               </View>

             
           </View>
   );
 }


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },

    orderHCContainer:{
        padding: 10,
        borderRadius: 8,
        borderWidth: 0,
        // elevation: 5
    },
    
    orderHCTitleContainer:{
        padding: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    orderHCTitle:{
            fontWeight: "bold",
            fontSize: 16,
            color: colors.primary
    },
    
    orderHCDate:{
    color: colors.gray
    },
    
    orderHCItem:{
        flexDirection: 'row',
        padding: 5,
        borderTopWidth:1, 
        borderColor: colors.offwhite
    },
    
    orderHCImgC:{
        width: "10%",
        height:60,
        marginRight:5
    },
    
    orderHCImg:{
        width: "100%",
        height:60,
        borderRadius: 5
    },
    
    orderHCInfo:{
        padding: 5,
        width: "70%"
    },
    
    orderHCItemTitle: {
        fontWeight: "bold",
    
    },
    
    orderHCItemDesc:{
        color: colors.gray,
        fontSize: 12
    },
    
    orderHCPQ:{
        flexDirection: 'row',
        justifyContent: "space-between",
        fontWeight: "bold",
        paddingTop: 5
    },
    
    orderHCPQT:{
        fontWeight: "bold",
    }
 })
export default OrderHistoryCard;
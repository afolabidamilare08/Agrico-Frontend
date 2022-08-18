import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image,FlatList} from 'react-native';
import OrderHistoryCard from './OrderHistoryCard';
import Screen from './Screen';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';

function OrderHistoryMegaCard (props) {

return (

            <View style={styles.container}>        
                <View style={styles.orderHCContainer}>
                <View style={styles.orderHCTitleContainer}>
                            <View style={styles.orderHCTContainer}>
                                            <Text style={styles.orderHCTitle}>Order #{props.id}</Text>
                                            <Text style={styles.orderHCDate}>{props.date}</Text>
                                            <Text style={{color: props.statusColor, fontWeight: "bold"}}>Status: {props.status}</Text>
                            </View>
                            <TouchableOpacity onPress={props.toggle} style={styles.orderHCDropDowm}>
                                    <AntDesign name="caretdown" size={24} color={colors.primary} />
                            </TouchableOpacity>
                </View>
                    {props.list}
                </View>
                <View style={styles.orderHCTitleContainer}>
                            <View style={styles.orderHCTContainer}>
                                            <Text style={styles.orderHCTitle}>subTotal: ₦{props.subTotal}</Text>
                                            <Text style={styles.orderHCTitle}>Delivery: ₦{props.Delivery}</Text>
                                            <Text style={styles.orderHCTitle}>Total: ₦{props.total}</Text>
                                            <Text style={styles.orderHCDate}>{props.Address}</Text>
                            </View>
                </View>
            </View>

   );
 }


const styles = StyleSheet.create({    
    container: {
        flex: 1, 
        padding: 10,
    },

    orderHCContainer:{
        padding: 10,
        borderRadius: 8,
        borderWidth: 0,
        // elevation: 
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
    textHeader:{
        color: colors.primary,
        fontSize:25,
        fontWeight: "bold",
        textAlign: "center"
      }, 
    
 })
export default OrderHistoryMegaCard;
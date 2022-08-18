import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, TouchableHighlight, } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

const OrderCard = (props) => {


return (

            <View style={styles.cartitem}>

                <View 
                    style={styles.cartitem_img}
                    onPress={ props.go_to_product }
                        >
                    <Image
                        source={{ uri: props.imageUrl }}
                        style={{
                            width:"100%",
                            height:100,
                            borderRadius:10,
                        }}
                    />
                </View>

                <View style={styles.cartitem_right}>

                    <Text style={styles.cartitem_right_text} onPress={ props.go_to_product } > {props.title} </Text>
                    <Text style={styles.cartitem_right_qty} >Qty: {props.quantity} </Text>

                    <View style={styles.cartitem_right_special} >

                        <Text style={styles.cartitem_right_special_left}> ₦ {props.price} </Text> 

                        {/* <View style={styles.cartitem_right_special_right} > */}

                            <Text style={styles.cartitem_right_special_right} onPress={props.deleteItem} > Remove Item </Text>

                        {/* </View> */}

                    </View>

                </View>

            </View>
);

}










const styles = StyleSheet.create({


    cartitem:{
        // borderColor:"red",
        // borderWidth:1,
        backgroundColor:colors.lightgray,
        margin:20,
        padding:20,
        borderRadius:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between"
    },

    cartitem_img:{
        width:"25%",
        height:100,
        borderRadius:10,
    },

    cartitem_right:{
        width:"70%",
    },

    cartitem_right_text:{
        color:"#333",
        fontSize:19,
        fontWeight: "bold",
    },

    cartitem_right_qty:{
        color:colors.gray,
        fontSize:16,
        marginTop:5,
    },

    cartitem_right_special:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between"
    },

    cartitem_right_special_left:{
        fontSize:16,
        fontWeight: "bold",
    },

    cartitem_right_special_right:{
        // borderWidth:1,
        // borderColor:"red",
        width:"40%",
        // height:30,
        padding:6,
        color:"white",
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"tomato",
        textAlign:"center"
    },

    // cartitem_right_special_right_text:{
    //     color:"white",
    //     fontWeight:
    // },

})








export default OrderCard;
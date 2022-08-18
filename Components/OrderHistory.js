import React, { useContext, useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image,FlatList} from 'react-native';
import OrderHistoryCard from './OrderHistoryCard';
import Screen from './Screen';
import colors from '../config/colors';
import { AntDesign } from '@expo/vector-icons';
import OrderHistoryMegaCard from './OrderHistoryMegaCard';
import AppContext from '../bigstore/cstore/compstore';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Axios from 'axios';

function OrderHistory (props) {

    const [ OrderList, setOrderList ] = useState()
    const { BaseUrl } = useContext(AppContext)


    const showproductsToggle = (orderid) => {

        const orderIndex = OrderList.findIndex( i => {
          return i._id === orderid
        } ) 
  
  
        let Order = {...OrderList[orderIndex],show:!OrderList[orderIndex].show}
  
        let FreshOrderlist = [...OrderList]
        FreshOrderlist.splice(orderIndex,1,Order)
  
        setOrderList(FreshOrderlist)
  
        // console.log(orderIndex)
  
      }
  


    useEffect(() => {

        Axios.get('/orders/myorders')
        .then( (response) => {

            var newArray = []

            for (let k = 0; k < response.data.length; k++) {
                var element = response.data[k];
                element = {
                    ...element,
                    show:false
                }

                newArray.push(element)
            }

            // console.log(newArray)
            setOrderList(newArray) 
        } )
        .catch((err) => {

            Dialog.show({
              type: ALERT_TYPE.WARNING,
              title: 'WARNING',
              textBody: err.response.data,
              button: 'close',
            })
      
          })
    }, []);


return (
            <Root>
            <Screen>
                    <Text  style={styles.textHeader}>Order History</Text>
                    <View style={styles.container}>


                    { OrderList ?
                    
                        <FlatList
                            data={OrderList}
                            showsHorizontalScrollIndicator={true}
                            keyExtractor={ (order) => order.id }
                            renderItem = {({item}) => (

                                    <OrderHistoryMegaCard
                                        id={ item._id }
                                        date={ item.Date }
                                        toggle={() => showproductsToggle(item._id)}
                                        status = {item.Status}
                                        statusColor={item.Status === "delivered" ? "green" : "orange"}
                                        total={item.order_price + item.order_delivery_fee }
                                        subTotal={item.order_price}
                                        Delivery={item.order_delivery_fee}
                                        Address={item.order_address}
                                        list={

                                        item.show ? 

                                        <FlatList
                                        data={item.order_items}
                                        showsVerticalScrollIndicator={true}
                                        keyExtractor={ (productid) => productid.id }
                                        renderItem={ ({item}) => (
                                            <OrderHistoryCard
                                                orderName={item.product.product_name}
                                                orderDesc={ item.product.product_description }
                                                orderPrice={ item.product.product_price }
                                                orderImg={BaseUrl + item.product.product_images[0].destination + "/" + item.product.product_images[0].filename}
                                                orderQuantity={item.product.quantity}
                                            />
                                        ) }

                                        /> : null

    }
/>

                            )  }
                        />
                    
                    : <Text>You have No orders</Text> }

                        
                </View>

            </Screen>
            </Root>

   );
 }


const styles = StyleSheet.create({    
    container: {
        // flex: 1, 
        // padding: 3
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
    textHeader:{
        color: colors.primary,
        fontSize:25,
        fontWeight: "bold",
        textAlign: "center"
      }, 
    
 })
export default OrderHistory;
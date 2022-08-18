import React, { useState, useEffect, useContext, useRef } from 'react';
import { Button, Text } from 'react-native';
import { View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import OrderCard from './OrderCard';
import colors from '../config/colors';
import Screen from './Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppContext from '../bigstore/cstore/compstore';
import { Paystack, paystackProps } from 'react-native-paystack-webview';
import ActivityIndicator from './ActivityIndicator';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Axios from 'axios';
import Header from './Header';
import routes from '../app/navigation/routes';



const Order = ({navigation}) => {

  const { User_Cart, UpdateUser_Cart, BaseUrl } = useContext(AppContext)
  const [TheUserCart, setTheUserCart] = useState()

  const paystackWebViewRef = useRef(null);

  useEffect(() => {

    setTheUserCart(User_Cart)

  }, [User_Cart])


  const RemoveFromCArtHandler = (id) => {

    const product_to_Remove = { product_id: id, product_quantity: 6 }

    Axios.post('/carts/cart/mycart/remove_from_cart', product_to_Remove)
      .then((response) => {

        UpdateUser_Cart(response.data)
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Item was Removed',
          textBody: "Item was successfully Removed",
          button: 'close',
        })

      }).catch((err) => {

        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: 'WARNING',
          textBody: err.response.data,
          button: 'close',
        })

      })

  }

  const ProceedToCheckout = () => {

   const Address = {
      address: "Shop 163,Ultra Modern Market",
      country: "Nigeria",
      state: "Oyo",
      lga: "Ido",
  }

    Axios.post('/orders/create_order',Address)
    .then((response)=>{

      UpdateUser_Cart(response.data.cart)
      navigation.navigate("Order History")

    })
    .catch((err) => {

      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: err.response.data,
        button: 'close',
      })

    })

  }


  return (
    <Root>
      <Screen>

      <Header
        style={styles.elevation}
      />

        <Text style={styles.textHeader}>My Bag</Text>

        {TheUserCart ?

              TheUserCart.cart_products.length > 0 
              ?  

                <View style={styles.container}>
                <FlatList
                  data={TheUserCart.cart_products}
                  showsVerticalScrollIndicator={true}
                  keyExtractor={(product) => product._id}
                  renderItem={({ item }) => (
                    <OrderCard
                      title={item.product.product_name}
                      price={item.product.product_price}
                      quantity={item.quantity}
                      go_to_product={() => navigation.navigate(routes.LISTING_DETAILS, item.product)}
                      total_price={item.quantity * item.product.product_price}
                      // decrementCounter
                      // incrementCounter={}
                      imageUrl={BaseUrl + item.product.product_images[0].destination + "/" + item.product.product_images[0].filename}
                      deleteItem={() => RemoveFromCArtHandler(item.product_id)}
                    />
                  )}
                />
    
                <TouchableOpacity style={styles.proceed_to_checkout}
                  onPress={ () => ProceedToCheckout() }
                >
                  <Text style={styles.proceed_to_checkout_text} > Proceed To Checkout </Text>
                </TouchableOpacity>
    
                </View>

              :
                <Image
                  style={styles.noprod}
                  source={require("../assets/product.png")}
                />

          : <View style={styles.noprod_box}>
            <ActivityIndicator/>
          </View>
        }


      </Screen>
    </Root>
  );

}


const styles = StyleSheet.create({
  container: {
    // borderColor:"red",
    // borderWidth:4,
    height:"88%"
  },

  textHeader: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  orderOthers: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 4,
    elevation: 2
  },

  orderOtherHead: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold"
  },


  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 10
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  orderList: {
    flexDirection: "row"
  },
  paymentBox: {
    padding: 10,
  },

  dan: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between"
  },

  danSub: {
    color: colors.gray,
    fontSize: 20,
    fontWeight: "bold"
  },

  danPrice: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold"
  },
  danST: {
    color: colors.black,
    fontSize: 22,
    fontWeight: "bold"
  },

  addContainer: {
    padding: 10,
    bottom: 3
  },

  addBox: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: colors.secondary
  },

  addText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center' 
  },

  noprod_box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  noprod: {
    width: '100%' 
  },
  proceed_to_checkout:{
    width:"90%",
    alignSelf:"center",
    padding:10,
    backgroundColor:colors.primary,
    borderRadius:5,
  },
  proceed_to_checkout_text:{
    textAlign:"center",
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  }
})
export default Order;
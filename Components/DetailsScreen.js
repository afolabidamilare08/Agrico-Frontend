import React, { useContext, useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import ImageSlider from 'react-native-image-slider';

import Increment from './Increment'
import colors from '../config/colors';
import AppContext from '../bigstore/cstore/compstore';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Axios from 'axios';

function DetailsScreen({ route }) {

    const [TheProduct, setTheProduct] = useState({
        product: null,
        isLoading: false,
        isError: {
            status: false,
            message: ''
        },
        quantity: 1
    })
    const [ifInCart, setifInCart] = useState(false)

    const Incoming_product = route.params;
    const { UpdateUser_Cart, BaseUrl, User_Cart } = useContext(AppContext)

    useEffect(() => {

        setTheProduct({
            ...TheProduct,
            product: Incoming_product
        })

        for (let g = 0; g < User_Cart.cart_products.length; g++) {

            const currentProduct = User_Cart.cart_products[0]

            if ( currentProduct.product_id === Incoming_product._id ) {
                ItexistHandler(currentProduct)
                return
            }

        }

    }, [Incoming_product,User_Cart])


    const ItexistHandler = (product) => {
        setifInCart(true)
        setTheProduct({
            ...TheProduct,
            product:product.product,
            quantity:product.quantity
        })
    }

    const SetTheProduct = () => {
        
    }

    const incrementCounter = () => setTheProduct({
        ...TheProduct,
        quantity: TheProduct.quantity + 1
    });

    const decrementCounter = () => setTheProduct({
        ...TheProduct,
        quantity: TheProduct.quantity > 1 ? TheProduct.quantity - 1 : 0
    });



    const HandleAddtoCArt = () => {

        if (TheProduct.quantity < 1) {
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Added To Cart',
                textBody: "Item was sucessfully Added To Cart",
                button: 'close',
            })
        } else {

            const req_body = {
                product_id: TheProduct.product._id,
                product_quantity: TheProduct.quantity
            }

            Axios.post('/carts/cart/mycart/add_to_cart', req_body)
                .then(response => {

                    UpdateUser_Cart(response.data)
                    setifInCart(true)
                    // setTheProduct({
                    //     ...TheProduct,
                    //     quantity:product.quantity
                    // })
                    console.log(response.data)
                    Dialog.show({
                        type: ALERT_TYPE.SUCCESS,
                        title: 'Item was Added',
                        textBody: "Item was successfully Added",
                        button: 'close',
                    })

                })
                .catch(err => {

                    Dialog.show({
                        type: ALERT_TYPE.WARNING,
                        title: 'WARNING',
                        textBody: err.response.data,
                        button: 'close',
                    })

                })

        }

    }

    const RemoveFromCArtHandler = () => {

        const product_to_Remove = { product_id: TheProduct.product._id, product_quantity: 6 }
    
        Axios.post('/carts/cart/mycart/remove_from_cart', product_to_Remove)
          .then((response) => {
    
            UpdateUser_Cart(response.data)
            setifInCart(false)
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


    var specialimg = []

    if (specialimg.length == 0 && TheProduct.product) {

        for (let i = 0; i < TheProduct.product.product_images.length; i++) {

            const currentProductimg = TheProduct.product.product_images[i]

            specialimg.push({ uri: BaseUrl + currentProductimg.destination + "/" + currentProductimg.filename })

        }
    } else {
        // console.log('smile')
    }


    return (
        <Root>
            {TheProduct.product && !TheProduct.isLoading ?

                <View style={styles.container}>


                    <ImageSlider
                        loopBothSides
                        autoPlayWithInterval={3000}
                        images={specialimg}
                    />

                    <View style={styles.descriptionBigContainer}>
                        <View>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{TheProduct.product.product_name}</Text>
                                <Text style={styles.price}>₦{TheProduct.product.product_price}</Text>
                            </View>
                            <View style={styles.descriptionTextContainer}>
                                <Text style={styles.descriptionText}>{TheProduct.product.product_description}</Text>
                            </View>
                        </View>

                        {/* <View style={styles.ratingContainer}>
                                <Text style={styles.ratingText}>🏅4.7</Text>
                                <Text style={styles.ratingText}>⚖️ 4.5g</Text>
                                <Text  style={styles.ratingText}>🔥 150 Cal</Text>
                    </View> */}

                        <Increment
                            style={styles.increment}
                            number={TheProduct.quantity}
                            increase={incrementCounter}
                            decrease={decrementCounter}
                        />

                        <View style={styles.addContainer}>

                            { ifInCart ?
                            
                            <>
                                <TouchableOpacity style={styles.updateBox}
                                    onPress={() => HandleAddtoCArt()}
                                    >
                                    <Text style={styles.addText}>Update Bag</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.removeBox}
                                    onPress={() => RemoveFromCArtHandler()}
                                    >
                                    <Text style={styles.addText}>Remove From Bag</Text>
                                </TouchableOpacity>

                            </>
                            
                            : 
                            
                            <TouchableOpacity style={styles.addBox}
                                onPress={() => HandleAddtoCArt()}
                            >
                                <Text style={styles.addText}> Add To Bag</Text>
                            </TouchableOpacity>

                            
                            }

                        </View>


                    </View>



                </View>

                : <Text> detail_page </Text>}
        </Root>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: "100%",
        height: "40%",
    },

    descriptionBigContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },

    titleContainer: {
        // borderWidth: 1,
        borderColor: "red",
        flexDirection: 'row',
        justifyContent: "space-between",
        padding: 15,
    },


    title: {
        // borderWidth: 1,
        width: "80%",
        fontSize: 25,
        fontWeight: 'bold'
    },

    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.secondary
    },
    descriptionTextContainer: {
        padding: 10
    },
    descriptionText: {
        fontSize: 18,
        textAlign: 'left',
        color: colors.gray
    },

    ratingContainer: {
        // borderWidth: 2,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        padding: 5
    },

    ratingText: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    increment: {
        bottom: 80
    },

    addContainer: {
        padding: 15,
        bottom: 10
    },

    addBox: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: colors.secondary
    },

    updateBox: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: colors.orange
    },

    removeBox: {
        padding: 15,
        borderRadius: 30,
        backgroundColor: colors.tomato,
        marginTop:10
    },

    addText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    }

})


export default DetailsScreen;
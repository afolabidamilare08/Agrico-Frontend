import React, { useEffect, useState, useContext } from 'react';
import { FlatList, StyleSheet, TextInput, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppContext from '../bigstore/cstore/compstore';


import Card from './Card';
import Screen from './Screen';
import Header from './Header';
import listingsApi from '../api/listings';
import colors from '../config/colors';
import routes from '../app/navigation/routes';
import ActivityIndicator from './ActivityIndicator';
import Axios from 'axios';


function ListingsScreen({ navigation }) {

    const [Products, setProducts] = useState({
        products: [],
        isLoading: true,
        isError: {
            status: false,
            message: ''
        }
    })

    const { BaseUrl } = useContext(AppContext)


    useEffect(() => {

        setProducts({
            ...Products,
            isLoading: true,
        })

        Axios.get('/products')
            .then((response) => {

                setProducts({
                    products: [...response.data],
                    isLoading: false,
                    isError: {
                        status: false,
                        message: ''
                    }
                })

            })
            .catch((error) => {
                setProducts({
                    ...Products,
                    isLoading: false,
                    isError: {
                        status: true,
                        message: error.response.data
                    }
                })
            })

    }, []);


    return (
        <>
            <ActivityIndicator visible={Products.isLoading} />
            <View style={styles.container} >


                <View style={styles.elevation}>

                    <Header />

                    <View style={styles.searchBar}>
                        <TextInput

                            placeholder='Search for anything... '
                            style={styles.searchInput}
                        />

                        <TouchableOpacity
                            style={styles.searchIcon}
                        >
                            <FontAwesome
                                name="search"
                                size={24}
                                color={colors.primary}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

                <View>
                <ScrollView horizontal={true} style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Drinks</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Solid</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Food</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Hot Dogs</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Barbeque</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Ice-Cream</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Steaks</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Vegies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.categoryBox}>
                        <Text style={styles.categoryText}>Seafood</Text>
                    </TouchableOpacity>
                </ScrollView >

                </View>

                {Products.products.length > 0 && !Products.isLoading ?

                    <FlatList
                        data={Products.products}
                        keyExtractor={(product) => product._id}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) =>
                            <Card
                                title={item.product_name}
                                description={item.product_description}
                                subTitle={item.product_price}
                                imageUrl={BaseUrl + item.product_images[0].destination + "/" + item.product_images[0].filename}
                                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            />

                        }
                    />

                    : <View style={styles.noprod_box}>
                    <Image
                        style={styles.noprod}
                        source={require("../assets/noprod.gif")}
                        />
                    <Text style={styles.noprodText}>No Products Found</Text>
                </View>}




                {/* <Button title={ counter + " " + family  } onPress={foolish} />  */}

            </View>
        </>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    searchBar: {
        // justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 5,
        bottom: 5,
        alignSelf: 'center'
    },

    elevation: {
        // elevation: 12,
        shadowColor: '#52006A',
        borderWidth: 0,
        backgroundColor: "#fff"
    },

    searchInput: {
        padding: 10,
        backgroundColor: colors.lightgray,
        width: "75%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    searchIcon: {
        padding: 11,
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.lightgray,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    categoryContainer: {
        padding: 5,
    },

    categoryBox: {
        // borderWidth: 1,
        padding: 10,
        height: 40,
        marginLeft: 10,
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    categoryText: {
        color: colors.white
    },

    noprod_box: {
        flex: 12,
        marginBottom: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    noprod: {
        width: 200,
        height: 200,
    },

    noprodText:{
        marginRight: 20,
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 20
    }
})
export default ListingsScreen;
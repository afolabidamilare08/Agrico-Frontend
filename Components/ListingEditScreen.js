import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Screen from './Screen';
import Constants from "expo-constants";
import colors from '../config/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import routes from '../app/navigation/routes';
import Axios from 'axios'
import listingsApi from '../api/listings';
import ShopCard from './ShopCard';
import AppContext from '../bigstore/cstore/compstore';
import ActivityIndicator from './ActivityIndicator';



function ListingEditScreen({ navigation }) {
  // const getListingsApi = useApi(listingsApi.getListings);


  const [TheShop, setTheShop] = useState(null)

  const [isError, setisError] = useState({
    status: false,
    message: ''
  })

  const [isLoading, setisLoading] = useState(false)



  const { BaseUrl } = useContext(AppContext)


  useEffect(() => {

    setisError({
      status: false,
      message: ''
    })

    setisLoading(true)

    Axios.get('shops/my_shop')
      .then((response) => {
        setTheShop(response.data)
        setisLoading(false)
      })
      .catch(err => {

        setisError({
          status: true,
          message: 'Something Unusual Went Wrong'
        })

        setisLoading(false)

      })

  }, []);

  const VirtualizedList = ({children}) => {
    return (
        <FlatList
            data={[]}
            keyExtractor={() => "key"}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}


  return (

    <>

      {!TheShop && isLoading ?

        <ActivityIndicator visible={isLoading} />

        : TheShop && !isLoading ?

          <VirtualizedList>

            <View style={styles.coverPhotoBox}>
              <Image
                source={{ uri: BaseUrl + TheShop.shop_image[0].destination + "/" + TheShop.shop_image[0].filename }}
                style={styles.coverPhoto}
              />
            </View>

            <View style={styles.profilePicContainer}>

              <View style={styles.elevation}>
                <Image
                  source={require("../assets/shops.png")}
                  style={styles.profilePic}
                />

          <TouchableOpacity style={styles.editIconContainer}>
                        <FontAwesome5 
                           name="pencil-alt"
                           color={colors.white}
                           size={18}
                           style={styles.editIcon}
                         />
             </TouchableOpacity>
              </View>

              <View style={styles.shopName}>
                <View style={styles.shopNameVerifiedBox}>
                  <Text style={styles.shopNameText}>{TheShop.shop_name}

                  </Text>
                  <MaterialIcons
                    name="verified"
                    size={21}
                    color={colors.secondary}
                    style={styles.verifiedIcon} />
                </View>
                <Text style={styles.textUserShop}>{TheShop.shop_email}</Text>
              </View>

            </View>

            <View style={styles.shopDescriptionBig}>
              <Text style={styles.shopDescriptionTitle}>
                My Description
              </Text>
              <View style={styles.shopDescription}>
                <Text style={styles.shopDescriptionText}>
                  {TheShop.shop_description}
                </Text>
              </View>
            </View>


            <View style={styles.shopPostView}>
              <View style={styles.shopProducts}>
                <Text style={styles.shopDescriptionTitle}>My Products</Text>
              </View>

              <TouchableOpacity style={styles.postBtn} onPress={() => navigation.navigate(routes.POST_SCREEN, TheShop)}>
                <Ionicons name="add-circle" size={29} color={colors.secondary} />
              </TouchableOpacity>


            </View>

            {/* { TheShop.shop_ } */}

            <FlatList
              data={TheShop.shop_products}
              keyExtractor={(product) => product._id}
              horizontal={false}
              numColumns={2}
              renderItem={({ item }) =>
                <ShopCard
                  title={item.product_name}
                  description={item.product_description}
                  subTitle={item.product_price}
                  imageUrl={BaseUrl + item.product_images[0].destination + "/" + item.product_images[0].filename}
                  onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                // thumbnailUrl={item.images[0].thumbnailUrl}
                />
                // <Text>hhshsh</Text>
              }

            />

          </VirtualizedList>

          : <Text>Something Went wrong</Text>

      }


    </>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 2
  },
  coverPhoto: {
    height: 250,
    width: "100%",
    backgroundColor: "#000000",
    borderWidth: 2,
    // borderBottomColor: colors.white
  },



  profilePic: {
    marginTop: 40,
      width: 60,
      height: 60,
    // borderRadius: 100,
    // borderColor: colors.white,
    // borderWidth: 6,
  },

  elevation: {
    elevation: 10,
    shadowColor: colors.black,
    backgroundColor: colors.white,
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.primary,
    borderWidth: 4,
    borderRadius: 100,
    left: 20,
    marginTop: -60,
  },

  editIconContainer:{
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: colors.secondary,
    padding: 4,
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: -10,
    marginLeft: 90,
    alignItems: "center",
    justifyContent: "center"
},

editIcon: {
      marginLeft: 4
},

  profilePicContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    // margin: 10
  },

  shopName: {
    padding: 7,
    marginLeft: 20,
    marginTop: 2,
    // borderColor: "red",
    // borderWidth: 2
  },

  shopNameVerifiedBox: {
    flexDirection: "row",
    justifyContent: 'center'
  },

  verifiedIcon: {
    marginLeft: 3
  },

  shopNameText: {
    textAlign: 'center',
    fontWeight: "bold",
    fontSize: 20,
    color: colors.primary
  },

  textUserShop: {
    // textAlign: "center",
    color: colors.gray,
    marginTop: -2.5,
  },

  shopDescription: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lightgray,
  },

  shopDescriptionBig: {
    padding: 20
  },

  shopPostView: {
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 20
  },

  shopDescriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.gray,
    paddingBottom: 10
  },

  shopDescriptionText: {
    color: colors.black,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    textAlign: "justify",

  },

  shopProducts: {
    // paddingLeft: 10
  }
})
export default ListingEditScreen;
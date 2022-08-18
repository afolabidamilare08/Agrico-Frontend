import React, { useEffect, useState } from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import * as Yup from "yup";
import * as Location from 'expo-location'
import listingsApi from '../api/listings';
import Picker from './Picker';

import CategoryPickerItem from './CategoryPickerItem';
import useLocation from '../app/hooks/useLocation';
import Screen from './Screen';
import UploadScreen from './UploadScreen';
import AppTextInput from './TextInput';
import AppButton from './AppButton';
import ShopImagePicker from './ShopImagePicker';
import * as ImagePicker from 'expo-image-picker';
import Axios from 'axios';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Header from './Header';
import colors from '../config/colors';
import { ScrollView } from 'react-native-gesture-handler';





const categories = [
  {
    label: "Drinks",
    value: 1,
    backgroundColor: 'red',
    icon: 'food-fork-drink'
  },
  {
    label: "Solid",
    value: 2,
    backgroundColor: 'green',
    icon: 'food-variant'
  },
  {
    label: "Food",
    value: 2,
    backgroundColor: 'blue',
    icon: 'food'
  },
  {
    label: "Hot Dogs",
    value: 4,
    backgroundColor: 'blueviolet',
    icon: 'dog'
  },
  {
    label: "Barbeque",
    value: 5,
    backgroundColor: 'brown',
    icon: 'chili-hot'
  },
  {
    label: "Ice Cream",
    value: 6,
    backgroundColor: 'cadetblue',
    icon: 'ice-cream'
  },
  {
    label: "Steaks",
    value: 7,
    backgroundColor: 'coral',
    icon: 'food-steak'
  },
  {
    label: "Vegies",
    value: 8,
    backgroundColor: 'crimson',
    icon: 'leaf'
  },
  {
    label: "Seafood",
    value: 9,
    backgroundColor: 'black',
    icon: 'jellyfish'
  }
]




function ListingEditScreen({ route }) {

  const [TheShop, setTheShop] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const [ProductDetails, setProductDetails] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    product_category: '62fe46e819e3a6b7c3c5e6a1',
    product_images: [],
  })


  useEffect(() => {

    console.log(route.params)

    setTheShop({
      ...route.params
    })

  }, [])






  const addImage = async (index) => {

    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!_image.cancelled) {

      var Images = [...ProductDetails.product_images]

      Images[index] = _image

      setProductDetails({
        ...ProductDetails,
        product_images: Images
      })

    }

  };







  const HandleUpload = () => {

    setisLoading(true)

    if (ProductDetails.product_images.length < 3) {

      setisLoading(false)

      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: "Please Select 3 images of your product",
        button: 'close',
      })

      return

    }

    var images_to_send = []

    for (let e = 0; e < ProductDetails.product_images.length; e++) {

      let image = ProductDetails.product_images[e]

      let localUri = image.uri

      let filename = localUri.split('/').pop();

      let match = /\.(\w+)$/.exec(filename);

      let type = match ? `image/${match[1]}` : `image`

      images_to_send.push({
        uri: localUri, name: filename, type
      })

    }

    const Thedatatosend = new FormData();

    Thedatatosend.append('product_name', ProductDetails.product_name)
    Thedatatosend.append('product_description', ProductDetails.product_description)
    Thedatatosend.append('product_price', ProductDetails.product_price)
    Thedatatosend.append('product_category', ProductDetails.product_category)
    Thedatatosend.append('productImage', images_to_send[0])
    Thedatatosend.append('productImage', images_to_send[1])
    Thedatatosend.append('productImage', images_to_send[2])
    // Thedatatosend.append('availabe', true)


    Axios({
      method: "post",
      url: "shops/shop/" + TheShop._id + "/add_product",
      data: Thedatatosend,
      headers: { "Content-Type": "multipart/form-data", "boundry": "boundry" }
    }).then((response) => {


      setisLoading(false)
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Product Was Successfully Created',
        textBody: 'You will be redirected to the product page',
        button: 'Go To Store',
        onPressButton: () => {
          // navigation.navigate(routes.)
        }
      })


    }).catch((err) => {

      setisLoading(false)

      if (err.response) {

        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: 'WARNING',
          textBody: err.response.data,
          button: 'close',
        })

      }

    })


  }








  return (

    <Root>

      <Header 
        style={styles.elevation}
      />

      <Text style={styles.headerText}>Post A Product</Text>

      <Screen style={styles.container}>

        <ScrollView horizontal={true} style={styles.imagediv} >

        <Text style={styles.selectText}>Select Image</Text>

          <ShopImagePicker
            addimage={() => addImage(0)}
            image={ProductDetails.product_images[0]}
          />

          <ShopImagePicker
            addimage={() => addImage(1)}
            image={ProductDetails.product_images[1]}
          />

          <ShopImagePicker
            addimage={() => addImage(2)}
            image={ProductDetails.product_images[2]}
          />

        </ScrollView>


        <AppTextInput
          placeholder="Product Name"
          value={ProductDetails.product_name}
          onChange={(e) => setProductDetails({
            ...ProductDetails,
            product_name: e
          })}
        />

        <AppTextInput
          placeholder="Product Description"
          value={ProductDetails.product_description}
          onChange={(e) => setProductDetails({
            ...ProductDetails,
            product_description: e
          })}
        />

      <Text style={{color:colors.primary, fontWeight: "bold", paddingLeft: 15, paddingTop: 12}}>Category</Text>
        <Picker
        // style={{justify}}
        items={categories}
        name="category"
        numberOfColumns={3}
        PickerItemComponent={CategoryPickerItem}
        placeholder="Category"
        width="50%"
      />

        <AppTextInput
          placeholder="Product Price"
          value={ProductDetails.product_price}
          onChange={(e) => setProductDetails({
            ...ProductDetails,
            product_price: e
          })}
        />

        <AppButton title="Post Product" onPress={() => HandleUpload()} />
      </Screen>

    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imagediv: {
    width: '100%',
  },

  elevation: {
    borderWidth: 0,
    marginTop: -3,
    elevation: 2,
    color: colors.black
  },

  headerText:{
    // paddingLeft: 20,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  },

  selectText:{
    marginTop: 45,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16
  }
})
export default ListingEditScreen;
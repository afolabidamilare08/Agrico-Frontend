import React, { useEffect, useState } from 'react';
import { Text, Button, StyleSheet, View, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Axios from 'axios'
import colors from '../config/colors';
import Constants from "expo-constants";
import useLocation from '../app/hooks/useLocation';
import UploadScreen from './UploadScreen';
import AppButton from './AppButton';
import AppTextInput from './TextInput';
import ShopImagePicker from './ShopImagePicker';
import * as ImagePicker from 'expo-image-picker';
import routes from '../app/navigation/routes';

function ListingEditScreen({navigation}) {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);



  const [shopDetails, setshopDetails] = useState({

    shop_name: '',
    shop_description: '',
    shop_email: '',
    shop_country: '',
    shop_state: '',
    shop_lga: '',
    shop_address: '',
    shop_phoneNumber: '',
    shop_image: null,
    isLoading: false,
    iserrormessage: {
      message: '',
      status: false
    }
  })







  const addImage = async () => {

    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!_image.cancelled) {
      setshopDetails({
        ...shopDetails,
        shop_image: _image
      });
    }

  };











  const handleSubmit = () => {

    setshopDetails({
      ...shopDetails,
      isLoading: true,
      iserrormessage: {
        message: '',
        status: false
      }
    })

    if (!shopDetails.shop_image) {

      setshopDetails({
        ...shopDetails,
        isLoading: true,
        iserrormessage: {
          message: '',
          status: false
        }
      })

      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'WARNING',
        textBody: "Please choose an inage for your shop",
        button: 'close',
      })

      return

    }

    let localUri = shopDetails.shop_image.uri;

    let filename = localUri.split('/').pop();

    let match = /\.(\w+)$/.exec(filename);

    let type = match ? `image/${match[1]}` : `image`


    const formData = new FormData();

    formData.append('shop_name', shopDetails.shop_name)
    formData.append('shop_description', shopDetails.shop_description)
    formData.append('shop_email', shopDetails.shop_email)
    formData.append('shop_phoneNumber', shopDetails.shop_phoneNumber)
    formData.append('shop_country', shopDetails.shop_country)
    formData.append('shop_state', shopDetails.shop_state)
    formData.append('shop_lga', shopDetails.shop_lga)
    formData.append('shop_address', shopDetails.shop_address)
    formData.append('shop_image', {
      uri: localUri, name: filename, type
    })


    Axios({
      method: "post",
      url: "shops/add_shop",
      data: formData,
      headers: { "Content-Type": "multipart/form-data", "boundry": "boundry" }
    })
      .then((response) => {

        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Shop Was Successfully Created',
          textBody: 'You will be redirected to your store page',
          button: 'Go To Store',
          onPressButton: () => {
            navigation.navigate(routes.LISTING_EDIT) 
          }
        })

      })
      .catch(err => {

        if (err.response) {

          setshopDetails({
            ...shopDetails,
            iserrormessage: {
              message: err.response.data,
              status: true
            },
            isLoading: false
          })

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
      
      <KeyboardAvoidingView style={styles.container}>

        <UploadScreen onDone={() => setUploadVisible(false)}
          progress={progress}
          visible={uploadVisible} />

        <Text style={styles.login_text} > Create Your Store </Text>

        <ScrollView>

          <Image
            style={styles.logo_img}
            source={require("../assets/shop_img.png")}
          />

          <View>

            <ShopImagePicker
              addimage={() => addImage()}
              image={shopDetails.shop_image}
            />

            <AppTextInput
              placeholder="Shop Name"
              value={shopDetails.shop_name}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_name: e
              })}
            />

            <AppTextInput
              placeholder="Shop Description"
              value={shopDetails.shop_description}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_description: e
              })}
            />

            <AppTextInput
              placeholder="Shop Email Address"
              value={shopDetails.shop_email}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_email: e
              })}
            />

            <AppTextInput
              placeholder="Shop Phone Number"
              value={shopDetails.shop_phoneNumber}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_phoneNumber: e
              })}
            />

            <AppTextInput
              placeholder="Country"
              value={shopDetails.shop_country}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_country: e
              })}
            />

            <AppTextInput
              placeholder="State"
              value={shopDetails.shop_state}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_state: e
              })}
            />

            <AppTextInput
              placeholder="Local Government Area"
              value={shopDetails.shop_lga}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_lga: e
              })}
            />

            <AppTextInput
              placeholder="Address"
              value={shopDetails.shop_address}
              onChange={(e) => setshopDetails({
                ...shopDetails,
                shop_address: e
              })}
            />

            <AppButton title="Create My Store" onPress={() => handleSubmit()} />

          </View>

        </ScrollView>

      </KeyboardAvoidingView>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  logo_img: {
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: "center"
  },
  login_text: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 20,
    alignSelf: "center",
  },
  textHeader: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
})
export default ListingEditScreen;
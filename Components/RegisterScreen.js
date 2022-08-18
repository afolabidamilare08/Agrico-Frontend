import React, { useState } from "react";
import { StyleSheet, Image, ScrollView, View, Text } from "react-native";
import Screen from "../Components/Screen";
import routes from "../app/navigation/routes";
import ActivityIndicator from './ActivityIndicator';
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Axios from 'axios'
import AppTextInput from "./TextInput";
import AppButton from "./AppButton";
import * as SecureStore from 'expo-secure-store';


const RegisterScreen = ({ navigation }) => {


  const [UserInfo, setUserInfo] = useState({

    full_name: '',
    username: '',
    phone_number: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
    iserrormessage: {
      message: '',
      status: false
    }
  })






  const handleSubmit = () => {

    setUserInfo({
      ...UserInfo,
      iserrormessage: {
        message: '',
        status: false
      },
      isLoading: true
    })

    const SubmitDetail = {
      full_name: UserInfo.full_name,
      username: UserInfo.username,
      phone_number: UserInfo.phone_number,
      email: UserInfo.email,
      password: UserInfo.password,
      confirmPassword: UserInfo.confirmPassword,
    }

    Axios.post('auth/signup', SubmitDetail).then(

      (response) => {
        setUserInfo({
          ...UserInfo,
          iserrormessage: {
            message: '',
            status: false
          },
          isLoading: false
        })
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Registration Successfull',
          textBody: 'You will be redirected to the login page',
          button: 'Login',
          onPressButton: () => {
            navigation.navigate(routes.LOGIN)
          }
        })
      }

    ).catch(err => {

      console.log(err)

      if (err.response) {

        setUserInfo({
          ...UserInfo,
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

  };

  const getToken = async () => {
    try {
      return SecureStore.getItemAsync("authToken");
    } catch (error) {
      console.log('Error getting the auth token', error)
    }
  }

  const Ctoken = () => {

    let token = getToken()

    console.log(token)

  }

  return (
    < Root>


      <ActivityIndicator visible={UserInfo.isLoading} />


      <Screen style={styles.container}>


        <ScrollView>

          {/* <Image
            style={styles.logo}
            source={require("../assets/agrico.png")}
          /> */}

          <Image
            style={styles.logo_img}
            source={require("../assets/register.jpg")}
          />

          {/* <Text style={styles.login_text} > Sign Up </Text> */}

          <AppTextInput
            autoCorrect={false}
            icon="account"
            name="full_name"
            placeholder="Full Name"
            value={UserInfo.full_name}
            onChange={(e) => setUserInfo({
              ...UserInfo,
              full_name: e
            })}
          />


          <AppTextInput
            autoCorrect={false}
            icon="account"
            name="username"
            placeholder="UserName"
            value={UserInfo.username}
            onChange={(e) => setUserInfo({
              ...UserInfo,
              username: e
            })}
          />


          <AppTextInput
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            value={UserInfo.email}
            onChange={(e) => setUserInfo({
              ...UserInfo,
              email: e
            })}
          />



          <AppTextInput
            autoCorrect={false}
            icon="phone"
            keyboardType='numeric'
            placeholder="Phone Number"
            value={UserInfo.phone_number}
            onChange={(e) => setUserInfo({
              ...UserInfo,
              phone_number: e
            })}
          />



          <AppTextInput
            autoCorrect={false}
            autoCapitalize="none"
            icon="lock"
            password
            textContentType="password"
            placeholder="Password"
            value={UserInfo.password}
            onChange={(e) => setUserInfo({
              ...UserInfo,
              password: e
            })}
          />

          <AppTextInput
            autoCorrect={false}
            autoCapitalize="none"
            icon="lock"
            password
            textContentType="password"
            placeholder="Confirm Password"
            value={UserInfo.confirmPassword}
            onChange={(e) => setUserInfo({
              ...UserInfo,
              confirmPassword: e
            })}
          />

          <AppButton
            onPress={handleSubmit}
            title="Register"
          />

          {/* <Button
      title={'dialog box'}
      onPress={() =>
       
      }
    /> */}

          <View style={styles.createPrompt}>
            <Text>I have an account already  </Text>
            <Text
              onPress={() => navigation.navigate(routes.LOGIN)}
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "green"
              }}
            >Login</Text>
          </View>

        </ScrollView>
      </Screen>
    </Root>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 100,
    height: 100,
    marginTop: 70,
    marginBottom: 20,
    alignSelf: 'center'
  },

  createPrompt: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  logo_img: {
    width: 200,
    height: 200,
    marginTop: 10,
    alignSelf: "center"
  },

  login_text: {
    fontSize: 35,
    fontWeight: "900",
    marginBottom: 20
  },

});

export default RegisterScreen;
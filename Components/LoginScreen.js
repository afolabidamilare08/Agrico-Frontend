import React, { useContext, useState } from 'react';
import { Button, Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import routes from '../app/navigation/routes'
import Screen from './Screen';
import AppButton from './AppButton';
import AppTextInput from "./TextInput";
import { ALERT_TYPE, Dialog, Root, Toast } from 'react-native-alert-notification';
import Axios from 'axios'
import AppContext from '../bigstore/cstore/compstore';


const LoginScreen = ({ navigation }) => {

  const { LogIn, UpdateUser_Cart } = useContext(AppContext)

  const [UserInfo, setUserInfo] = useState({

    username: '',
    password: '',
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
      username: UserInfo.username,
      password: UserInfo.password,
    }

    Axios.post('auth/signin', SubmitDetail).then(

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
          title: 'Login Successfull',
          textBody: 'You will be redirected to the home page',
          button: 'Home',
          onPressButton: () => {
            navigation.navigate(routes.LOGIN)
          }
        })

        const { cart, ...others } = response.data

        LogIn("authToken", response.data.accessToken, { ...others }, cart)
        UpdateUser_Cart({ cart })

      }

    ).catch(err => {

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



  }

  return (

    <Root>
      <Screen style={styles.container}>

        {/* <Image
          style={styles.logo}
          source={require("../assets/agrico.png")}
        /> */}
      {/* <Text style={styles.login_text} > Login </Text> */}

        <Image
          style={styles.logo_img}
          source={require("../assets/login.jpg")}
        />


        <AppTextInput
          autoCorrect={false}
          icon="account"
          name="username"
          placeholder="Username"
          value={UserInfo.username}
          onChange={(e) => setUserInfo({
            ...UserInfo,
            username: e
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

<View style={{
  marginTop:60
}} >

</View>

        <AppButton
          onPress={handleSubmit}
          title="Login"
        />



        <View style={styles.createPrompt}>
          <Text>Do not have an account?  </Text>
          <Text
            onPress={() => navigation.navigate(routes.REGISTER)}
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: 'green',
            }}
          >Sign up</Text> 
        </View>

      </Screen>
    </Root>

  );


}



export default LoginScreen;


const styles = StyleSheet.create({

  logo: {
    width: 100,
    height: 100,
    marginTop: 70,
    marginBottom: 20,
    alignSelf: 'center'
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
    marginBottom: 20,
    textAlign: 'center'
  },

  container: {
    padding: 10
  },

  createPrompt: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent:'center'
  }
})
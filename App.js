import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
// import {BACKEND_URL} from '@env';


import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./Components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import { navigationRef } from "./app/navigation/rootNavigation";
import AppContext from "./bigstore/cstore/compstore";
import 'react-native-gesture-handler';
import Axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export default function App() {

  const [User, setUser] = useState();
  const [isReady, setIsReady] = useState(false);
  const [User_cart, setUser_cart] = useState();

// put base url in dotenv file
  const BaseUrl = "https://agricobackend.herokuapp.com/";

  Axios.defaults.baseURL = BaseUrl; 

 




  // to check if the person is loggedin In the firstPlace

  const HandleIfUserIsTrullyAuthenticated = async () => {

    let token = await SecureStore.getItemAsync("authToken");

    if (token) {

      Axios.defaults.headers.common['token'] = 'Bearer ' + token
      Axios.get('/returnUser/get_user')

        .then(response => {

          const { cart, ...others } = response.data

          setUser({ ...others })
          setUser_cart(cart)

        })

        // find something to do here asap 
        .catch((error) => console.log(error))

    } else {

      setUser()
      setUser_cart()
    }

  }



  // Login Process

  async function saveToken(key, value, user_details, cart) {
    await SecureStore.setItemAsync(key, value);
    Axios.defaults.headers.common['token'] = 'Bearer ' + value
    setUser(user_details)
    setUser_cart(cart)
  }


  // async function HandleIfUserIsTrullyAuthenticated(key) {
  //   let result = await SecureStore.getItemAsync(key);
  //   if (result) {
  //     alert("🔐 Here's your value 🔐 \n" + result);
  //   } else {
  //     alert('No values stored under that key.');
  //   }
  // }



  // Log out function
  const LogoutProcess = async () => {

    await SecureStore.setItemAsync("authToken", "");
    Axios.defaults.headers.common['token'] = ''
    setUser()
    setUser_cart()
  }




  const HandlesetUser_Details = (details) => {
    setUser(details)
  }





  const HandleUpdateUserCart = (cart_details) => {
    setUser_cart(cart_details)
  }








  if (!isReady)
    return (
      <AppLoading startAsync={() => HandleIfUserIsTrullyAuthenticated()} onFinish={() => setIsReady(true)}
        onError={console.warn}
      />

    );




  return (
    <AuthContext.Provider value={{ User, setUser }}>
      <AppContext.Provider value={{
        BaseUrl: BaseUrl,
        User_details: User,
        LogOut: LogoutProcess,
        LogIn: saveToken,
        UpdateUser_Cart: HandleUpdateUserCart,
        User_Cart: User_cart,
        setUser_details: HandlesetUser_Details
      }}>
        <OfflineNotice />
        <NavigationContainer ref={navigationRef} theme={navigationTheme}>
          {User ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AppContext.Provider>
    </AuthContext.Provider>
  );
}
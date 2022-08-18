import React, { useState } from 'react';



const AppContext = React.createContext({
    BaseUrl:null,
    User_details:null,
    LogOut: () => {},
    LogIn: () => {},
    UpdateUser_Cart: () => {},
    User_Cart:null,
    setUser_details:() => {},
})



export default AppContext;
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import  Constants from 'expo-constants';
import colors from '../config/colors';
import {useNetInfo} from '@react-native-community/netinfo';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function OfflineNotice (props) {

    const netInfo = useNetInfo();
    // console.log(netInfo);

    if (netInfo.type !== "unknown"  && netInfo.isInternetReachable === false)   

return (
<View style={styles.contadiner}>
<MaterialCommunityIcons name="wifi-strength-1-alert" size={24} color={colors.white} />
        <Text style={{color:"white", fontWeight:"bold", marginLeft: 15}}>No Internet Connection</Text>
</View>

   );

   return null;
 }


const styles = StyleSheet.create({
container:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    height: 30,
    width:"100%",
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight,
    flexDirection: "row"
}
 })
export default OfflineNotice;
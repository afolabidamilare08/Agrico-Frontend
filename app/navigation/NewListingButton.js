import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function NewListingButton ({onPress}) {
return (
     <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>

            <MaterialCommunityIcons 
            name='bike-fast' 
            color={colors.white} 
            size={35} />
            
        </View>
        </TouchableOpacity>
   );
 }


const styles = StyleSheet.create({
container:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 10,
    width: 80,
    height: 80,
    bottom: 25,
    borderRadius: 40
}
 })
export default NewListingButton;
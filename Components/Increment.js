import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import colors from '../config/colors';


const Increment  = ( props ) => {


        return (
        <View style={styles.incrementContainer}>
              <TouchableOpacity style={styles.incrementBox} onPress={props.decrease}><Text style={styles.incrementText}>-</Text></TouchableOpacity>
              <TouchableHighlight style={styles.incrementNum}>
               <Text style={styles.incrementNumText}>{props.number}  </Text>
              </TouchableHighlight >   
              <TouchableOpacity style={styles.incrementBox} onPress={props.increase}><Text style={styles.incrementText}>+</Text></TouchableOpacity>
  </View>
    );
}

const styles = StyleSheet.create({
      
    incrementContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    incrementCon:{
        backgroundColor: colors.lightgray,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 2
    },

    incrementText:{
        fontSize: 22,
        color: colors.white,
        
    },

    incrementBox:{
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 3,
        elevation: 5
    },

    incrementNumText:{
        fontSize: 20,
        width: 40,
        height: 20,
        textAlign: "center",
        color: colors.black,
        fontWeight: 'bold'
    },

    incrementNum:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 3,
    },
})
export default Increment;
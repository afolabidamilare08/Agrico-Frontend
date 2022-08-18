import React from 'react';
import { TextInput, View , StyleSheet, Text} from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"

import colors from '../config/colors';
import defaultStyles from "../config/styles"
import ErrorMessage from './forms/ErrorMessage';

const AppTextInput = (props) => {
    return (

        <>

        <Text style={{color:colors.primary, fontWeight: "bold", paddingLeft: 15, paddingTop: 12}}>{props.placeholder}</Text>

        <View style={[styles.container]}>

                {props.icon && <MaterialCommunityIcons 
                    name={props.icon}
                    size={20}
                    color={colors.primary}
                    style={styles.icon}
                />}
                    
                    <TextInput 

                        placeholder={props.placeholder}
                        placeholderTextColor={defaultStyles.colors.gray}
                        style={defaultStyles.text}
                        value={props.value}
                        onChangeText={props.onChange}
                        secureTextEntry={props.password}
                    /> 
        </View>

        <ErrorMessage error={props.error} />

        </>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems:  'center'
    },
    icon:{
        marginRight: 10
    }
})

export default AppTextInput;
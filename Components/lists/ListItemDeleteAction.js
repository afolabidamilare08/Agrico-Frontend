import React from 'react';

import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
                <MaterialCommunityIcons 
                    name='trash-can'
                    color={colors.white}
                    size={35}
                />
        </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.tomato,
        width: 70,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ListItemDeleteAction;
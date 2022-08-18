import React from 'react';

import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppText from '../AppText'

function ListItem({title, image, subTitle, IconComponent,  onPress, renderRightActions}) {
    return ( 
    
        <GestureHandlerRootView>
    <Swipeable renderRightActions={renderRightActions }>
        <TouchableHighlight  
        underlayColor={colors.lightgray}
        onPress={onPress} 
        >
                 <View style={styles.container}>
                     {IconComponent }
                 {image &&   <Image 
                          source={image}
                          style={styles.image}
                    />}
                    
                    <View style={styles.titleContainer}>
                          <AppText style={styles.titleText} numberOfLines={1}> {title} </AppText>
                      {subTitle &&    <AppText style={styles.subTitleText} numberOfLines={1}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons
                        name='chevron-right' 
                        size={25}
                        color={colors.gray}
                    />
                    </View>
             </TouchableHighlight>
             </Swipeable>

            </GestureHandlerRootView>
       
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.lightgray,
        elevation: 1,
        
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: 'center'
    },
    titleContainer:{
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    titleText:{
        fontSize: 18,
        fontWeight:  'bold'
    },
    subTitleText:{
        fontSize: 18,
        color: colors.gray
    }
})


export default ListItem;
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image} from 'react-native';
import AppText from './AppText';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
// import { Image } from "react-native-expo-image-cache";
import colors from '../config/colors';

function Card({title, subTitle: price, description,  imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            
        <View style={[styles.card, styles.elevation]}> 
        <Image style={styles.image} 
        tint="light"
        source={{ uri: imageUrl }} />
            <View style={styles.titlecontainer}>
                   <View style={styles.ratingContainer}>
                    <Text style={styles.foodtitle} numberOfLines={1}>{title}</Text>
                    <View >
                    {/* <AntDesign 
                    name="heart"
                     size={17} 
                      color= "tomato" 
                      style={styles.heartContainer}
                      /> */}
                        </View>
                   </View>
                    <Text style={styles.description} numberOfLines={3}>{description}</Text >
                    <View style={styles.bagcontainer}>
                             <AppText style={styles.foodprice}>₦{price}</AppText >
                        <View style={[styles.iconcontainer, styles.elevation]}>
                        <FontAwesome5 name="shopping-bag" size={24} color="white" />
                        </View>
                    </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 9,
        width: "45%",
        overflow: "hidden",
                
    },
    image:{
        width: "100%",
        height: 170,
        
    },
    ratingContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },

    titlecontainer:{
        padding: 20,

    },

    heartContainer:{
        // borderWidth: 3,
        width: 35,
        height: 35,
        padding: 6,
        alignItems:'center',
        justifyContent: 'center'
    },

    foodtitle:{
        width: '90%',
        height: 30,
        fontWeight: "bold",
        fontSize: 19
    },
    description:{
        height: 50,
        textAlign: "left",
        fontWeight: '900',
        color: colors.gray,
        fontFamily: "Roboto"

    },
    foodprice:{
        color: colors.secondary,
        fontSize: 20,
        fontWeight: 'bold'
    },
      elevation: {
        elevation: 12,
        shadowColor: '#52006A',
      },    
      bagcontainer:{
        //   borderWidth: 2,
        paddingTop: 8,
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems:'center',
      },
      iconcontainer:{
          backgroundColor: colors.secondary,
          borderRadius: 5,
          width: 40,
          height: 40,
          padding: 6,
          alignItems:'center',
          justifyContent: 'center'
      }

})
export default Card;
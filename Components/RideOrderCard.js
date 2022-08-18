import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';
import Screen from './Screen';
import colors from '../config/colors';

function RideOrderCard ({image, title, description, backgroundColor}) {

    const [index, setIndex] = useState(0);

return (
        <View>
                      <TouchableOpacity  
                        onPress={() => setIndex(1)}
                      style={{alignItems: 'center'}}>
                    <View style={[styles.boxOption, {
                        borderWidth: 2,
                        borderColor: index === 1 ? colors.primary : colors.lightgray,
                        borderRadius: 30,
                    }]}>
                                    <Image 
                                        source={image}
                                        style={styles.boxImage}
                                    />
                            {/* <View style={styles.optionDescription}>
                                        <Text style={styles.optionTitle}>{title}</Text>
                                        <Text style={styles.optionText}>
                                                {description}
                                        </Text>
                            </View> */}
                    </View>
        </TouchableOpacity>

        </View>
   );
 }


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    boxOption: {
        height: 150,
        width: "90%",
        flexDirection: "row",
        justifyContent: 'center',
        margin: 12
    },    
    boxImage:{
        width: 300,
        height: 130
    },
    
    optionDescription: {
        width: "40%",
        margin:5
    },
    
    optionTitle:{
        color: colors.white,
        fontWeight: "bold",
        fontSize: 26,
        textAlign: 'left'
    },
    
    optionText:{
        textAlign: 'left',
        color: colors.white,
        marginTop: 15,
        fontSize: 16
    }
    
 })
export default RideOrderCard;
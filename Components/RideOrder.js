import React from 'react';
import {View, StyleSheet, Text, TextInput, Image, TouchableOpacity, FlatList} from 'react-native';
import colors from '../config/colors';
import RideOrderCard from './RideOrderCard';
import Screen from './Screen';
import defaultStyles from  '../config/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const deliverys =  [
    {
        id: 1,
        title: "Call A Bike",
        image: require("../assets/bike2.gif"),
        description: " Suitable for small Items Delivery; all sorts of things like CDs, DVDs, gifts, legal documents, shoes, gifts, clothes, signed documents, or just about anything.",
        // backgroundColor: colors.secondary
    
    },

    {
        id: 2,
        title: "Call A Cab",
        image: require("../assets/car.gif"),
        description: "Suitable forMedium sized Package Delivery; all sorts of things like, Computer Systems, Breakables or just about anything.",
        // backgroundColor: colors.secondary
    },

    {
        id: 3,
        title: "Call A Truck",
        image: require("../assets/truck2.gif"),
        description: "   Suitable for Very Large Items Delivery; all sorts of things like agricultural produce, cements or just about anything.",
        // backgroundColor: colors.secondary
    },

];


const VirtualizedList = ({children}) => {
    return (
        <FlatList
            data={[]}
            keyExtractor={() => "key"}
            renderItem={null}
            ListHeaderComponent={
                <>{children}</>
            }
        />
    )
}

function RideOrder (props) {
return (
    <VirtualizedList>

        <View style={styles.firstBox}>
                    <Text style={styles.rideTitle}>Order A Ride</Text>
        </View>

          <View>
                <TextInput 
                        style={styles.input}
                        placeholder='Enter Your Location'
                    /> 

                <TextInput 
                        style={styles.input}
                        placeholder='Enter Destination'
                    /> 
             </View>

             <Text style={styles.shopDescriptionTitle}>Select Vechicle</Text>

            <FlatList 
                data={deliverys}
                keyExtractor={delivery => delivery.id.toString()}
                renderItem={({item}) => 
            
                <RideOrderCard 
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    backgroundColor={item.backgroundColor}
                />
            }
            />

{/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}

        {/* <TouchableOpacity  style={styles.container}>
                    <View style={styles.boxOption}>
                            <View style={styles.boxImageBox}>
                                    <Image 
                                        source={require("../assets/bike.png")}
                                        style={styles.boxImage}
                                    />
                            </View>
                            <View style={styles.optionDescription}>
                                        <Text style={styles.optionTitle}>Call A Bike</Text>
                                        <Text style={styles.optionText}>
                                            Suitable for small Items Delivery; all sorts of things 
                                             like CDs, DVDs, gifts, legal documents, shoes, gifts, 
                                            clothes, signed documents, 
                                            or just about anything.
                                        </Text>
                            </View>
                    </View>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.container}>
                    <View style={styles.boxOption}>
                            <View style={styles.boxImageBox}>
                                    <Image 
                                        source={require("../assets/bike.png")}
                                        style={styles.boxImage}
                                    />
                            </View>
                            <View style={styles.optionDescription}>
                                        <Text style={styles.optionTitle}>Call A Bus</Text>
                                        <Text style={styles.optionText}>
                                            Suitable for small Large Package Delivery; all sorts of things 
                                             like, Computer Systems, Breakables
                                            or just about anything.
                                        </Text>
                            </View>
                    </View>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.container}>
                    <View style={styles.boxOption}>
                            <View style={styles.boxImageBox}>
                                    <Image 
                                        source={require("../assets/truck.png")}
                                        style={styles.boxImage}
                                    />
                            </View>
                            <View style={styles.optionDescription}>
                                        <Text style={styles.optionTitle}>Call A Truck</Text>
                                        <Text style={styles.optionText}>
                                            Suitable for Very Large Items Delivery; all sorts of things 
                                             like agricultural produce, cements
                                            or just about anything.
                                        </Text>
                            </View>
                    </View>
        </TouchableOpacity> */}
    </VirtualizedList>
   );
 }


const styles = StyleSheet.create({
                firstBox:{
                        padding: 10,
                        backgroundColor: colors.primary
                },

                rideTitle:{
                    fontSize: 20,
                    color: colors.white,
                    textAlign: "center"
                },

                input: {
                    margin: 6,
                    backgroundColor: colors.lightgray,
                    padding: 16,
                    borderRadius: 15,
                    fontSize: 18,
                    color: colors.black,
                    fontWeight: "bold"
                  },

                  addBox:{
                    padding: 15,
                    marginLeft: 5,
                    marginRight: 5,
                    borderRadius: 20,
                    backgroundColor: colors.secondary
                },
            
                addText:{
                    color: colors.white,
                    fontWeight: 'bold',
                    fontSize: 25,
                    textAlign: 'center'
                },

                shopDescriptionTitle:{
                    fontSize:20,
                    fontWeight: "bold",
                    color: colors.primary,
                    padding: 10,
                    marginLeft: 5
                  },

                  vechicleBigBox:{
                      borderTopWidth: 1,
                      borderColor: colors.lightgray,
                      padding: 10,
                      alignItems: "center",
                      justifyContent: "space-evenly",
                  },

                  vechicleBox:{
                      borderWidth: 4,
                      borderColor: colors.lightgray,
                      width: "100%",
                      alignItems: "center",
                      borderRadius: 10,
                      marginTop: 12
                  },
                  
                  iconRide: {
                    fontWeight: "bold",
                    color: colors.primary,
                    fontSize: 17,
                    
                  },

                  logImage:{
                    borderWidth: 2,
                    width: 200,
                    height: 200
                  }
 })
export default RideOrder;
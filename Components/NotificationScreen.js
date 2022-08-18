import React, {useState} from 'react';
import { FlatList, StyleSheet, View, Text} from 'react-native';
import { ListItem, ListItemDeleteAction} from './lists';
import Screen from './Screen';
import PayStack from './payment/paystack';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import colors from '../config/colors';



const  initialNotifications =[ {
    id: 1,
    title: 'Abass Olaiya ordered your product',
    description: 'D1',
    image: require('../assets/bell.gif')
},
{
    id:  2,
    title: 'Agoro Oluwaseyi ordered your product',
    description: 'D2',
    image: require('../assets/bell.gif')
},

{
    id: 3,
    title:  'Omotolani Kafilah ordered your product',
    description: 'D3',
    image: require('../assets/bell.gif')
},
{
    id:  4,
    title: 'Afolabi Damilare  ordered your product',
    description: 'D4',
    image: require('../assets/bell.gif')
},


]
function Notifications(props) {
    const  [notifications , setNotifications] = useState (initialNotifications);
    const [refreshing, setRefreshing] = useState(false);   

            const handleDelete = (notification)  =>{
                    setNotifications(notifications.filter( (m) => m.id !== notification .id));
                }
                

    return (
        <Screen >
      <Text style={styles.textHeader}>Notifications</Text >
        <FlatList 
                data={notifications}
                keyExtractor={notifications => notifications.id.toString()}
                renderItem= {({item})  =>(
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Notifications Clicked" ,  item )}
                        renderRightActions={ () => 
                        <ListItemDeleteAction 
                            onPress={() => handleDelete  (item)}
                            
                        />}
                      
                        />
                )}

                // ItemSeparatorComponent={() => 
                //         <View  style={{width: "100%", backgroundColor: "#BAFFB4", height: 1}}/>
                // }
                refreshing={refreshing}
                onRefresh={()  => {
                    setNotifications([
                        {
                            id:  3,
                            title: 'Toluwalope Oduoye ordered your product',
                            description: 'D3',
                            image: require('../assets/bell.gif')
                        },
                        {
                            id:  4,
                            title: 'Alex Bobby ordered your product',
                            description: 'D4',
                            image: require('../assets/bell.gif')
                        }
                    ])
                }}
        />

            {/* <MapView 
                        style={styles.map}
                        initialRegion={{
                            latitude: 6.5244,
                            longitude: 3.3792,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
            /> */}

                
        </Screen>
    )

}

const styles = StyleSheet.create({

    map:{
            flex: 1,
            height: 200
    },

    textHeader:{
        color: colors.primary,
        fontSize:23,
        fontWeight: "bold",
        textAlign: "center"
    }

})

export default Notifications;
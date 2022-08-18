import React , {useState}from 'react';
import { TextInput, View , StyleSheet, Text, TouchableNativeFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import Screen  from './Screen';

import colors from '../config/colors';          
import defaultStyles from "../config/styles"
import PickerItem from './PickerItem';
import AppText from './AppText';
import { SubmitButton } from './forms/formIndex';

function Picker(
    {icon,
         items, 
          onSelectItem, 
          selectedItem,
           PickerItemComponent = PickerItem,
          placeholder,
          numberOfColumns = 1,
          width = "100%",
          ...otherProps
        }) {  
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
        <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons 
                    name={icon}
                    size={20}
                    color={colors.primary}
                    style={styles.icon}
                />}

                    {selectedItem ? 
                  (  <AppText style={styles.text}>{selectedItem.label}</AppText> 
                   ) : (
                   
                   <AppText  style={styles.placeholder}>{placeholder}</AppText>
                   
                   )}
           
                   <MaterialCommunityIcons 
                    name="chevron-down"
                    size={20}
                    color={colors.primary}
                />
        </View>
        </TouchableNativeFeedback>
        <Modal visible={modalVisible} animationType='slide'
            style={styles.modalView}
        >
        <Screen >

            <View style={styles.modalContainer}>
                        
                <FlatList
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            numColumns={numberOfColumns}
                            renderItem={({item})  =>
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                            />
                        }
                        />

                    <Button
                        title='Close'
                        onPress={() => setModalVisible(false)}
                        color={colors.primary}
                    />

                </View>                                
        </Screen>

        </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems:  'center'
    },
    icon:{
        marginRight: 10
    },
    text:{
        flex: 1
    },

    placeholder:{
        color: defaultStyles.colors.gray
    },

    modalContainer:{
        marginTop: 180,
        alignItems: "center",
        justifyContent: "center",
    }

})

export default Picker;
import React from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export function ProductImagePicker(props) {


    const checkForCameraRollPermission = async () => {
        const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert("Please grant camera roll permissions inside your system's settings");
        } else {
            console.log('Media Permissions are granted')
            props.addimage()
        }

    }

    return (
        <View style={imageUploaderStyles.container}>
            {
                props.image && <Image source={{ uri: props.image.uri }} style={{ width: 200, height: 200 }} />
            }

            <View style={imageUploaderStyles.uploadBtnContainer}>
                <TouchableOpacity onPress={() => checkForCameraRollPermission()} style={imageUploaderStyles.uploadBtn} >
                    <Text>{props.image ? 'Edit' : 'Upload'} Image</Text>
                    <AntDesign name="camera" size={20} color="black" />
                </TouchableOpacity>
            </View>

        </View>

    );
}

const imageUploaderStyles = StyleSheet.create({
    container: {
        elevation: 2,
        height: 140,
        width: 140,
        backgroundColor: '#efefef',
        position: 'relative',
        borderRadius: 20,
        overflow: 'hidden',
    },
    uploadBtnContainer: {
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: 'lightgrey',
        width: '100%',
        height: '25%',
    },
    uploadBtn: {
        display: 'flex',
        alignItems: "center",
        justifyContent: 'center'
    }
})
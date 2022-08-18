import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { Video } from 'expo-av';
import colors from "../config/colors";
import routes from "../app/navigation/routes";



const SelectAction = ({ navigation }) => {

    const onBuffer = (data) => {
        console.log("Buffering", data)
    }

    const videoError = (data) => {
        console.log("Error", data)
    }

    return (
        <View style={styles.container}>
            {/* <Video source={require("../assets/coverbg.mp4")}
                   rate={0.8}
                   shouldPlay={true}
                   isLooping={true}
                   muted={true}
                   resizeMode="cover"
                   style={styles.backgroundVideo} />
                   <View style={styles.opacityContainer}></View> */}


            <View style={styles.logocontainer}>

                <Image
                    source={require('../assets/agrico.png')}
                    style={styles.logo}
                />
                <Text style={styles.motto}>
                    ...bringing the restuarant to you
                </Text>

            </View>

            <TouchableOpacity
                style={styles.loginButton}
            >
                <Text style={styles.login_text}
                    onPress={() => navigation.navigate(routes.LOGIN)}
                >Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.login_text}
                    onPress={() => navigation.navigate(routes.REGISTER)}
                >Register</Text>
            </TouchableOpacity>




        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10
    },
    backgroundVideo: {
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        opacity: 0.7,
        justifyContent: "center"

    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        opacity: 0.75,
        borderTopWidth: 5,
        borderTopColor: "rgba(0, 0, 0, .7)",
        justifyContent: "center"
    },
    opacityContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.black,
        opacity: 0.5

    },
    logocontainer: {
        borderColor: "red",
        justifyContent: "center",
        width: "100%",
        position: "absolute",
        top: 50,
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 100,

    },
    motto: {
        color: colors.white,
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        opacity: 0.9
    },

    login_text: {
        fontWeight: "bold",
        fontSize: 21,
        color: colors.white,
        position: "relative",
        textAlign: "center",
        borderColor: "red"
    }
})

export default SelectAction;


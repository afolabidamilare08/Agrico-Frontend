import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay:{
    borderWidth: 1,
    position: 'absolute',
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    zIndex: 1,
    opacity: 1,
  }
})

export default ActivityIndicator;
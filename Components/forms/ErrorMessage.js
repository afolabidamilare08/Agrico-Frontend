import React from 'react';
import { StyleSheet, Text } from 'react-native';


const ErrorMessage = (props) => {
    if (!props.visible || !props.error_status) return null;

    return (
        <Text style={styles.error}>{props.error}</Text>
    );
}

const styles = StyleSheet.create({
    error:{
        color: "red"
    }
})

export default ErrorMessage;
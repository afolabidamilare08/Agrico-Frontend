import React from 'react';
import { TouchableOpacity , Text,StyleSheet} from 'react-native';
import colors from '../config/colors';

function PickerItem({item,  onPress}) {
    
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>
                    {item. label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text:{
        padding: 20,
        borderWidth: 1
    }
})
export default PickerItem;
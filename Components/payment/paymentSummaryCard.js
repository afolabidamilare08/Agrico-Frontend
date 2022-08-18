import React from 'react';
import {View, StyleSheet} from 'react-native';

function paymentSummaryCard (props) {

    
return (
<View style={styles.container}>
            <View style={styles.dan}>
                              <Text style={styles.danSub}>SubTotal</Text>         
                              <Text style={styles.danPrice}>N2000</Text>                           
                    </View>

                    <View style={styles.dan}>
                              <Text style={styles.danSub}>Delivery Fee</Text>         
                              <Text style={styles.danPrice}>N200</Text>                           
                    </View>

                    <View style={styles.dan}>
                              <Text style={styles.danST}>Total</Text>         
                              <Text style={styles.danPrice}></Text>                           
                    </View>
</View>
   );
 }



const styles = StyleSheet.create({
container:{
}
 })
export default paymentSummaryCard;
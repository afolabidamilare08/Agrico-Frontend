import React, {useRef}from 'react';
import {View, StyleSheet,Text, TouchableOpacity} from 'react-native';
import  { Paystack, paystackProps }  from 'react-native-paystack-webview';


function PayStack () {
  const paystackWebViewRef = useRef(null); 

return (
<View style={styles.container}>
<Paystack
        paystackKey="pk_test_bc6fa88f1991da0c625709df2b0b94abe4186d24"
        billingEmail="businessagrico@gmail.com"
        amount={'25000.00'}
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        ref={paystackWebViewRef}
      />

        <TouchableOpacity onPress={()=> paystackWebViewRef.current.startTransaction()}>
          <Text>Pay Now</Text>
        </TouchableOpacity>

{/* <Paystack  
        paystackKey="pk_test_bc6fa88f1991da0c625709df2b0b94abe4186d24"
        amount={'25000.00'}
        billingEmail="paystackwebview@something.com"
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        autoStart={true}
      /> */}
</View>
   );
 }


const styles = StyleSheet.create({
container:{
}
 })
export default PayStack;
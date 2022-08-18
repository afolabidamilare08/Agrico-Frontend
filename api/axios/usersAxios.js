import React from 'react';
import {View, StyleSheet} from 'react-native';

function usersAxios (props) {

  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        // handle success
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      })
      .finally(function () {
        // always executed
        console.log('Finally called');
      });
  };

return (
            <View style={styles.container}>
            <Text style={{fontSize: 30, textAlign: 'center'}}>
              Example of Axios Networking in React Native
            </Text>
            {/*Running GET Request*/}
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={getDataUsingSimpleGetCall}>
              <Text>Simple Get Call</Text>
            </TouchableOpacity>

            </View>
   );
 }


 const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});
export default usersAxios;
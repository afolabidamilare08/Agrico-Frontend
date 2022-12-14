import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import routes from '../app/navigation/routes';
import colors from '../config/colors';

const data = [
  {
    title: 'Save your time',
    text: 'Order your Food while at work or busy',
    image: require('../assets/time.png'),
    bg: colors.purple,
  },
  {
    title: 'Stress Free',
    text: 'Order your raw food items now from the comfort of your home!',
    image: require('../assets/shopbag.png'),
    bg: colors.lightbrown
  },
  {
    title: 'Deliver Me',
    text: "Get your items delivered with the speed of light",
    image: require('../assets/deliveryguy.png'),
    bg: colors.lightgold
  },
];


const OnBoard = ({ navigation }) => {

  const renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>

        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  }

  const keyExtractor = (item) => item.title;
  const renderDoneButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text
          style={styles.rightText}
          onPress={() => navigation.navigate(routes.LOGIN)}
        > Done</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.rightTextWrapper}>
        <Text style={styles.rightText}> Next</Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View style={styles.leftTextWrapper}>
        <Text style={styles.leftText} > Prev</Text>
      </View>
    );
  };

  const handleDone = () => {
    handleDone();
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        data={data}
        onDone={handleDone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    // marginVertical: 60,
    width: 300,
    height: 300

  },
  title: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 60,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.white,
    marginTop: 20,
    fontWeight: 'bold'
  },

  rightTextWrapper: {
    width: 40,
    height: 40,
    fontWeight: "bold",
    marginRight: 20,
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center',
  },

  rightText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.white
  },

  leftTextWrapper: {
    width: 40,
    height: 40,
    fontWeight: "bold",
    marginLeft: 20,
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center',
  },

  leftText: {
    fontSize: 16,
    fontWeight: "bold",
    fontWeight: "bold",
    color: colors.white
  },

  dotStyle: {
    backgroundColor: colors.gray
  },

  activeDotStyle: {
    backgroundColor: colors.white
  }

});

export default OnBoard;
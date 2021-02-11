import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SignIn");
    }, 2000);
  }, []);

  return (<View style={styles.container}>
    <Logo/>
    <View style={{
        height: 30
      }}/>
    <Text style={styles.text}>ShopAroundMe</Text>
  </View>);
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D929A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 32,
    color: '#ffffff'
  }
});

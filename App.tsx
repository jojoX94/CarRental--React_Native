/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.highlight}>Welcome hello </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontFamily: 'Poppins-Light',
  },
});

export default App;

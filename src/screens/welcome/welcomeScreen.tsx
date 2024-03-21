import {ImageBackground, StatusBar, Text} from 'react-native';
import assets from '../../constants/assets';
import styles from './welcomeScreenStyle';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';
import CustomButton from '../../components/button/customButton';

function WelcomeScreen({navigation}: any) {
  useFocusEffect(
    useCallback(() => {
      // This will run when screen is `focused` or mounted.
      StatusBar.setHidden(true);

      // This will run when screen is `blured` or unmounted.
      return () => {
        StatusBar.setHidden(false);
      };
    }, []),
  );

  function goToTabNavigator() {
    navigation.navigate('TabStack');
  }

  return (
    <ImageBackground source={assets.images.welcome} style={[styles.container]}>
      <Text style={styles.text}>Premium ride Affordable price</Text>
      <CustomButton
        type="filled"
        title="Get Started"
        onPress={goToTabNavigator}
      />
    </ImageBackground>
  );
}

export default WelcomeScreen;

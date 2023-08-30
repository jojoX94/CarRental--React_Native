import {Button} from '@rneui/base';
import {Text, View} from 'react-native';
import useAuthService from '../hooks/service';

function HomeScreen({navigation}: any) {
  const authService = useAuthService();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Go to Register
      </Button>
      <Button
        onPress={() => {
          try {
            authService.logout();
          } catch (error) {
            console.log('HomeScreen -> error', error);
          }
        }}>
        Sign out
      </Button>
    </View>
  );
}

export default HomeScreen;

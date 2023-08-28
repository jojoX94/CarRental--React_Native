import {Button} from '@rneui/base';
import {Text, View} from 'react-native';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Register');
        }}>
        Go to Register
      </Button>
    </View>
  );
}

export default HomeScreen;

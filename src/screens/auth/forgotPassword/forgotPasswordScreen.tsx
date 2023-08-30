import ForgotPasswordWrapper from '../../../components/wrapper/forgotPasswordWrapper/forgotPasswordWrapper';
import Assets from '../../../constants/assets';
import CustomTextfield from '../../../components/textfield/customTextfield';
import {useState} from 'react';
import styles from './forgotPasswordSreenStyle';
import {Text, View} from 'react-native';
import {validateEmail} from '../../../utils/validation';

function ForgotPasswordScreen() {
  const [showLoading, setShowLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [email, setEmail] = useState('');

  function onSubmit() {
    setIsSubmit(true);
    setShowLoading(true);

    if (validateEmail(email)) {
      console.log('success');
    } else {
      console.log('error');
    }

    setShowLoading(false);
  }

  return (
    <ForgotPasswordWrapper
      showLoading={showLoading}
      icon={Assets.icons.my_password}
      title={"Forgot {'\n'} password?"}
      subtitle={
        'Don’t worry ! It happens . Please Input ur email to fix the issue and we will send code in the email.'
      }
      action={onSubmit}
      actionTitle={'Submit'}>
      <View style={styles.container}>
        <Text style={styles.label}>Your email </Text>
        <CustomTextfield
          onChange={setEmail}
          label={'johnDoe@gmail.com'}
          value={email}
          error={!validateEmail(email) && isSubmit}
          helperText={
            'Please enter a valid password with 8 characters and 1 number and 1 letter'
          }
        />
      </View>
    </ForgotPasswordWrapper>
  );
}

export default ForgotPasswordScreen;

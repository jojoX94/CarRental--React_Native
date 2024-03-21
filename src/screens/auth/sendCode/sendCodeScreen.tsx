import ForgotPasswordWrapper from '../../../components/wrapper/forgotPasswordWrapper/forgotPasswordWrapper';
import Assets from '../../../constants/assets';
import {useState} from 'react';
import styles from './sendCodeScreenStyle';
import {Text, TouchableOpacity, View} from 'react-native';
import {validateVerificationCode} from '../../../utils/validation';
import CodeTextfield from '../../../components/codefield/codefield';

function SendCodeScreen() {
  const [showLoading, setShowLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  function onSubmit() {
    setIsSubmit(true);
    setShowLoading(true);

    if (validateVerificationCode(verificationCode)) {
      console.log('success');
    } else {
      console.log('error');
    }

    setTimeout(() => {
      setShowLoading(false);
    }, 2000);
  }

  return (
    <ForgotPasswordWrapper
      showLoading={showLoading}
      icon={Assets.icons.completed}
      title={'Authy Verification'}
      subtitle={
        'Copy the verification code in your authy application to verify this account recovery'
      }
      action={onSubmit}
      actionTitle={'Submit it verification'}>
      <View style={styles.container}>
        <CodeTextfield
          value={verificationCode}
          setValue={setVerificationCode}
          error={isSubmit && !validateVerificationCode(verificationCode)}
          helperText={'Invalid verification code!'}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Don’t receive code ?</Text>
          <TouchableOpacity onPress={() => console.log('resend code')}>
            <Text style={styles.resendCode}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ForgotPasswordWrapper>
  );
}

export default SendCodeScreen;

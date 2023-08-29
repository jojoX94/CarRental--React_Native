import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './footerLinksStyle';
import Assets from '../../constants/assets';
import style from '../../screens/auth/login/loginScreenStyle';

type FooterLinksProps = {
  type: 'signUp' | 'signIn';
  title: string;
  subtitle: string;
  buttonTitle: string;
  buttonAction: () => void;
};

function FooterLinks({
  type,
  title,
  subtitle,
  buttonTitle,
  buttonAction,
}: FooterLinksProps) {
  const links = [
    {
      title: 'Facebook',
      icon: Assets.icons.facebook,
      onPress: () => {
        if (type === 'signIn') {
          console.log('sign in with facebook');
        }
      },
    },
    {
      title: 'Google',
      icon: Assets.icons.google,
      onPress: () => {},
    },
    {
      title: 'Apple',
      icon: Assets.icons.apple,
      onPress: () => {},
    },
    {
      title: 'Twitter',
      icon: Assets.icons.twitter,
      onPress: () => {},
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.line} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.links}>
        {links.map((link, index) => (
          <TouchableOpacity onPress={link.onPress} key={index}>
            <Image source={link.icon} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={style.forgotPassword}>
        <Text style={style.forgotPasswordText}>{subtitle}</Text>
        <TouchableOpacity onPress={buttonAction}>
          <Text style={style.forgotPasswordLink}>{buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FooterLinks;

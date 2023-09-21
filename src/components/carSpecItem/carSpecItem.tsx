import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../constants/colors';

type CarSpectItemProps = {
  title: string;
  value: string;
  label: string;
};

function CarSpectItem({title, value, label}: CarSpectItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>
        <Text style={styles.contentValue}>{value}</Text>
        <Text style={styles.contentLable}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 8,
    borderRadius: 10,
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 1,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: Colors.BLACK,
    opacity: 0.7,
  },
  content: {},
  contentValue: {
    fontSize: 15,
    fontFamily: 'Poppins-Semibold',
    color: '#000',
  },
  contentLable: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: Colors.GRAY,
  },
});

export default CarSpectItem;

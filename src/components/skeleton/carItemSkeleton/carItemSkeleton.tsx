import {View} from 'react-native';
import {Skeleton} from '@rneui/themed';
import styles from './carItemSkeletonStyle';
import {LinearGradient} from 'react-native-svg';

const CarItemSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Skeleton animation="pulse" width={180} height={30} />
          <Skeleton animation="pulse" width={80} height={30} />
        </View>
        <Skeleton circle width={40} height={40} />
      </View>
      <Skeleton
        LinearGradientComponent={LinearGradient}
        animation="pulse"
        height={200}
      />
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Skeleton animation="pulse" width={50} height={30} />
          <Skeleton animation="pulse" width={50} height={30} />
        </View>
        <View style={styles.footerRight}>
          <Skeleton animation="pulse" width={100} height={30} />
        </View>
      </View>
    </View>
  );
};

export default CarItemSkeleton;

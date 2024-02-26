import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const TabScreen1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text>Iconos</Text>
      <Icon name="at-circle-outline" size={100} color="#900" />
    </View>
  );
};

export default TabScreen1;

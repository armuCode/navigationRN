import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import TouchableIcon from '../components/TouchableIcon';

const TabScreen1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text>Iconos</Text>
      <TouchableIcon name={'18-up-rating'} />
      <TouchableIcon name={'change-history'} />
      <TouchableIcon name={'check-box-outline-blank'} />
      <TouchableIcon name={'connecting-airports'} />
    </View>
  );
};

export default TabScreen1;

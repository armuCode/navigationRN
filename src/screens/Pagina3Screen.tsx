import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Button, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface PropsPag3 extends NativeStackScreenProps<any, any> {}

const Pagina3Screen = ({navigation}: PropsPag3) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina3Screen</Text>
      <Button title="Ir Pag 2" onPress={() => navigation.pop()} />
      <Button title="Ir Pag Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3Screen;

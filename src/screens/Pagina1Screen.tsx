import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface PropsPag1 extends NativeStackScreenProps<any, any> {}

const Pagina1Screen = ({navigation}: PropsPag1) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina1Screen</Text>
      <Button
        title="Ir Pag 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};

export default Pagina1Screen;

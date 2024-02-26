import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
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
      <Text>Navegar con argumentos</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonaScreen', {
            id: 1,
            name: 'Arm',
          })
        }>
        <Text>Armando</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonaScreen', {
            id: 2,
            name: 'Eli',
          })
        }>
        <Text>Eli</Text>
      </TouchableOpacity>
      {/* <Button
        title="Ir a persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
    </View>
  );
};

export default Pagina1Screen;

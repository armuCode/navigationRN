import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo en pag 2',
      headerBackTitle: 'Atras',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text>Pagina2Screen</Text>
      <Button
        title="Ir Pag 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};

export default Pagina2Screen;

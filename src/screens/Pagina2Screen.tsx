import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';

const Pagina2Screen = () => {
  const navigator: any = useNavigation();
  console.log('🚀 ~ Pagina2Screen ~ navigator:', navigator);

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

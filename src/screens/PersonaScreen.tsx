//import {useRoute, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigator/StackNavigator';

// interface RouteParams {
//   id: number;
//   nombre: string;
// }

interface PropsPersona
  extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

const PersonaScreen = ({route, navigation}: PropsPersona) => {
  // const params = route.params as RouteParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, [navigation, params.nombre]);

  return (
    <View>
      <Text>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

export default PersonaScreen;

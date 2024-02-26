import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';

const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);
  return (
    <View>
      <Text>ContactsScreen</Text>
      {!authState.isLoggedIn === true && (
        <Button title="SignIn" onPress={signIn} />
      )}
    </View>
  );
};

export default ContactsScreen;

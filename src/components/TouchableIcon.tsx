import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../context/AuthContext';

interface PropsTIcon {
  name: string;
}

const TouchableIcon = ({name}: PropsTIcon) => {
  const {changeFavoriteIcon} = useContext(AuthContext);
  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(name)}>
      <Icon name={name} size={75} color="#000000" />
    </TouchableOpacity>
  );
};

export default TouchableIcon;

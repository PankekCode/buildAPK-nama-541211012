import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Linking } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const MyButton2 = ({ url }) => {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#404040',
        padding: 10,
        borderRadius: 5,
      }}
      onPress={handlePress}
    >
      <Text style={{ textTransform: 'capitalize', textAlign:'center', color: 'white' }}>
        <EvilIcons name="external-link" size={24} color="white" />
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton2;
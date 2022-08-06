import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = ({type, title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
      }}
      onPress={onPress}>
      <Text
        style={{
          ...styles.text,
          color: type === 'secondary' ? 'black' : 'white',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0BCAD4',
    paddingVertical: 12,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
    fontFamily: 'Nunito-Semibold',
    // fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});

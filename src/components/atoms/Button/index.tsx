import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonProps} from './types';

const Button: React.FC<ButtonProps> = ({type, title}: ButtonProps) => {
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
      }}>
      <Text
        style={{
          ...styles.text,
          color: type === 'secondary' ? 'black' : 'white',
        }}>
        {title}
      </Text>
    </View>
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
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});

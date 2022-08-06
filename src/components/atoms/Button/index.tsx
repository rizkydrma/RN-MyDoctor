import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  title: string;
  type: ButtonType;
  onPress?: () => void;
};

export type {ButtonProps, ButtonType};

const Button: React.FC<ButtonProps> = ({type, title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

type Style = {
  container: any;
  text: any;
};

const styles = StyleSheet.create<Style>({
  container: (type: ButtonType) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    paddingVertical: 12,
    borderRadius: 12,
  }),
  text: (type: ButtonType) => ({
    fontSize: 18,
    fontFamily: 'Nunito-Semibold',
    textAlign: 'center',
    color: type === 'secondary' ? 'black' : 'white',
  }),
});

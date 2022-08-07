import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils';

type alignType = 'left' | 'center' | 'right';

type LinkProps = {
  text: string;
  size?: number;
  align?: alignType;
  onPress?: () => void;
};

const Link: React.FC<LinkProps> = ({text, size, align = 'left', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size, align)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Link;

type Style = {
  text: any;
};

const styles = StyleSheet.create<Style>({
  text: (size: number, align: alignType) => ({
    fontSize: size,
    color: colors.text.secondary,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});

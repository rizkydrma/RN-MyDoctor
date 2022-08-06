import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type alignType = 'left' | 'center' | 'right';

type LinkProps = {
  text: string;
  size?: number;
  align?: alignType;
};

const Link: React.FC<LinkProps> = ({text, size, align = 'left'}) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{text}</Text>
    </View>
  );
};

export default Link;

type Style = {
  text: any;
};

const styles = StyleSheet.create<Style>({
  text: (size: number, align: alignType) => ({
    fontSize: size,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});

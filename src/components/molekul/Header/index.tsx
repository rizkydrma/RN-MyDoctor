import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackDark} from '../../../assets';
import {Gap} from '../../atoms';
import {colors} from '../../../utils';

type HeaderProps = {
  text: string;
};

const Header: React.FC<HeaderProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.text}>{text}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    color: colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
});

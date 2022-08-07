import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../atoms';

type HeaderProps = {
  text: string;
  onPress?: () => void;
};

const Header: React.FC<HeaderProps> = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" onPress={onPress} />
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
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    flex: 1,
    textAlign: 'center',
  },
});

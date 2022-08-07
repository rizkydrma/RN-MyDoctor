import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import Input from '../../components/atoms/Input';
import {Button, Gap, Link} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {NavigationList} from '../../types';
import {colors} from '../../utils';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationList>>();
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Link text="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" type="primary" />
      <Gap height={30} />
      <Link
        text="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 60,
    backgroundColor: colors.white,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    color: colors.text.primary,
    maxWidth: 153,
    marginVertical: 40,
  },
});

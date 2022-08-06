import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import Input from '../../components/atoms/Input';
import {Button, Gap, Link} from '../../components';

const Login = () => {
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
      <Link text="Create New Account" size={16} align="center" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 60,
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    color: '#112340',
    maxWidth: 153,
    marginVertical: 40,
  },
});

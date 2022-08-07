import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.page}>
      <Header text="Daftar Akun" />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Job" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button title="Continue" type="primary" />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    paddingTop: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});

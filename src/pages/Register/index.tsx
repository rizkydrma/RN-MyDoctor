import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';

const Register = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Register</Text>
      <Button title="Back" type="primary" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});

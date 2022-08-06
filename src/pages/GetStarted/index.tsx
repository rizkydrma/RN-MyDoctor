import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';
import Gap from '../../components/atoms/Gap';
import {NavigationList} from '../../types';

const GetStarted = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavigationList>>();

  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          type="primary"
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 60,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Nunito-Semibold',
    fontSize: 28,
    // fontWeight: '700',
    color: 'white',
    marginTop: 91,
    maxWidth: 250,
  },
});
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}

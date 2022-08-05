import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';
import Gap from '../../components/atoms/Gap';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button type="primary" title="Get Started" />
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
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    marginTop: 91,
    maxWidth: 236,
  },
});

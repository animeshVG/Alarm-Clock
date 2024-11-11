import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Indicator from '../components/Indicator';
import Alarms from '../components/Alarms';

const Home = () => {
  return (
    <View style={styles.bg}>
      <Indicator />
      <Alarms />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'black',
    // color: '#A7CBF0',
  },
});
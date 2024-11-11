import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Indicator = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.hero}>
        <Text style={styles.Text}>All alarms are off</Text>
      </View>
    </View>
  );
};

export default Indicator;

const styles = StyleSheet.create({
  bg: {
    height: '35%',
    width: '100%',
    // backgroundColor: 'red',
  },
  hero: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: '#A4C9F3',
    fontSize: 40,
  },
});

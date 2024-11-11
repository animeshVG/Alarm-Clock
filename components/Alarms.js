import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';

const Alarms = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.hero}>
        <View style={styles.add}>
          <Text style={styles.Text}>+</Text>
        </View>
        <Card time={'9:15 AM'} days={'Weekends'} />
        <Card time={'2:00 PM'} days={'Weekdays'} />
        <Card time={'5:00 AM'} days={'Weekdays'} />
      </View>
    </View>
  );
};

export default Alarms;

const styles = StyleSheet.create({
  bg: {
    height: '55%',
    width: '100%',
  },
  hero: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 15,
  },
  add: {
    height: '10%',
    width: '100%',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
  },
  Text: {
    color: '#A4C9F3',
    fontSize: 40,
  },
});

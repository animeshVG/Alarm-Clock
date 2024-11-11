import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import SwitchToggle from 'react-native-switch-toggle';

const Card = ({days, time}) => {
  const [toggleOn, setToggleOn] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.main}>
        <View style={styles.Left}>
          <Text style={styles.num}>{time}</Text>
        </View>
        <View style={styles.Right}>
          <View style={styles.toggles}>
            <View>
              <Text style={styles.alarm}>{days}</Text>
            </View>
            <View>
              <SwitchToggle
                switchOn={toggleOn}
                onPress={() => setToggleOn(!toggleOn)}
                circleColorOff="#f4f4f4"
                circleColorOn="#f4f4f4"
                backgroundColorOn="#A4C9F3"
                backgroundColorOff="#767577"
                containerStyle={{
                  width: 55,
                  height: 25,
                  borderRadius: 25,
                }}
                circleStyle={{
                  width: 30,
                  height: 30,
                  borderRadius: 20,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: '30%',
    width: '100%',
    backgroundColor: '#171C22',
    marginTop: 10,
    borderRadius: 10,
  },
  main: {
    height: '100%',
    width: '100%',
    // backgroundColor: 'red',

    display: 'flex',
    flexDirection: 'row',
  },
  Left: {
    height: '100%',
    width: '40%',
    // backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Right: {
    height: '100%',
    width: '60%',
    // backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  toggles: {
    height: '100%',
    width: '75%',
    // backgroundColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  num: {
    fontSize: 30,
    fontWeight: 600,
    color: 'grey',
  },
  alarm: {
    color: 'white',
    fontSize: 15,
  },
});

import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TitleText from '../text/TitleText';
import Colors from '../../theme/Colors';

const HomeButton = (props: any) => {
  const [scaleValue] = useState(new Animated.Value(1));
  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const scaleStyle = {
    transform: [{scale: scaleValue}],
    backgroundColor: Colors.primaryDeep,
    padding: 10,
    borderRadius: 10,
  };
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[scaleStyle]}>
        <TitleText
          text={props.text}
          textStyle={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: Colors.background,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;

const styles = StyleSheet.create({});

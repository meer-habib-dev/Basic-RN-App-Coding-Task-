import {StyleSheet, View} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';

interface Props {
  height?: number;
}
const Loader = ({height}: Props) => {
  return (
    <View style={styles.loaderContainer}>
      <Lottie
        style={{
          height: height ? height : 300,
        }}
        source={require('../../assets/json/planet.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {alignItems: 'center', flex: 1, justifyContent: 'center'},
  loader: {
    height: 300,
  },
});

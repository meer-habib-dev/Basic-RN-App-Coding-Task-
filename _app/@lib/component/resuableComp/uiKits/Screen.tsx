import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '../../../constants/theme/Colors';
type Props = {
  children: React.ReactNode;
  style?: ViewStyle | any;
};
const Screen = ({children, style}: Props) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: Colors.background,
    // flex: 0,
  },
});

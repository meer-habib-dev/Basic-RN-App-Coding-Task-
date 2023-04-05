import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import TitleText from '../text/TitleText';
import Colors from '../../theme/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props {
  color?: string;
}
const BackButton = ({color}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        left: 20,
        top: 60,
        padding: 6,
        paddingHorizontal: 15,
        backgroundColor: color ? color : Colors.primaryDeep,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0,
        zIndex: 9999,
      }}
      onPress={() => navigation.goBack()}>
      <Icon
        color={color ? Colors.black : Colors.background}
        size={20}
        name="caret-back"
      />
      <TitleText
        text={'Back'}
        textStyle={{
          color: color ? Colors.black : Colors.background,
          marginLeft: 3,
        }}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

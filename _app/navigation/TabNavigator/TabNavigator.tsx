import {Platform, StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import CustomerScreen from '../screens/CustomerScreen';
// import OrderScreen from '../screens/OrderScreen';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '@rneui/base';
// import HomeScreen from '../../screens/Home';
// import ShowMore from '../../screens/ShowMore';
import {SCREEN_WIDTH} from '../../@lib/constants/utils/WindowSize';
import Colors from '../../@lib/constants/theme/Colors';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import PlanetListScreen from '../../screens/PlanetListScreen';
import CharacterForm from '../../screens/CharacterForm';
export type TabStackParamList = {
  PlanetListScreen: undefined;
  CharacterForm: undefined;
  ShowMore: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();
const TabNavigator = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const height =
    SCREEN_WIDTH <= 380
      ? Platform.OS !== 'ios'
        ? 60
        : 60
      : Platform.OS === 'ios'
      ? 80
      : 70;
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          backgroundColor: Colors.iosBG,
          height: height,
          borderTopWidth: 0,
          paddingTop: 20,
          // paddingBottom: 0,
          // position: 'absolute',
          // bottom: 0,

          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 6,
          // },
          // shadowOpacity: 0.39,
          // shadowRadius: 8.3,

          // elevation: 13,

          // borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          // margin: 10,
          // marginBottom: 20,
        },

        tabBarActiveTintColor: Colors.primaryDeep,
        tabBarInactiveTintColor: Colors.gray,
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'PlanetListScreen') {
            return focused ? (
              <MatIcon
                size={30}
                name="home"
                color={focused ? Colors.black : Colors.gray}
              />
            ) : (
              <MatIcon
                size={30}
                name="home-outline"
                color={focused ? Colors.black : Colors.gray}
              />
            );
          } else if (route.name === 'CharacterForm') {
            return focused ? (
              <MatIcon
                size={30}
                name="heart"
                color={focused ? Colors.black : Colors.gray}
              />
            ) : (
              <MatIcon
                size={30}
                name="heart-outline"
                color={focused ? Colors.black : Colors.gray}
              />
            );
          } else if (route.name === 'Settings') {
            return focused ? (
              <FontIcon
                size={30}
                name="user"
                color={focused ? Colors.black : Colors.gray}
              />
            ) : (
              <FontIcon
                size={25}
                name="user-o"
                color={focused ? Colors.black : Colors.gray}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="PlanetListScreen" component={PlanetListScreen} />
      <Tab.Screen name="CharacterForm" component={CharacterForm} />
      {/* <Tab.Screen name="ShowMore" component={ShowMore} /> */}
      {/* <Tab.Screen name="Settings" component={ShowMore} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

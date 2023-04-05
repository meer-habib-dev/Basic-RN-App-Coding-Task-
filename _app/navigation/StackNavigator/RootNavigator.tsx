import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigator/TabNavigator';
import HeaderWithBack from '../../@lib/constants/resuableComp/uiKits/HeaderWithBack';
import PlanetListScreen from '../../screens/PlanetListScreen';
import PlanetDetailsScreen from '../../screens/PlanetDetailScreen';
import CharacterForm from '../../screens/CharacterForm';

export type RootStackParamList = {
  Main: undefined;
  PlanetListScreen: undefined;
  PlanetDetailScreen: undefined;
  CharacterForm: undefined;
  ShowMore: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
      }}>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="PlanetListScreen"
          component={PlanetListScreen}
        />
        <RootStack.Screen
          options={({navigation}) => ({
            title: 'Details',
            header: () => (
              <HeaderWithBack navigation={navigation} title="Details" />
            ),
          })}
          name="PlanetDetailScreen"
          component={PlanetDetailsScreen}
        />
        <RootStack.Screen
          options={({navigation}) => ({
            title: 'Post Planet',
            header: () => (
              <HeaderWithBack navigation={navigation} title="Post Planet" />
            ),
          })}
          name="CharacterForm"
          component={CharacterForm}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

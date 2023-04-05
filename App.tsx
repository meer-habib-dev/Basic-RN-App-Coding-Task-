/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import * as eva from '@eva-design/eva';
import RootNavigator from './_app/navigation/StackNavigator/RootNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fst from 'react-native-vector-icons/Fontisto';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo';
import MI from 'react-native-vector-icons/MaterialIcons';
import Fe from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import {useEffect} from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// Icon.loadFont();
// Ent.loadFont();
function App(): JSX.Element {
  useEffect(() => {
    Icon.loadFont();
    Mci.loadFont();
    Fst.loadFont();
    Ent.loadFont();
    Ion.loadFont();
    MI.loadFont();
    Ant.loadFont();
    EvilIcons.loadFont();
    Fe.loadFont();
    Foundation.loadFont();
  }, []);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}

export default App;

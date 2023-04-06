import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import {Button, Card, Divider} from 'react-native-paper';
import ShortText from '../../@lib/component/resuableComp/text/ShortText';
import Colors from '../../@lib/constants/theme/Colors';
import {styles} from './styles/styles_planet_detail';
type RootStackParamList = {
  Profile: {userId: string; planet: any};
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = NavigationProp<
  RootStackParamList,
  'Profile'
>;

interface ProfileScreenProps {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
}
const PlanetDetailsScreen = ({route, navigation}: ProfileScreenProps) => {
  const {planet} = route.params;

  return (
    <View style={styles.container}>
      <Card style={{backgroundColor: Colors.background}}>
        <Card.Cover
          source={{
            uri: `https://starwars-visualguide.com/assets/img/planets/${
              planet.url.match(/\/(\d+)\/$/)[1]
            }.jpg`,
          }}
        />
        <Card.Title title={planet.name} titleStyle={styles.name} />
        <Divider bold style={styles.divider} />
        <Card.Content>
          <View style={styles.infoContainer}>
            <ShortText
              textStyle={styles.info}
              text={'Climate:' + '                  ' + planet.climate}
            />
            <ShortText
              textStyle={styles.info}
              text={'Terrain:' + '                   ' + planet.terrain}
            />
            <ShortText
              textStyle={styles.info}
              text={'Population:' + '             ' + planet.population}
            />
            <ShortText
              textStyle={styles.info}
              text={'Gravity:' + '                   ' + planet.gravity}
            />
            <ShortText
              textStyle={styles.info}
              text={'Diameter:' + '               ' + planet.diameter}
            />
            <ShortText
              textStyle={styles.info}
              text={'Orbital Period:' + '       ' + planet.orbital_period}
            />
            <ShortText
              textStyle={styles.info}
              text={'Rotation Period:' + '     ' + planet.rotation_period}
            />
          </View>
        </Card.Content>
      </Card>
      <View style={styles.buttonWrapper}>
        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={styles.leftBtn}>
          Go Back
        </Button>
        <Button
          mode="contained"
          // @ts-ignore
          onPress={() => navigation.navigate('CharacterForm')}
          style={styles.rightBtn}>
          Post Planet
        </Button>
      </View>
    </View>
  );
};
export default PlanetDetailsScreen;

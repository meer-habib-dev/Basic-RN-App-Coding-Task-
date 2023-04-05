import {NavigationProp, RouteProp} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Card, Divider} from 'react-native-paper';
import ShortText from '../../@lib/constants/resuableComp/text/ShortText';
import Colors from '../../@lib/constants/theme/Colors';
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
        <Card.Title
          title={planet.name}
          titleStyle={styles.name}
          // subtitle="Card Subtitle"
          // left={LeftContent}
        />
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    // alignItems: 'center',
    backgroundColor: Colors.background,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    marginTop: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  divider: {marginHorizontal: 15, marginVertical: 10},
  leftBtn: {flex: 1, marginRight: 10},
  rightBtn: {flex: 1, marginLeft: 10},
});
export default PlanetDetailsScreen;

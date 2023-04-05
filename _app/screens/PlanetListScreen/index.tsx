import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import HeaderText from '../../@lib/constants/resuableComp/text/HeaderText';
import ShortText from '../../@lib/constants/resuableComp/text/ShortText';
import BottomSpacing from '../../@lib/constants/resuableComp/uiKits/BottomSpacing';
import Loader from '../../@lib/constants/Animations/Loader';

const PlanetListScreen = () => {
  const [planets, setPlanets] = useState<any>([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState({
    dataLoading: false,
    loaderMore: false,
  });

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      setLoading({dataLoading: true});
      const response = await axios.get('https://swapi.dev/api/planets/');

      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setLoading({dataLoading: false});
    } catch (error) {
      setLoading({dataLoading: false});
      console.error(error);
    }
  };

  const fetchNextPage = async () => {
    if (nextPage) {
      setLoading({loaderMore: true});
      try {
        const response = await axios.get(nextPage);
        setPlanets([...planets, ...response.data.results]);
        setNextPage(response.data.next);
        setLoading({loaderMore: false});
      } catch (error) {
        console.error(error);
        setLoading({loaderMore: false});
      }
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PlanetDetailScreen', {planet: item})}>
      <Card
        wrapperStyle={styles.cardWrapper}
        containerStyle={styles.cardContainer}>
        <Image
          source={{
            uri: `https://starwars-visualguide.com/assets/img/planets/${
              item.url.match(/\/(\d+)\/$/)[1]
            }.jpg`,
          }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <HeaderText textStyle={styles.name} text={item.name} />
          <ShortText
            textStyle={styles.info}
            text={'Population:' + item.population}
          />
          <ShortText
            textStyle={styles.info}
            text={'Climate:' + item.population}
          />
        </View>
      </Card>
    </TouchableOpacity>
  );

  const navigation = useNavigation();

  return loading.dataLoading ? (
    <Loader />
  ) : (
    <FlatList
      style={styles.flatListS}
      data={planets}
      renderItem={renderItem}
      keyExtractor={item => item.url}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
        <>
          {loading.loaderMore ? (
            <>
              <BottomSpacing />
              <Loader height={200} />
            </>
          ) : null}
          <BottomSpacing />
          <BottomSpacing />
          <BottomSpacing />
        </>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  cardWrapper: {flexDirection: 'row'},
  cardContainer: {borderRadius: 10},
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
    // marginBottom: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  flatListS: {
    marginTop: 40,
  },
});

// export {PlanetListScreen, PlanetScreen};
export default PlanetListScreen;

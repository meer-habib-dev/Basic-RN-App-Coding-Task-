import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

import HeaderText from '../../@lib/constants/resuableComp/text/HeaderText';
import ShortText from '../../@lib/constants/resuableComp/text/ShortText';
import BottomSpacing from '../../@lib/constants/resuableComp/uiKits/BottomSpacing';
import Loader from '../../@lib/constants/Animations/Loader';
import {styles} from './styles/styles_planet_list';
import {usePlanetListScreen} from './utils/usePlanetListScreen';

const PlanetListScreen = () => {
  const {navigation, fetchNextPage, loading, planets} = usePlanetListScreen();

  const renderItem = ({item}: any) => (
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

export default PlanetListScreen;

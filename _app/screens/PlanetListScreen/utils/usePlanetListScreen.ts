import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import {useEffect, useState} from 'react';
type Planet = {
  name: string;
  description: string;
  imageUrl: string;
  // ...other properties
};
type RootStackParamList = {
  PlanetDetailScreen: {
    planet: Planet;
  };
  // ...other screens
};
type LoadingState = {
  dataLoading: boolean;
  loaderMore: boolean;
};

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'PlanetDetailScreen'
>;
export const usePlanetListScreen = () => {
  const [planets, setPlanets] = useState<any>([]);
  const [nextPage, setNextPage] = useState(null);
  const [loading, setLoading] = useState<LoadingState>({
    dataLoading: false,
    loaderMore: false,
  });
  const navigation: NavigationProp = useNavigation();

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      setLoading({...loading, dataLoading: true});
      const response = await axios.get('https://swapi.dev/api/planets/');

      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setLoading({...loading, dataLoading: false});
    } catch (error) {
      setLoading({...loading, dataLoading: false});
      console.error(error);
    }
  };

  const fetchNextPage = async () => {
    if (nextPage) {
      setLoading({...loading, loaderMore: true});
      try {
        const response = await axios.get(nextPage);
        setPlanets([...planets, ...response.data.results]);
        setNextPage(response.data.next);
        setLoading({...loading, loaderMore: false});
      } catch (error) {
        console.error(error);
        setLoading({...loading, loaderMore: false});
      }
    }
  };
  return {navigation, fetchNextPage, loading, planets};
};

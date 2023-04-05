import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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

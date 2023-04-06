import {StyleSheet} from 'react-native';
import Colors from '../../../@lib/constants/theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
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

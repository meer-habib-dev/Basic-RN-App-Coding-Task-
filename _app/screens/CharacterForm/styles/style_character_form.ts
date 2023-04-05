import {StyleSheet} from 'react-native';
import Colors from '../../../@lib/constants/theme/Colors';
import Text_Size from '../../../@lib/constants/utils/textScaling';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    paddingTop: 50,
    height: 450,
  },
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  containerS: {
    marginTop: 6,
  },
  input: {
    marginBottom: 10,
    borderColor: 'red',
  },
  selectContainer: {
    backgroundColor: Colors.background,
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 5,
  },
  selectText: {
    marginLeft: 6,
    fontSize: Text_Size.Text_2,
    color: Colors.black,
  },
  button: {
    marginTop: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#eee',
    paddingHorizontal: 10,
  },
  placeholder: {
    padding: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: '#9B9B9B',
  },
  mbutton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: '#FFFFFF',
    // padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalContent: {
    backgroundColor: Colors.primary,
    paddingVertical: 80,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.background,
  },
});

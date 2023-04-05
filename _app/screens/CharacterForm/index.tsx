import {IndexPath, Layout, Select, SelectItem} from '@ui-kitten/components';
import React, {useState} from 'react';
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import TitleText from '../../@lib/constants/resuableComp/text/TitleText';
import Colors from '../../@lib/constants/theme/Colors';
import Text_Size from '../../@lib/constants/utils/textScaling';

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const CharacterForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectActive, setSelectActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const [modalVisible, setModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const handleSave = () => {
    setModalVisible(true);
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
    });
  };

  const animatedStyle = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [600, 0],
        }),
      },
    ],
  };

  const renderPlaceholder = () => (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>Select an option...</Text>
    </View>
  );
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../@lib/assets/images/planets.png')}
            style={styles.stretch}
          />
        </View>
        <TextInput
          label="Name"
          value={name}
          mode="outlined"
          onChangeText={setName}
          style={styles.input}
          contentStyle={{}}
        />

        <TextInput
          label="Age"
          value={age}
          mode="outlined"
          onChangeText={setAge}
          keyboardType="numeric"
          style={styles.input}
        />
        <Layout style={styles.containerS} level="1">
          <Select
            // size="large"
            status="control"
            // placeholder={
            //   <TitleText
            //     text={'Select Planet'}
            //     textStyle={{
            //       marginLeft: 6,
            //       fontSize: Text_Size.Text_2,
            //       color: Colors.black,
            //     }}
            //   />
            // }
            placeholder={renderPlaceholder}
            onFocus={() => setSelectActive(true)}
            style={{
              backgroundColor: Colors.background,
              borderColor: selectActive ? Colors.primary : Colors.border,
              borderWidth: 2,
              borderRadius: 5,
              paddingVertical: 5,
            }}
            //   multiSelect={true}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
            value={
              <TitleText
                textStyle={{
                  marginLeft: 6,
                  fontSize: Text_Size.Text_2,
                  color: Colors.black,
                }}
                text={planets[selectedIndex - 1]}
              />
            }>
            {planets?.map((item, index) => (
              <SelectItem title={item} key={index} style={{}} />
            ))}
          </Select>
        </Layout>
        <Button mode="contained" onPress={handleSave} style={styles.button}>
          Save
        </Button>
      </ScrollView>

      {modalVisible && (
        <TouchableOpacity style={styles.overlay} onPress={hideModal}>
          <Animated.View style={[styles.modal, animatedStyle]}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Planet Submitted</Text>
            </View>
          </Animated.View>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default CharacterForm;

const styles = StyleSheet.create({
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
    // backgroundColor: 'red',
  },
  containerS: {
    // height: 128,
    marginTop: 6,
    // paddingVertical: 10,
  },
  input: {
    marginBottom: 10,
    borderColor: 'red',
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

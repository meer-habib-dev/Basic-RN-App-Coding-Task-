import React from 'react';
import {
  Animated,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import TitleText from '../../@lib/constants/resuableComp/text/TitleText';
import Colors from '../../@lib/constants/theme/Colors';
import {styles} from './styles/style_character_form';
import {useCharacterForm} from './utils/useCharacterForm';
import {Layout, Select, SelectItem} from '@ui-kitten/components';

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];

const CharacterForm = () => {
  const {
    name,
    age,
    selectActive,
    selectedIndex,
    setName,
    setAge,
    setSelectActive,
    setSelectedIndex,
    modalVisible,
    handleSave,
    hideModal,
    animatedStyle,
  } = useCharacterForm();

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
            status="control"
            placeholder={renderPlaceholder}
            onFocus={() => setSelectActive(true)}
            style={[
              styles.selectContainer,
              {borderColor: selectActive ? Colors.primary : Colors.border},
            ]}
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
            value={
              <TitleText
                textStyle={styles.selectText}
                text={planets[Number(selectedIndex) - 1]}
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

import {IndexPath} from '@ui-kitten/components';
import {useState} from 'react';
import {Animated} from 'react-native';

export const useCharacterForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectActive, setSelectActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(0),
  );

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
  return {
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
  };
};

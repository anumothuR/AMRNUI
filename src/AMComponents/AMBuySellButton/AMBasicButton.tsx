import * as React from 'react';

import {
  Text,
  StyleSheet,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

interface AMBasicButtonProps {
  title: string;
  onPress: () => void;
  isSelect: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}

const AMBasicButton: React.FC<AMBasicButtonProps> = ({
  title,
  onPress,
  isSelect = false,
  buttonStyle,
}) => {
  return (
    <Pressable
      style={[buttonStyle, styles.container, { opacity: isSelect ? 1 : 0.3 }]}
      onPress={onPress}
    >
      <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#aaa',
  },
  textStyle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
  },
});

export default AMBasicButton;

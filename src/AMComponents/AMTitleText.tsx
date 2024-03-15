import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface AMTitleTextProps {
  title: string;
  value: string;
}

const AMTitleText: React.FC<AMTitleTextProps> = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AMTitleText;

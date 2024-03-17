import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal, Text } from 'react-native';
import type { Company } from './types';
import AMIndianStockSelectionList from './AMIndianStockSelectionList';

interface AMIndianStockSelectionProps {
  title: string;
  value: string | null;
  placeholder: string;
}

const AMIndianStockSelectionText: React.FC<AMIndianStockSelectionProps> = ({
  title,
  value,
  placeholder,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.titleLabel}>{title}</Text>
      <TextInput
        style={styles.title}
        placeholder={placeholder}
        value={value ? value : selectedCompany?.symbol}
        onFocus={() => {
          setModalVisible(true);
        }}
      />
      <Modal
        animationType="slide"
        transparent={false}
        presentationStyle="fullScreen"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <AMIndianStockSelectionList
          value={selectedCompany?.symbol}
          onSelect={(company: Company) => {
            setSelectedCompany(company);
            setModalVisible(false);
          }}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleLabel: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AMIndianStockSelectionText;

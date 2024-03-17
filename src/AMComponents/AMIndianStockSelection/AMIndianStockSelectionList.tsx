import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import useSearchIndianStock from './useSearchIndianStock';
import type { Company } from './types';

interface AMIndianStockSelectionProps {
  onSelect: (selectedCompany: Company) => void;
  value: string | undefined;
}

const AMIndianStockSelectionList: React.FC<AMIndianStockSelectionProps> = ({
  onSelect,
  value,
}) => {
  const [searchText, setSearchText] = useState(value ?? '');
  const { companiesData, loading } = useSearchIndianStock(searchText);

  const handleCompanySelect = (company: Company) => {
    onSelect(company);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.title}
        value={searchText}
        onChangeText={(text) => {
          setSearchText(text);
        }}
      />
      {loading && <Text>Fetching...</Text>}
      <FlatList
        data={companiesData}
        renderItem={({ item }) => (
          <Text
            style={styles.companyItem}
            onPress={() => handleCompanySelect(item)}
          >
            {item.symbol}
          </Text>
        )}
        keyExtractor={(item) => item.symbol}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f00',
  },
  title: {
    fontSize: 16,
    marginRight: 8,
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

export default AMIndianStockSelectionList;

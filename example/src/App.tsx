import * as React from 'react';

import { StyleSheet, SafeAreaView } from 'react-native';
import { AMTitleText, AMIndianStockSelectionText } from 'react-native-am-ui';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AMTitleText
        title="Good Morning have a nice day"
        value="Fine. Want to work with you again"
      />
      <AMIndianStockSelectionText
        title="Stock Name"
        placeholder="Stock search"
        value={''}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

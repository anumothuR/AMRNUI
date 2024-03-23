import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AMBasicButton from './AMBasicButton';

export enum TradeType {
  buy = 'BUY',
  sell = 'SELL',
}

interface AMBuySellButtonProps {
  onSelect: (type: TradeType) => void;
}

const AMBuySellButton: React.FC<AMBuySellButtonProps> = ({ onSelect }) => {
  const [type, setType] = React.useState<TradeType>(TradeType.buy);
  return (
    <View style={styles.container}>
      <AMBasicButton
        key={'buy'}
        title="Buy"
        isSelect={type === TradeType.buy}
        buttonStyle={{ backgroundColor: '#0f0' }}
        onPress={() => {
          setType(TradeType.buy);
          onSelect(TradeType.buy);
        }}
      />
      <AMBasicButton
        key={'sell'}
        title="Sell"
        buttonStyle={{ backgroundColor: '#f00' }}
        isSelect={type === TradeType.sell}
        onPress={() => {
          setType(TradeType.sell);
          onSelect(TradeType.sell);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default AMBuySellButton;

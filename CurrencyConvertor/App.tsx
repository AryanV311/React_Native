

import React, { useState } from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { Currency } from './src';
import { currencyByRupee } from './src/costant';
import CurrencyButton from './src/Components/CurrencyButton';




function App(): React.JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrnecy] = useState('');

  const pressedButton = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Enter a value to convert',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }

    const inputAmount = parseFloat(inputValue);

    if(!isNaN(inputAmount)){
      const convertedAmount = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedAmount.toFixed(2)}`;

      setResultValue(result);
      setTargetCurrnecy(targetValue.name);

    } else {
      if (!inputValue) {
        return Snackbar.show({
          text: 'Enter a value to convert',
          backgroundColor: '#EA7773',
          textColor: '#000000',
        });
      }
    }
  };


  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
          <Text style={styles.rupee}>₹</Text>
          <TextInput style={styles.inputAmountField} maxLength={14} clearButtonMode="always" placeholder="Enter amount in rupees" value={inputValue} onChangeText={setInputValue} />
          </View>
          {
            resultValue && (
              <Text style={styles.resultTxt} >
              {resultValue}
            </Text>
            )
          }
        </View>
        <View style={styles.bottomContainer}>
          <FlatList numColumns={3} data={currencyByRupee} keyExtractor={item => item.name} renderItem={({item}) => (
            <Pressable onPress={() => pressedButton(item)} style={[styles.button, targetCurrency === item.name && styles.selected]}>
              <CurrencyButton {...item} />
            </Pressable>
          )} />
        </View>
      </View>
    </>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#000000',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,

    fontSize: 22,
    color: '#000000',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
});

export default App;

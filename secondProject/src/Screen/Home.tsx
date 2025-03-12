import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../../App';
import Separator from '../components/Separator.tsx';
import ProductItems from '../components/ProductItems';
import { PRODUCTS_LIST } from '../Data/constant.ts';

type HomeProps = NativeStackScreenProps<RootStackParamsList,'Home'>

const Home = ({navigation}:HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList data={PRODUCTS_LIST} keyExtractor={item => item.id } ItemSeparatorComponent={Separator} renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('Detail', {
          product : item,
        })}>
          <ProductItems product={item}/>
        </Pressable>
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
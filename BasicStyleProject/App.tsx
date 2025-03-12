import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles  = StyleSheet.create({
//   container:{
//     backgroundColor:'#616161',
//   }
// });

export default App;


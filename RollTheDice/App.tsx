import React, { useState } from 'react';
import type {JSX, PropsWithChildren} from 'react';
import {StyleSheet, View, ImageSourcePropType, Image, Pressable, Text} from 'react-native';

import DiceOne from './assets/One.png';
import DiceTwo from './assets/Two.png';
import DiceThree from './assets/Three.png';
import DiceFour from './assets/Four.png';
import DiceFive from './assets/Five.png';
import DiceSix from './assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return(
    <View>
      <Image style={styles.image} source={imageUrl} / >;
    </View>
  );
};

function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [number, setNumber] = useState(1);

  const clickToRollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        setNumber(randomNumber);
        break;
      case 2:
        setDiceImage(DiceTwo);
        setNumber(randomNumber);
        break;
      case 3:
        setDiceImage(DiceThree);
        setNumber(randomNumber);
        break;
      case 4:
        setDiceImage(DiceFour);
        setNumber(randomNumber);
        break;
      case 5:
        setDiceImage(DiceFive);
        setNumber(randomNumber);
        break;
      case 6:
        setDiceImage(DiceSix);
        setNumber(randomNumber);
        break;

      default:
        break;
    }

  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable style={styles.btn} onPress={clickToRollDice}>
        <Text style={styles.btnText}>
        Roll the Dice
        </Text>
      </Pressable>
      <Text style={styles.text}>
        Wow its 👉 {number}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10,
  },
  image: {
    height: 200,
    width: 200,
  },
  btn:{
    borderWidth:2,
    paddingHorizontal:46,
    paddingVertical:12,
    borderRadius:8,
    borderColor:'#6A89CC',
    marginBottom:10,
  },
  btnText:{
    fontSize:16,
    fontWeight:600,
    color:'#6A89CC',
  },
  text:{
    fontSize:20,
    fontWeight:600,
    color:'#6A89CC',
  },
});

export default App;

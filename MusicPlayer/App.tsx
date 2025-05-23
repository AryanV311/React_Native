
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { addTrack, setupPlayer } from './musicPlayerService';
import MusicPlayer from './src/screen/MusicPlayer';


function App(): React.JSX.Element {

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if(isSetup){
      await addTrack();
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() =>{
    setup();
  } ,[]);


  if(!isPlayerReady){
    return(
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
    <StatusBar barStyle={'light-content'} />
    <MusicPlayer />
  </View>
  );
}


  const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
  });


export default App;

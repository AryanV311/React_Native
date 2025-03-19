//import liraries
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ControlCenter = () => {
    const playbackState = usePlaybackState();

    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    const skipToNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const togglePlayback = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();

        if (currentTrack !== null) {
            // Safely handle both the new object structure and old enums
            const state = 'state' in playbackState ? playbackState.state : playbackState;

            if (state === State.Paused || state === State.Ready) {
                await TrackPlayer.play();
            } else {
                await TrackPlayer.pause();
            }
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={skipToPrevious}>
                <Icon style={styles.icon} name="skip-previous" size={40} />
            </Pressable>

            <Pressable onPress={togglePlayback}>
                <Icon
                    style={styles.icon}
                    name={playbackState.state === State.Playing ? 'pause' : 'play-arrow'}
                    size={75}
                />
            </Pressable>

            <Pressable onPress={skipToNext}>
                <Icon style={styles.icon} name="skip-next" size={40} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 56,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        color: '#FFFFFF',
      },
      playButton: {
        marginHorizontal: 24,
      },
    });

export default ControlCenter;

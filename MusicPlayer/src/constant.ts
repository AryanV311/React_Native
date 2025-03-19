import { Track } from 'react-native-track-player';

export const playListData: Track[] = [
    {
      id: 1,
      title: 'Jeene Laga Hoon',
      artist: 'Atif Aslam, Shreya Ghoshal',
      album: 'Ramaiya Vastavaiya',
      artwork:
        'https://pagalfree.com/images/128Jeene%20Laga%20Hoon%20-%20Ramaiya%20Vastavaiya%20128%20Kbps.jpg',
      url: require('../assets/audio/one.mp3'),
    },
    {
      id: 2,
      title: 'Peecha Chhute',
      artist: 'Mohit Chauhan',
      album: 'Ramaiya Vastavaiya',
      artwork:
        'https://raag.fm/image/250/1140889/Ramaiya_Vastavaiya_Mohit_Chauhan.jpg',
      url: require('../assets/audio/two.mp3'),
    },
    {
      id: 3,
      title: 'Kesariya',
      artist: 'Arijit Singh, Amitabh Bhattacharya',
      album: 'Brahmastra',
      artwork:
        'https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg',
      url: require('../assets/audio/three.mp3'),
    },
    {
      id: 4,
      title: 'Title Track',
      artist: 'Arijit Singh, Parampara Tandon',
      album: 'Pal Pal Dil Ke Paas',
      artwork:
        'https://c.saavncdn.com/328/Pal-Pal-Dil-Ke-Paas-Hindi-2019-20200420150444-500x500.jpg',
      url: require('../assets/audio/four.mp3'),
    },
  ];
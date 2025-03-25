import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const ModalView = () => {
  const [showVisible, setShowVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ModalView</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowVisible(!showVisible)}>
        <Text style={styles.txt}>Show Modal</Text>
      </TouchableOpacity>

      <Modal
    visible={showVisible}
    animationType="slide"
    onRequestClose={() => setShowVisible(false)}
    transparent={true}
      >
        <View style={styles.centralView}>
          <View style={styles.modalView}>
            <Text style={styles.header}>Modal Component</Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => setShowVisible(false)}>
              <Text style={styles.txt}>Close Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  txt: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#2B2B52',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 4,
  },
  centralView:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalView:{
    backgroundColor:'white',
    padding:35,
    paddingHorizontal:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
    shadowOffset:{
        height:2,
        width:0,
    },
    shadowColor:'#000',
  },
});

export default ModalView;

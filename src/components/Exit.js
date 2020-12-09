import React, {useState} from 'react';
import {View, StyleSheet, Alert, Modal, TouchableHighlight} from 'react-native';
import {Text, Button} from 'react-native-elements';
import './globals';

const Exit = ({}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {Alert.alert("Modal has been closed.");}}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.descriptionText}>
                            In selecting 'End Involvement' this will completely end your involvement
                            officially with our app. Importantly, your all of your data in
                            our database will be removed and the app will no longer be able
                            to monitor the time you spend on your apps.
                        </Text>

                        <Text style={styles.descriptionText}>
                            If you don't want to do this, select 'Return to User Screen'.
                        </Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#4682b4" }}
                            onPress={() => {setModalVisible(!modalVisible);}}>
                            <Text style={styles.textStyle}>End Involvement</Text>
                        </TouchableHighlight>

                        <View style={styles.padder}></View>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#4682b4" }}
                            onPress={() => {setModalVisible(!modalVisible);}}>
                            <Text style={styles.textStyle}>Return to User Screen</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>

        <View style={styles.exitContainer}>
          <Button
            title = 'End Involvement'
            onPress={() => {setModalVisible(true);}}
            titleStyle = {{color: '#add8e6', fontSize: 13,}}
            buttonStyle= {{backgroundColor: 'black',height:30, borderRadius: 30}}
          />
        </View>
        </View>

    );
};


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      backgroundColor: colorWhite_1,
      borderRadius: 50,
      padding: 60,
      alignItems: "center",
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    exitContainer:{
      marginLeft: 170,
      marginBottom: 10,
      marginTop: 5,
      padding: 5,
    },
    padder:{
      padding: 10
    },
    descriptionText: {
      textAlign: "left",
      marginBottom: 20
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
});
export default Exit;

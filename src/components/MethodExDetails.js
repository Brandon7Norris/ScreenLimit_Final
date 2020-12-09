import React, {useState} from 'react';
import {View,Text,StyleSheet, Image, Alert, Modal, TouchableHighlight, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import '../components/globals';
import TextChunkDetails from '../components/TextChunkDetails';

const MethodExample = ({title, imageSource, iconname, dTitle, dFull}) => {
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
                        <Text style={styles.descriptionTitleText}>{dTitle}</Text>
                        <Text style={styles.descriptionText}>{dFull}</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#4682b4" }}
                            onPress={() => {setModalVisible(!modalVisible);}}>
                            <Text style={styles.textStyle}>Close Screen</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
            </View>

            <TouchableOpacity   onPress={() => {setModalVisible(true);}}>

                <SafeAreaView style = {styles.keeper}>
                <Icon name={iconname} size={30} color="cornflowerblue" />
                <Text style={styles.smallTextDetail}> {title} </Text>
                </SafeAreaView>
                <Image source={imageSource}/>

             </TouchableOpacity>
        </View>

    );
};


const styles = StyleSheet.create({
    smallTextDetail: {
        color: 'cornflowerblue',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
      },
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

      descriptionTitleText: {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        marginBottom: 20
      },
      descriptionText: {
        textAlign: "left",
        marginBottom: 20
      },

      keeper:{
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:10,
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
export default MethodExample;

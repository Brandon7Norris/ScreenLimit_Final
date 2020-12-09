import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


// This will be the universally designed button to be used for all general button prompts
const Uni_Button = (props) => {

    //Detail Parameters Found Here
    const styles = StyleSheet.create({
    buttonTextDetail: {
      fontSize: 20,
      color: '#fff'
    },
    buttonDetail: {
      alignItems: 'center',
      alignSelf: 'center',
      borderColor: props.color,
      padding: 10,
      borderWidth: 3,
      borderRadius: 10,
      width: '60%',
      margin: 10
    },
  });

  const content = (
    <View style={styles.buttonDetail}>
      <Text style={styles.buttonTextDetail}> { props.text } </Text>
    </View>
    )

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
};




export default Uni_Button;
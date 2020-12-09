import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


// Parameters of a styalized button outputting the inputted text (props) and outputs 
const Style_Button = (props) => {
	
  const content = (
    <View style={styles.buttonDetail}>
      <Text style={styles.buttonTextDetail}> { props.text } </Text>
    </View>
    )

  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
};


//Detail Parameters Found Here
const styles = StyleSheet.create({
  buttonTextDetail: {
    fontSize: 10,
  },
  buttonDetail: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#adbce6',
    width: '60%',
    borderRadius: 4,
    margin: 20
  },
});

export default Style_Button;
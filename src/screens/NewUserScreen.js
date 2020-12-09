//Outside Imports
import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Text, Button} from 'react-native-elements';
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome';
import { faMobileAlt, faLock } from '@fortawesome/free-solid-svg-icons'; 

//Local Imports
import '../components/globals';

const NewUserScreen = ({navigation}) => {

  const trial_status = "done"
  // To ensure only 1 trial per smartphone
  const smartphone_id = "1234567890"

  // Manages User's progress through the trial
  const trialButton = () => {
    if(trial_status === "new") {
      navigation.navigate('NewTrial', {smartphone_id: smartphone_id})
    }
    else if(trial_status === "current"){
      navigation.navigate('CurrentTrial', {smartphone_id: smartphone_id})
    }
    else if(trial_status === "done"){
      navigation.navigate("DoneTrial",  {smartphone_id: smartphone_id})
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text h1 style={styles.mainTitle}>Welcome To Screen Limit!</Text>
      <View style={styles.buttonOContainer}>
        <Button
            title = 'Click here to learn more'
            onPress={() => navigation.navigate('AboutApp')}
            titleStyle = {styles.linkTextDetail}
            buttonStyle={{ backgroundColor: 'black' }}
          />
      </View>
      <View style={styles.subContainer}>

        <View style={styles.iconBox}>
          <FontAwesomeIcon icon={faMobileAlt} size={270} style={styles.mainIcon} color={colorWhite_1}/>
          <FontAwesomeIcon icon={faLock} size={70} style={styles.subIcon} color='#4682b4'/>
        </View>
        

        <View style={styles.buttonIContainer}>
          <Button
            title = 'Create Profile'
            onPress = {() => navigation.navigate('NProfile')}
            buttonStyle={{ backgroundColor: '#4682b4'}}
          />
        </View>

        <View style={styles.buttonIContainer}>
          <Button
            title = 'Trial'
            onPress = {() => trialButton()}
            buttonStyle={{ backgroundColor: '#4682b4' }}
          />
        </View>
      </View>

      <View style={styles.bottomButton}>
          <Button
            title = "User Login"
            onPress={() => navigation.navigate('Login')}
            titleStyle = {styles.linkTextDetail}
            type="clear"
          />
      </View>
    </SafeAreaView>
    );
};


NewUserScreen.navigationOptions = () => { return { headerShown: false, }; };

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorSecondary,
  },
  mainIcon: {
    flex: 1,
    margin: 0,
    alignSelf: 'flex-end',
    transform: [{translateX: 35}]
  },
  subIcon: {
    flex: 1,
    margin: 0,
    alignSelf: 'flex-end',
    transform: [{translateX: -15}]
  },
  iconBox:{
    flex: 2,
    flexDirection: 'row',
    marginBottom: 50,
    marginTop: 10
  },
  subContainer:{
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  buttonIContainer:{
    padding: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonOContainer:{
    marginLeft: 25,
    marginRight: 25,
    padding:1,
    marginBottom: 20
  },
  bottomButton: {
    padding:10,
  },
  mainTitle:{
    color: colorWhite_1,
    fontSize: 35,  
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
  },
  smallTextDetail: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: "bold",
    color: 'white'
  },
  linkTextDetail:{
    fontSize: 18,
    textAlign: 'center',
    color: '#add8e6',
  },

});

export default NewUserScreen;
//Outside Imports
import React, {useState, useContext} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import {NavigationEvents} from 'react-navigation';

//Local Imports
import '../components/globals';
import {Context as AuthContext} from '../context/AuthContext';

import ToastExample from '../../android/app/src/main/java/com/secondtestproj/ToastExample';

//Login Screen: This will be the screen a user will navigate to FROM the New User Screen if they are a returning User.
const LoginScreen = ({navigation}) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return (
      <SafeAreaView style={styles.mainContainer}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <Text h1 style={styles.mainTitle}>Screen Limit</Text>
        <Text style={styles.largeTextDetail}>Login</Text>

        <ScrollView style={styles.subContainer}>
          <Input style={styles.inputTextDetail}
            label="Email"
            value = {email}
            onChangeText = {setEmail}
            autoCapitalize ="none"
            autoCorrect = {false}
          />
          <Input style={styles.inputTextDetail}
            label="Password"
            value = {password}
            onChangeText = {setPassword}
            autoCapitalize="none"
            autoCorrect = {false}
            secureTextEntry
          />

        <View>
          <Button
            title="Check If Trial Going"
            onPress={() => {callBackTrialTest()}}
          />
        </View>

          <View style={styles.subContainer}> 
            <Button
              title = "Login!"
              onPress={() => signin({email, password})}
              buttonStyle={{ backgroundColor: '#4682b4' }}
            />

            {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : <View style={{marginBottom: 23}}/>}

            <View style={{marginBottom: 70}}/>

          </View>
        </ScrollView>

        <View>
          <Text style={styles.linkTextDetail}> New User ? </Text>
          <Button
            title = "Register Here!"
            onPress={() => navigation.navigate('NUser')}
            titleStyle = {styles.linkTextDetail}
            type="clear"
          />
        </View>
      </SafeAreaView>
    );
};

LoginScreen.navigationOptions = () => {return { headerShown: false, }; };

//Detail Parameters Found Here
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth:10,
    backgroundColor: colorSecondary,
  },
  subContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  mainTitle:{
    color: colorWhite_1,
    fontSize: 35,  
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
  },
  largeTextDetail: {
    color: colorWhite_1,
    marginBottom: 5,
    fontSize: 33,
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
  },
  linkTextDetail:{
    textAlign: 'center',
    color: '#add8e6'
  },
  inputTextDetail:{
    fontSize: 25,
    color: colorWhite_1,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  }
});

function callBackTrialTest()
{
  ToastExample.isTrialStillGoing(
    (err) => {
      console.log(err);
    },
    (msg) => {
      console.log("isTrialStillGoing " + msg);
      getTrialResponse(msg);
    },
  );

}


function getTrialResponse(argument)
{  
  if(argument == true)
  {
    ToastExample.printTrue();
  }
  else
  {
    ToastExample.printFalse();
  }
  
}

export default LoginScreen;

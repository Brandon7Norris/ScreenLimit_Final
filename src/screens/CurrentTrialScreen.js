//Outside Imports
import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome';
import { faHourglass } from '@fortawesome/free-regular-svg-icons'; 

//Local Imports
import '../components/globals';
import { State } from 'react-native-gesture-handler';

//This is the default scene once the user has signed in & has apps in watch.
const CurrentTrialScreen = ({navigation}) => {
    const smartphone_id = navigation.getParam('smartphone_id')

    // User data passed from Login Screen
    var user = {};

    return (
      <SafeAreaView style={styles.mainContainer}>

        <Text h1 style={styles.mainTitle}><Text style={styles.mainTitleBlue}>S</Text>creen <Text style={styles.mainTitleBlue}>L</Text>imit</Text>
        <Text style={styles.largeTextDetail}>Trial Mode Running{user.username}</Text>
        <Text style={styles.smallTextDetail}>Your SmartPhone ID is: {smartphone_id}.</Text>


        <ScrollView style={styles.subContainer}>

          <View style={styles.image}>
            <FontAwesomeIcon icon={faHourglass} color={colorWhite_1} style={styles.image} size={200} />
          </View>

          <View style={styles.descriptionBox}>
                    <Text style={styles.descriptionText}>Your trial is still  hard at work! Check back in a while to see
                    how you did!</Text>
           </View>

    
          <View style={styles.buttonIContainer}>
            <Button
              title = 'Select Apps to Monitor'
              onPress = {() => navigation.navigate('AppPickerTrial')}
              buttonStyle={{ backgroundColor: '#4682b4', borderRadius: 20  }}
            />
          </View>
        </ScrollView>

        <View>
                <Button
                    title = "- Return To Welcome Screen -"
                    onPress={() => navigation.navigate('NUser')}
                    titleStyle = {styles.linkTextDetail}
                    type="clear"
                />
            </View>
        
      </SafeAreaView>
    );
};

CurrentTrialScreen.navigationOptions = () => { return { headerShown: false,  }; };

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth:10,
    backgroundColor: colorSecondary,
  },
  image:{
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 1000,
    marginBottom: 40,
    marginTop: 10
  },
  subContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  descriptionBox: {
    padding: 15,
    borderRadius: 20
},
descriptionText: {
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
},
  buttonIContainer:{
    padding: 8,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonOContainer:{
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 5,
    marginTop: 10,
    padding:10,
    paddingHorizontal: 20
  },
  mainTitle:{
    color: colorWhite_1,
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
  },
  mainTitleBlue:{
    color: "#45b6fe",
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
  },
  linkTextDetail:{
    color: '#add8e6',
    fontSize: 20,
    marginBottom: 20
  },
  largeTextDetail: {
    color: colorWhite_1,
    marginBottom: 5,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    fontStyle: "italic",
  },
  smallTextDetail: {
    color: colorWhite_1,
    fontSize: 14,
    textAlign: 'right',
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20,
},

});

export default CurrentTrialScreen;
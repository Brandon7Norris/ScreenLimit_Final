//Outside Imports
import React, {useState, useContext} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

//Font Awesome
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome';
import { faUserClock } from '@fortawesome/free-solid-svg-icons'; 

//Local Imports
import {Context as AuthContext} from '../context/AuthContext';
import '../components/globals';

import ToastExample from '../../android/app/src/main/java/com/secondtestproj/ToastExample';
import { ceil } from 'react-native-reanimated';

//This is a nice optional insentive for users to try out the most basic portion of our app and see if they want to continue with us.
const DoneTrialScreen = ({navigation}) => {
    const smartphone_id = navigation.getParam('smartphone_id')
    const [timeParameters, setTimeParameters] = useState('');
    const [nickname, setNickname] = useState('')
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    const beginTrial = async (nickname) => {
        console.log(nickname);
        try{
            const trial_user = await axios.post('https://screenlimit-frontend-api.herokuapp.com/create_temp_user', {nickname});
            if(trial_user){
                const email = nickname
                const password = nickname
                signin({email, password})
            } else {
                console.log('Server Error.');
            }
        } catch(err) {
            console.log(err);
        }
    }

    const resumeTrial = async (nickname) => {
        console.log(nickname);
        try {
            const email = nickname
            const password = nickname
            signin({email, password})
        }
        catch(err){
            log(err)
        }
    }



    return (
        <SafeAreaView style={styles.mainContainer}>
                  <Text h1 style={styles.mainTitle}><Text h1 style={styles.mainTitleBlue}>S</Text>creen<Text h1 style={styles.mainTitleBlue}>L</Text>imit Trial </Text>
            <View style={styles.subContainer}>
          
                <View style={styles.icon}>
                    <FontAwesomeIcon color={colorWhite_1} icon={ faUserClock } size={250}/>
                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.descriptionText}>Unsure if you want to create an account?</Text>
                    <Text  style={styles.descriptionText}>Try us out for a short time and see if you need 
                    <Text style={styles.descriptionTextBlue}> ScreenLimit.</Text></Text>
                </View>

            </View>

            <View>
                <RNPickerSelect
                    style={styles.smallTextDetail}
                    placeholder={{label: "Select Time Here...", value: null}}
                    onValueChange={(value) => setTimeParameters(value)}
                    items={[
                        { label: '1 Day', value: '1 Day'},
                        { label: '1 Week', value: '1 Week' },
                        { label: '1 Month', value: '1 Month' },
                    ]}
                />
                <Button
                    title = 'Begin My New Timed Trial'
                    onPress={() => {ToastExample.startTrialPeriod(), beginTrial(nickname)}}
                    buttonStyle={{ backgroundColor: '#4682b4' }}
                />
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

DoneTrialScreen.navigationOptions = () => {return { headerShown: false, }; };

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth:10,
        backgroundColor: colorSecondary,
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    icon:{
        alignSelf: 'center'
    },
    descriptionBox: {
        margin: 10,
        padding: 15,
        borderRadius: 20
    },
    descriptionText: {
        marginBottom: 10,
        textAlign: 'center',
        color: '#fff',
        fontSize: 20
    },
    descriptionTextBlue: {
        color: '#45b6fe',
        fontSize: 20
    },
    mainTitle:{
        color: colorWhite_1,
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    mainTitleBlue:{
        marginTop:30,
        color: '#45b6fe',
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    subTitle:{
        color: colorWhite_1,
        fontSize: 20,  
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "normal",
    },
    inputTextDetail:{
        fontSize: 25,
        color: colorWhite_1,
      },
    largeTextDetail: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: headingFont,
        color: colorWhite_1
      },
      linkTextDetail:{
        color: '#add8e6',
        fontSize: 20,
        marginBottom: 20
    },
      textDetail: {
        fontSize: 20,
        marginLeft: 20,
        textAlign: 'left',
        fontFamily: subheadingFont,
        color: colorWhite_1
      },
});

export default DoneTrialScreen;
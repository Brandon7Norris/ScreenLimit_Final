//Outside Imports
import React, {useState, useContext} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';

// React Native Charts
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

// Font Awesome
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'; 

//Local Imports
import {Context as AuthContext} from '../context/AuthContext';
import '../components/globals';

import ToastExample from '../../android/app/src/main/java/com/secondtestproj/ToastExample';

//This is a nice optional insentive for users to try out the most basic portion of our app and see if they want to continue with us.
const DoneTrialScreen = ({navigation}) => {
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
            <Text h1 style={styles.mainTitle}>Trial Complete! </Text>

            <View style={styles.subContainer}>
                <View style={styles.headerBox}>
                    <View style={styles.headerIcon}>
                        <FontAwesomeIcon icon={faThumbsUp} color='#45b6fe' style={styles.image} size={80} />
                    </View>
                    <Text style={styles.headerText}>Trial Breakdown</Text>
                </View>

                <View style={styles.descriptionBox}>
                    <Text style={styles.descriptionText}>Here is a breakdown of your smartphone usage!  Do you need 
                    <Text style={styles.descriptionTextBlue}> ScreenLimit?</Text></Text>
                </View>


                <View style={styles.chart}>
                    <LineChart
                        data={{
                        labels: ["22", "23", "24"],
                        animationEnabled: true,
                        datasets: [
                            {
                            data: [
                                22, 23, 100
                            ]
                            }
                        ]
                        }}
                        width={360} // from react-native
                        height={220}
                        yAxisSuffix="m"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundGradientFrom: "#2072BA",
                        backgroundGradientTo: "#26abff",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16,
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={{
                        borderRadius: 16
                        }}
                    />
                    </View>
                
            </View>
            

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

DoneTrialScreen.navigationOptions = () => {return { headerShown: false, }; };

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colorSecondary,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: 'black',
        marginBottom: 20,
        marginTop: 20
    },
    chart:{
        alignSelf: 'center',
        marginBottom: 40
    },
    mainTitle:{
        color: colorWhite_1,
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    descriptionBox: {
        padding: 15,
        borderRadius: 20,
        marginBottom: 30,
        marginHorizontal: 15
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
      headerBox:{
          flex: 2,
          flexDirection: 'row',
          margin: 10
      },
      headerIcon: {
          flex: 1,
          transform: [{translateX: 30}]
      },
      headerText: {
        flex: 1,
        color: '#45b6fe',
        fontSize: 36,
        transform: [{translateX: -30}],
        textAlign: 'center'
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
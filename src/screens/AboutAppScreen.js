import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text, Button} from 'react-native-elements';

import MethodExDetails from '../components/MethodExDetails';

const AboutAppScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text h1 style={styles.mainTitle}>Screen Limit: What Is It?</Text>
            
            <ScrollView style={styles.subContainer}>
                <Text style={styles.smallTextDetail}>
                    Screen Limit is an phone app experimentally designed to assist users in
                    curbing their overt use of their smart-phones.
                </Text>
                <Text style={styles.smallTextDetail}>
                    In brief, the app will monitor the time a user spends on other phone
                    applications and employ a method once reaching a certain amount of
                    spent time.
                </Text>
                <Text style={styles.smallTextDetail}>
                    Select to learn more about these methods...
                </Text>
                <ScrollView style={styles.mainaContainer} horizontal={true}>
                    <MethodExDetails
                        title="Monitor"
                        iconname="cloud"
                        imageSource={require('../../assets/imgMonitor.png')}
                        dTitle="The Monitor Method"
                        dFull = " This is the least involved method in the Screen Limit App. When set to 'Monitor', the app will only keep track of the time you spend on the apps you've set to have watched."
                    />
                    <MethodExDetails
                        title="Guilt"
                        iconname="cloud-rain"
                        imageSource={require('../../assets/imgGuilt.png')}
                        dTitle="The Guilt Method"
                        dFull = "This method will proceed to guilt trip the amount of time you had spent on your phone. After you spend a certain amount of time on apps, it will begin pointing out more productive things you could have been doing with your time through popups."                    
                    />
                    <MethodExDetails
                        title="Strict"
                        iconname="cloud-lightning"
                        imageSource={require('../../assets/imgStrict.png')}
                        dTitle="The Strict Method"
                        dFull="This method is the 'cold turkey' approach. When you run out of time, the app will begin spamming popups, buzzing, and making noise until you stop using your apps."
                    />
                    <MethodExDetails
                        title="Reflection"
                        iconname="cloud-snow"
                        imageSource={require('../../assets/imgReflection.png')}
                        dTitle="The Reflection Method"
                        dFull="This method, as the name implies, will ask you to reflect upon certain questions. After you spend a certain amount of time on an app, the app will interrupt you asking questions. Question Example: 'Is there anything important you needed to have completed soon?'"
                    />
                </ScrollView>
                <Text style={styles.smallTextDetail}>
                    This app was designed to aid the user in dealing with phone addiction, not
                    punish or coerce them. Chose whatever method you're comfortable with.
                </Text>
                <Text style={styles.smallTextDetail}>
                    Finally, in terms of data privacy, Screen Limit will only monitor the apps
                    designated by the user. It cannot record your activity, and only notes
                    when you are on an designated app.
                </Text>
            </ScrollView>

            <View>
                <Button
                    title = "Return To Welcome Screen"
                    onPress={() => navigation.navigate('NUser')}
                    titleStyle = {styles.linkTextDetail}
                    type="clear"
                />
            </View>

        </SafeAreaView>
    );
};

AboutAppScreen.navigationOptions = () => {return { headerShown: false, }; };

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth:10,
        backgroundColor: colorSecondary,
      },
    mainContainer: {
        flex: 1,
        borderWidth:10,
        backgroundColor: colorSecondary,
    },
    subContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: 'black',
        marginBottom: 20
    },
    mainTitle:{
        color: colorWhite_1,
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    smallTextDetail: {
        color: colorWhite_1,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
    },
    linkTextDetail:{
        fontSize: 18,
        textAlign: 'center',
        color: '#add8e6'
    },
});

export default AboutAppScreen;
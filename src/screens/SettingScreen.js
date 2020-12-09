//Outside Imports
import React, {useState, useContext} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Input, Button, Text} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import ToastExample from '../../android/app/src/main/java/com/secondtestproj/ToastExample';

//Local Imports
import MethodExDetails from '../components/MethodExDetails';
import {Context as AuthContext} from '../context/AuthContext';
import '../components/globals';

//Displays a signed in user's settings & allows them to update preferences.
const SettingScreen = ({navigation}) => {
    const{ state, clearErrorMessage, updateUrName, updateUrPassword, updateUrEmail, updateUrMethod } = useContext(AuthContext);
    
    const [urName, setUrname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [emailOld, setEmailOld] = useState('');
    const [emailNew, setEmailNew] = useState('');
    const [method, setMethod] = useState('');

    return (
        <SafeAreaView style={styles.mainContainer}>
            <NavigationEvents onWillFocus= {clearErrorMessage} />
            <Text h1 style={styles.mainTitle}>Settings</Text>
            <Text style={styles.smallTextDetail}>Update Your Profile Here:</Text>

            {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : <View style={{marginBottom: 27}}/>}

            <ScrollView style={styles.subContainer}>

                <SafeAreaView style={styles.selection}>
                    <Text style = {styles.subtitleTextDetail}>   Change Your Username   </Text>
                    <Input style={styles.inputTextDetail}
                        value = {urName}
                        onChangeText = {setUrname}
                        autoCapitalize ="none"
                        autoCorrect = {false}
                    />
                    <Button
                        title = 'Update Username'
                        onPress={() => updateUrName({urName})}
                        buttonStyle={{ backgroundColor: '#4682b4', height:30, bottom:5}}
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.selection}>
                    <Text style = {styles.subtitleTextDetail}>   Change Your Password   </Text>
                    <View style={styles.pairing}>
                        <Input style={styles.inputTextDetail}
                            label = "Enter New Password"
                            onChangeText = {setPassword}
                            labelStyle = {styles.smallTextDetail}
                            value = {password}
                            onChangeText = {setPassword}
                            autoCapitalize ="none"
                            autoCorrect = {false}
                            secureTextEntry
                        />
                        <Input style={styles.inputTextDetail}
                            label = "Confirm Password"
                            labelStyle = {styles.smallTextDetail}
                            value = {passwordConfirm}
                            onChangeText = {setPasswordConfirm}
                            autoCapitalize ="none"
                            autoCorrect = {false}
                            secureTextEntry
                        />
                    </View>
                    <Button
                        title = 'Update Your Password'
                        onPress={() => updateUrPassword({password,passwordConfirm})}
                        buttonStyle={{ backgroundColor: '#4682b4',  height:30, bottom:5}}
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.selection}>
                    <Text style = {styles.subtitleTextDetail}>      Change Your Email      </Text>
                    <View style={styles.pairing}>
                        <Input style={styles.inputTextDetail}
                            label = "Enter New Email"
                            labelStyle = {styles.smallTextDetail}
                            value = {emailNew}
                            onChangeText = {setEmailNew}
                            autoCapitalize ="none"
                            autoCorrect = {false}
                        />
                        <Input style={styles.inputTextDetail}
                            label = "Confirm OLD Email"
                            labelStyle = {styles.smallTextDetail}
                            value = {emailOld}
                            onChangeText = {setEmailOld}
                            autoCapitalize ="none"
                            autoCorrect = {false}
                        />
                    </View>
                    <Button
                        title = 'Update Your Email'
                        onPress={() => updateUrEmail({emailNew,emailOld})}
                        buttonStyle={{ backgroundColor: '#4682b4', height:30, bottom:5 }}
                    />
                </SafeAreaView>

                <SafeAreaView style={styles.selection}>
                    <Text style = {styles.subtitleTextDetail}>    Change Your Watched Apps    </Text>
                        <Button
                            title = 'Update Apps To Watch'
                            onPress = {() => navigation.navigate('Apps')}
                            buttonStyle={{ backgroundColor: '#4682b4', height:30, bottom:5}}
                        />
                </SafeAreaView>



                <Text style = {styles.subtitleTextDetail}>    Change Your Method    </Text>
                <Text style={styles.smallTextDetail}>Select the icons for full description:</Text>
                <SafeAreaView style={styles.mainaContainer} horizontal={true}>
                    <MethodExDetails
                        title = "Monitor"
                        iconname = "cloud"
                        dTitle="The Monitor Method"
                        dFull = " This is the least involved method in the Screen Limit App. When set to 'Monitor', the app will only keep track of the time you spend on the apps you've set to have watched."
                    />
                    <MethodExDetails
                        title = "Guilt"
                        iconname = "cloud-rain"
                        dTitle="The Guilt Method"
                        dFull = "This method will proceed to guilt trip the amount of time you had spent on your phone. After you spend a certain amount of time on apps, it will begin pointing out more productive things you could have been doing with your time through popups."
                    />

                    <MethodExDetails
                        title="Strict"
                        iconname="cloud-lightning"
                        dTitle="The Strict Method"
                        dFull="This method is the 'cold turkey' approach. When you run out of time, the app will begin spamming popups, buzzing, and making noise until you stop using your apps."
                    />

                    <MethodExDetails
                        title="Reflection"
                        iconname="cloud-snow"
                        dTitle="The Reflection Method"
                        dFull="This method, as the name implies, will ask you to reflect upon certain questions. After you spend a certain amount of time on an app, the app will interrupt you asking questions. Question Example: 'Is there anything important you needed to have completed soon?'"
                    />
                </SafeAreaView>

                <SafeAreaView style={{backgroundColor: colorSecondary,}}>
                    <RNPickerSelect
                        style={styles.smallTextDetail}
                        placeholder={{label: "Select Method Here...", value: null}}
                        onValueChange={(value) => setMethod(value)}
                        items={[
                            { label: 'Monitor', value: 'Monitor' },
                            { label: 'Guilt', value: 'Guilt' },
                            { label: 'Strict', value: 'Strict' },
                            { label: 'Reflective', value: 'Reflective' },
                        ]}
                    />
                    <Button
                        title = 'Update Your Method'
                        onPress={() => updateUrMethod({method})}
                        buttonStyle={{ backgroundColor: '#4682b4', height:30, bottom:5}}
                    />
                </SafeAreaView>
            </ScrollView>

            <Button
                title = 'Return to User Screen'
                onPress = {() => navigation.navigate('User')}
                buttonStyle={{ backgroundColor: '#4682b4', height:30, bottom:5 }}
            />
        </SafeAreaView>
    );
};

SettingScreen.navigationOptions = () => { return { headerShown: false,};};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth:10,
        backgroundColor: colorSecondary,
    },
    mainaContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subContainer: {
        flex: 1,
        padding: 5,
        backgroundColor: 'black',
        marginBottom: 20
    },
    selection:{
        padding:15,
        marginBottom:20
    },
    pairing:{
        flexDirection: 'row',
        width: 150,
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:10
    },
    mainTitle:{
        color: colorWhite_1,
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    subtitleTextDetail: {
        color: colorWhite_1,
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
        textDecorationLine: 'underline',
        fontSize:18,
        alignItems: 'stretch'
    },
    smallTextDetail: {
        color: colorWhite_1,
        textAlign: 'center',
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
    },
    inputTextDetail: {
        color: colorWhite_1,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: "bold",
        marginTop:17,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5}
});

export default SettingScreen;

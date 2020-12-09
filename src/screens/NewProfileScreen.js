//Outside Imports
import React, {useState, useContext} from 'react';
import {StyleSheet, ScrollView, View, SafeAreaView} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Text, Input, Button} from 'react-native-elements'
import RNPickerSelect from 'react-native-picker-select';

//Local Imports
import MethodExDetails from '../components/MethodExDetails';
import {Context as AuthContext} from '../context/AuthContext';
import '../components/globals';

//Main Profile Setup Screen.
// This is where the user will input their name, email, password & select their methods.
//Submitting the profile will send the user to the app selection screen.

const NewProfileScreen = ({navigation}) => {
    const{ state, signup, clearErrorMessage} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [method, setMethod] = useState('');

    return (
        <SafeAreaView style={styles.mainContainer}>
            <NavigationEvents onWillFocus= {clearErrorMessage} />

            <Text h1 style={styles.mainTitle}>Create Your Profile</Text>
            <Text style={styles.smallTextDetail}> 
                    Hello and thank you for participating in our app, Screen Limit!
                    Following the steps to create your profile and
                    get Screen Limit running on your device!
            </Text>

            <ScrollView style={styles.subContainer}>
                <Input style={styles.inputTextDetail}
                    label = "Enter Your Desired Username"
                    value = {username}
                    onChangeText = {setUsername}
                    autoCorrect = {false} 
                />
                <Input style={styles.inputTextDetail}
                    label = "Enter You Desired Email"
                    value = {email}
                    onChangeText = {setEmail}
                    autoCapitalize ="none"
                    autoCorrect = {false}
                />
                <Input style={styles.inputTextDetail}
                    label = "Enter Your Desired Password"
                    value = {password}
                    onChangeText = {setPassword}
                    autoCapitalize="none"
                    autoCorrect = {false}
                    secureTextEntry
                />
                <Input style={styles.inputTextDetail}
                    label = "Confirm Your Password"
                    value = {retypePassword}
                    onChangeText = {setRetypePassword}
                    autoCapitalize="none"
                    autoCorrect = {false}
                    secureTextEntry
                />

                <Text style={styles.smallMethodDetail}>Scroll through and select the pictures below to learn what each method does.</Text>

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

                <View style={({backgroundColor:'darkgrey'}) }>
                    <RNPickerSelect
                        style={styles.smallTextDetail}
                        placeholder={{label: "Select Method Here...", value: null}}
                        onValueChange={(value) => setMethod(value)}
                        items={[
                        { label: 'Monitor', value: 'Monitor'},
                        { label: 'Guilt', value: 'Guilt' },
                        { label: 'Strict', value: 'Strict' },
                        { label: 'Reflective', value: 'Reflective' },
                        ]}
                    />
                </View>

            </ScrollView>

            {state.errorMessage ? <Text style={styles.error}>{state.errorMessage}</Text> : <View style={{marginBottom: 27}}/>}
            
            <View>
                <Button
                    title = 'Submit!'
                    onPress={() => signup({email, password, username, retypePassword, method})}      
                    buttonStyle={{ backgroundColor: '#4682b4' }}
                />
                <Button
                    title = "Return to Welcome Screen!"
                    onPress={() => navigation.navigate('NUser')}
                    titleStyle = {styles.linkTextDetail}
                    type="clear"
                />
            </View>
        </SafeAreaView>
    );
};

NewProfileScreen.navigationOptions = () => { return { headerShown: false, }; };
  
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderWidth:10,
        backgroundColor: colorSecondary,
      },
    mainaContainer: {
        flex: 1,
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
        fontSize: 18,
        textAlign: 'left',
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
    },
    smallMethodDetail: {
        color: 'cornflowerblue',
        fontSize: 14,
        textAlign: 'left',
    },
    disclaimerTextDetail: {
        color: 'cornflowerblue',
        textAlign: 'center',
        fontSize: 12,
    },
    inputTextDetail:{
        fontSize: 15,
        color: colorWhite_1,
    },
    linkTextDetail:{
        color: '#add8e6',
        fontSize: 13,
        marginBottom: 20
    },
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 5
    },
});

export default NewProfileScreen;
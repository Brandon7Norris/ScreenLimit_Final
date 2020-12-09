import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text } from 'react-native-elements';

const TextChunkDetails = (mType) => {
    switch (mType) {
    case "Monitor":
        return (
            <View>
                <Text style={styles.descriptionTitleText}>The Monitor Method</Text>
                <Text style={styles.descriptionText}>
                        This is the least involved method in the Screen Limit App. When set to 'Monitor',
                        the app will only keep track of the time you spend on the apps you've set to have watched.
                </Text>
            </View>
        );
    case 'Guilt':
        return(
            <View>
                <Text style={styles.descriptionTitleText}>The Guilt Method</Text>
                <Text style={styles.descriptionText}>
                    This method will proceed to guilt trip the amount of time you had spent on your phone.
                    After you spend a certain amount of time on apps, it will begin pointing out
                    more productive things you could have been doing with your time through popups.
                </Text>
            </View>
        );
    case 'Strict':
        return(
            <View>
                <Text style={styles.descriptionTitleText}>The Strict Method</Text>
                <Text style={styles.descriptionText}>
                    This method is the 'cold turkey' approach. When you run out of time, the app will
                    begin spamming popups, buzzing, and making noise until you stop using your apps.
                </Text>
            </View>
        );

    case 'Reflection':
        return(
            <View>
                <Text style={styles.descriptionTitleText}>The Reflection Method</Text>
                <Text style={styles.descriptionText}>
                    This method, as the name implies, will ask you to reflect upon certain questions.
                    After you spend a certain amount of time on an app, the app will interrupt you asking questions.
                    Question Example: 'Is there anything important you needed to have completed soon?'
                </Text>
            </View>
        );
    default:
        return <Text>"Something's not working" {JSON.stringify(mType)}</Text>;
    }
};

const styles = StyleSheet.create({
    descriptionTitleText: {
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic",
        marginBottom: 20
      },
      descriptionText: {
        textAlign: "left",
        marginBottom: 20
      },

});
export default TextChunkDetails;
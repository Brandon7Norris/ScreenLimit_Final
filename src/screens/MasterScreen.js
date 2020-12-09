//Outside Imports
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

//Inner Folder Imports
import Style_Button from '../components/Style_Button';
import '../components/globals';

//Primary debugging Screen which will be removed later, at the end of App Development
//
const MasterScreen = ({navigation}) => {
	return (
		<ScrollView style={styles.mainContainer}>
	
			<Text style={styles.textDetail}>The Master Screen</Text>

			<View style={styles.subContainer}>
				<Text style={styles.textDetail}>Login & Registration</Text>
				
				<Style_Button
					text=' Go To Login Screen'
					onPress={() => navigation.navigate('Login')}
				/>
		
				
				<Style_Button
					text='Go To New User Screen'
					onPress={() => navigation.navigate('NUser')}
				/>
				
				<Style_Button
					text='Go To Trial Screen'
					onPress={() => navigation.navigate('Trial')}
				/>
				
				<Style_Button
					text='Go To Create New User Profile Screen'
					onPress={() => navigation.navigate('NProfile')}
				/>
			</View>
			
			<View style={styles.subContainer}>
				<Text style={styles.textDetail}>A User's Profiles</Text>

				<Style_Button
					text='Go To User Screen'
					onPress={() => navigation.navigate('User')}
				/>
				
				<Style_Button
					text='Go To User Settings Screen'
					onPress={() => navigation.navigate('Setting')}
				/>
				
				<Style_Button
					text='Go To App Selection Screen'
					onPress={() => navigation.navigate('Apps')}
				/>
				
				<Style_Button
					text=' Go To History Screen'
					onPress={() => navigation.navigate('History')}
				/>				
			</View>			
		</ScrollView>
    );
};

//Detail Parameters Found Here
const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: colorSecondary
	},
	subContainer: {
		width: '90%',
		alignSelf: 'center',
		backgroundColor: colorSecondaryLight,
		padding: 10,
		marginTop: 30,
		borderRadius: 10
	},
	textDetail: {
		color: colorWhite_1,
		textAlign: 'center',
		fontFamily: subheadingFont,
		fontSize: 20,
		textDecorationLine: 'underline'
	},
});

export default MasterScreen;
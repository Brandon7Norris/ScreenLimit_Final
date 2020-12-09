import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Alert, ScrollView } from 'react-native'
import SelectMultiple from 'react-native-select-multiple'

import ToastExample from '../../android/app/src/main/java/com/secondtestproj/ToastExample';

// NEEDED : npm install react-native-select-multiple
// NEEDED : in node modules -> react-native -> select-multiple -> selectmultiple.js -> rename componentwillrecieveprops tp UNSAFE_componentWillRecieveProps



console.log("===============NEW REFRESH==============");
 //const appsImport =
 
 var refreshedOnce = 0;
 var apps;
 var appNames = [];


  ToastExample.getListOfApps(
    (err) => {
      console.log(err);
    },
    (msg) => {
      getAppList(msg);
    },
  );

  
const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{marginLeft: 10}}>
        <Text style={styles.container}>{label}</Text>
      </View>
    </View>
  )
}

      //<Text style={style}>{label}</Text>

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize : 32,
  },
  confirmButton: {
    zIndex : 1,
    width: '90%',
    height: 50,
    
    marginLeft: 20,
    marginRight : 20,
    //marginTop: 'auto',
    //flex : 1,
    //flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: '#A9A9A9',
    //justifyContent: 'flex-end',
    //justifyContent: 'center',
    //alignItems: 'center',
    //textAlignVertical: 'bottom',
    //position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
    top : 0,
    fontSize : 32,
    //
    //flexDirection: "row",
  },
});

var selection = [];
 
class AppPrepScreen extends Component {
  state = { selectedApps: [], uniqueValue: 1}
 
  onSelectionsChange = (selectedApps) => {
    // selectedApps is array of { label, value }
    this.setState({ selectedApps })
  }
 
  forceRemount = () => {
    this.setState(({uniqueValue}) => ({
        uniqueValue: uniqueValue + 1
    }));
  }

  render () {
    return (


      
      <View>
        <View style={styles.confirmButton}>
          
          <Button
            title="Confirm"
            onPress={() => confirmApps(this.state)}
          />
        </View>

        {/* <View>
          <Button
            title="Start Trial Period"
            //onPress={() => {this.forceUpdate()}}
            onPress={() => {startTrialPeriod()}}
          />
        </View> */}

        <View>
          <Button
            title="Stop App"
            onPress={() => {ToastExample.stopChecker()}}
          />
        </View>
        
        <ScrollView horizontal={true}>

        <Button
              title="5 Mins"
              onPress={() => {ToastExample.sendTimeLeft(300000);}}
            />

        <Button
              title="30 Mins"
              onPress={() => {ToastExample.sendTimeLeft(5000);}}
            />
            
            <Button
              title="1 Hour"
              onPress={() => {ToastExample.sendTimeLeft(10000);}}
            />

            <Button
              title="2 Hour"
              onPress={() => {ToastExample.sendTimeLeft(20000);}}
            />

            <Button
              title="3 Hour"
              onPress={() => {ToastExample.sendTimeLeft(30000);}}
            />

            <Button
              title="4 Hour"
              onPress={() => {ToastExample.sendTimeLeft(40000);}}
            />
        </ScrollView>

        <ScrollView horizontal={true}>
            <Button
              title="Strict"
              onPress={() => {ToastExample.setModeToStrict();}}
            />

            <Button
              title="Guilt"
              onPress={() => {ToastExample.setModeToGuilt();}}
            />

            <Button
              title="Reflect"
              onPress={() => {ToastExample.setModeToReflect();}}
            />

            <Button
              title="Monitor"
              onPress={() => {ToastExample.setModeToMonitor();}}
            />
        </ScrollView>


        {/* <View key = {this.state.uniqueValue}>
          <Button
            title="ResetTime"
            onPress={() => {ToastExample.sendTimeLeft(70000);}}
          />
        </View> */}

        <SelectMultiple
          items={appNames} // apps.appNum?
          renderLabel={renderLabel}
          selectedItems={this.state.selectedApps}
          onSelectionsChange={this.onSelectionsChange}
          /*selection ={ this.state.selectedApps }*//>
      <View>
    </View>

{/* 

 */}
      </View>//
      
    )

  }

}

function confirmApps(state)
{
  
  var exportList = "";
  Alert.alert('App Selection Saved');
  selection = state.selectedApps;
  /* // old, simple loop that put button labels into export string
  for (let i = 0; i < getLength(selection); i++)
  {
   //console.log(selection[i].label)
   exportList += (selection[i].label + ";");
  }*/
  for (let i = 0; i < getLength(selection); i++)
  {
    for (let k = 0; k < appNames.length; k++)
    {
      var select = selection[i].label;
      var name = appNames[k];
      if (select == name) // compare to app names array
      {
        exportList += (apps[k] + ";"); // add full app name
      }
    }
   // exportList += (selection[i].label + ";");
  }
  //console.log("Export String : " + exportList);
  //ToastExample.show(exportList, 1);
  //ToastExample.setUpServiceGuilt(exportList);
  //ToastExample.sampleServiceStart(exportList);

  ToastExample.sendAppString(exportList);
  //ToastExample.setModeToStrict();
  //ToastExample.setModeToGuilt();
  //ToastExample.setModeToReflect();
  //ToastExample.setModeToMonitor();

  //ToastExample.sendGuiltMessage1("beeble 1");
  //ToastExample.sendGuiltMessage2("beeble 2");
  //ToastExample.sendGuiltMessage3("beeble 3");

  //ToastExample.sendTimeLeft(500000);
  //ToastExample.sendTimeLeft(0);
  ToastExample.startChecker();

  console.log("Export App String : " + exportList);
}

function getLength(arr)
{
  return arr.length;
}
//<Text style={styles.confirmButton}>{"Confirm"}</Text>

function getAppList(argument)
{
  appsImport = 
  {
    appNames: 
      //'com.fb.App1;web.cookie.App2;smoop.frog.App3;ok.lol.App4;this.name.App5',
      argument,
  };



  apps = appsImport.appNames.split(";");
  
  //ToastExample.show(apps[0], 1);

  for (let i = 0; i < apps.length; i++)
  {
    
    var thisApp = apps[i].split("."); // get single app out of array
    appNames[i] = thisApp[thisApp.length-1];
    // get last element of thisApp, which is what we want
  }

}

export default AppPrepScreen
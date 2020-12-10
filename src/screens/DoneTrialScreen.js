import React, { Component, useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Button, Dimensions} from 'react-native';
import axios from 'axios';
import {
    LineChart,
  } from "react-native-chart-kit";
import { color } from 'react-native-reanimated';

// Font Awesome
import { FontAwesomeIcon }  from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'; 


class DoneTrialScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sessions: [],
            username: '',
            days_list: []
        };  
    }

    componentDidMount() {
        axios.get('http://screenlimit-backend-api.herokuapp.com/api/session/get_sessions_by_userId' + '5fd1a142e039950004a3f093')
        .then(response => this.setState({ sessions: response.data }))
        axios.post('http://screenlimit-frontend-api.herokuapp.com/get_weekly_report', {_id: '5fd1a142e039950004a3f093'})
        .then(response => this.setState({ days_list: response.data.days_list }))
    }

    getTotalTime() {
        var total = 0;
        this.state.sessions.map(session => {
            total += session.time_delta_minutes;
        });
        return total;
    }


    getMonday(){
        var total_mins = 0;
        this.state.sessions.map(session => {
            if(session.day_num == 16){
                total_mins += session.time_delta_minutes
            }
        })
        return total_mins
    }

    getWeekdayMins(dayNum){
        var total_mins = 0;
        this.state.sessions.map(session => {
            if(session.day_num == dayNum){
                total_mins += session.time_delta_minutes
            }
        })
        return total_mins
    }
    
    getTime(mins) {
        var hours = mins / 60;
        var newMins = mins % 60;
        return Math.floor(hours) + 'h ' + newMins + 'm'
    }



    renderSessions() {
        return this.state.sessions.map(session => 
            <View key={session._id} style={styles.container}>

                <View style={styles.textContainer}>
                    <Text style={styles.blueText}>App Name: </Text>
                    <Text style={styles.text}>{session.app_name}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.blueText}>Session Duration: </Text>
                    <Text style={styles.text}>{this.getTime(session.time_delta_minutes)}</Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.blueText}>Date: </Text>
                    <Text style={styles.h3}>{session.time_string}</Text>
                </View>
                
            </View>
        );
    }
    render() {

        
        return (
            <ScrollView style={styles.main}>
                <Text h1 style={styles.mainTitle}>Trial Complete! </Text>
                <View style={styles.subContainer}>
                    <View style={styles.headerBox}>
                        <View style={styles.headerIcon}>
                            <FontAwesomeIcon icon={faThumbsUp} color='#45b6fe' style={styles.image} size={80} />
                        </View>
                        <Text style={styles.headerText}>Trial Breakdown</Text>
                    </View>

        
    

                <View style={styles.chart}>
                    <LineChart
                        data={{
                        labels: this.state.days_list,
                        animationEnabled: true,
                        datasets: [
                            {
                            data: [
                                this.getWeekdayMins(this.state.days_list[0]),
                                this.getWeekdayMins(this.state.days_list[1]),
                                this.getWeekdayMins(this.state.days_list[2]),
                                this.getWeekdayMins(this.state.days_list[3]),
                                this.getWeekdayMins(this.state.days_list[4]),
                                this.getWeekdayMins(this.state.days_list[5]),
                                this.getWeekdayMins(this.state.days_list[6]),
                            ]
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
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
                        marginVertical: 8,
                        borderRadius: 16
                        }}
                    />
                    </View>
                    </View>
                    


                <View style={styles.mainContainer}>
                    <Text style={styles.text}>Total time on Apps:</Text>
                    <Text style={styles.blueText}>{this.getTime(this.getTotalTime())}</Text>
                </View>
                {this.renderSessions()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: colorSecondary,
        flex: 1
    },
    chart:{
    },
    mainTitle:{
        color: colorWhite_1,
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    container: {
        borderColor: colorWhite_1,
        borderWidth: 1,
        padding: 20,
    },
    subContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        backgroundColor: 'black',
        marginBottom: 20,
        marginTop: 20
    },
    headerText: {
        flex: 1,
        color: '#45b6fe',
        fontSize: 36,
        transform: [{translateX: -30}],
        textAlign: 'center',
        marginLeft: 40
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
    headerBox:{
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    mainTitle:{
        color: colorWhite_1,
        fontSize: 25,  
        textAlign: 'center',
        fontWeight: "bold",
        fontStyle: "italic",
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 7
    },
    h1: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
        marginLeft: 10
    },
    blueh1:{
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
        marginLeft: 10,
        color: '#26abff'
    },
    h2: {
        fontSize: 25,
        color: '#fff',
        margin: 10,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    h3: {
        fontSize: 15,
        color: '#fff',
        margin: 10
    },
    text: {
        color: '#fff',
        fontSize: 18,
        margin: 3
    },
    blueText: {
        color: colorBlue,
        fontSize: 18,
        marginHorizontal: 10,
    },
    warning: {
        color: 'red',
        textAlign: 'center',
        fontSize: 20,
        margin: 20
    },
    btn: {
        marginTop:10,
        marginHorizontal:40 ,
        padding: 20
    },
    greenText: {
        color: 'green',
        fontSize: 18,
    },
    redText: {
        color: 'red',
        fontSize: 18
    }
});

export default DoneTrialScreen;


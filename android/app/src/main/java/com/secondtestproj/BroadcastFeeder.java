package com.secondtestproj;

import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.app.Activity;


public class BroadcastFeeder
{
    static String appString;
    static String appTimeLeft;
    static String appMode;


    static String userID;


    public void receiveAppString(String p)
    {appString = p;}

    public void receiveAppTime(int p)
    {
        appTimeLeft = Integer.toString(p);
    }

    public void recieveAppMode(int p)
    {
        appMode = Integer.toString(p);
    }

    public void sendVariablesToAlarm()
    {
        MainActivity.myActivity.sendUpAlarmPackage(appString, appTimeLeft, appMode);
    }

    public String startMode0()
    {
        String concatenatedVariables = "0" + "," + appString + "," + appMode;
        return concatenatedVariables;
    }
    
}
package com.secondtestproj;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.Context;


import java.util.Map;
import java.util.HashMap;



public class ToastModule extends ReactContextBaseJavaModule {

  private MyActivity myActivity;
  private YourService myService;

  public static ReactApplicationContext reactContext;

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  ToastModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "ToastExample";
  }

  @ReactMethod
  public void show(String message, int duration) {
		Toast.makeText(getReactApplicationContext(), message, 1).show();

    /*
    if(MainActivity.myActivity != null)
    {Toast.makeText(getReactApplicationContext(), MainActivity.myActivity.getTestMessage(), 1).show();}
    else
    {Toast.makeText(getReactApplicationContext(), "mainActivity null", 1).show();}
    */
    
    //startMyService();
  }

  @ReactMethod
  public void print2()
	{
		Toast.makeText(getReactApplicationContext(), "print2", 1).show();
	}

  @ReactMethod
  public void print3(String msg)
	{
		Toast.makeText(getReactApplicationContext(), msg, 1).show();
	}

  public void show2(float message)
	{Toast.makeText(getReactApplicationContext(), Float.toString(message), 1).show();}

  @ReactMethod
  public void measureLayout(Callback errorCallback, Callback successCallback){

    successCallback.invoke("testBruh2");
//    catch(Exception e)
//    {}

  }

  @ReactMethod
  public void printTrue()
  {
    Toast.makeText(getReactApplicationContext(), "Trial IS Happening", 1).show();
  }

  @ReactMethod
  public void printFalse()
  {
    Toast.makeText(getReactApplicationContext(), "Trial NOT Happening", 1).show();
  }

  @ReactMethod
  public void printEnd()
  {
    Toast.makeText(getReactApplicationContext(), "Trial NEEDS TO END", 1).show();
  }

  @ReactMethod
  public void startTrialPeriod()
  {
    MainActivity.myActivity.startTrialPeriod();
  }

  @ReactMethod
  public void stopTrialPeriod()
  {
    MainActivity.myActivity.stopTrialPeriod();
  }

  @ReactMethod
  public void isTrialStillGoing(Callback errorCallback, Callback successCallback)
  {
    successCallback.invoke(MainActivity.myActivity.isTrialStillGoing());
  }

  @ReactMethod
  public void getListOfApps(Callback errorCallback, Callback successCallback){
    String appReturnString = MainActivity.myActivity.getListOfApps();
    successCallback.invoke(appReturnString);
    //successCallback.invoke("dummyString;dummyStringAlso");
  }

  @ReactMethod
  public void startChecker()
  {
    MainActivity.myActivity.startChecker();
  }

  @ReactMethod
  public void stopChecker()
  {
    MainActivity.myActivity.broadcastStopApp();
  }

  public void startMyService()
  {
    myActivity = new MyActivity();
    myActivity.startMyService();
  }

  @ReactMethod
  public void setUpService(String appString)
  {
    //Toast.makeText(getReactApplicationContext(), "in set up service", 1).show();

    MainActivity.myActivity.setUpService(appString);
  }

  @ReactMethod
  public void setUpServiceGuilt(String appString)
  {
    //Toast.makeText(getReactApplicationContext(), "in set up service", 1).show();

    //String combString = appString;
    //MainActivity.myActivity.setUpServiceGuilt(combString);
    MainActivity.myActivity.setUpServiceGuilt(appString);
  }

  @ReactMethod
  public void sampleServiceStart(String appString)
  {
    BroadcastFeeder bF = new BroadcastFeeder();
    bF.receiveAppString(appString);
    bF.receiveAppTime(500000);
    bF.recieveAppMode(2);

    //bF.sendVariablesToAlarm();
  }

  public void setAppList(String p)
  {
    BroadcastFeeder bF = new BroadcastFeeder();
    bF.receiveAppString(p);
  }

  /* 

  For App modes
  0 is Strict
  1 is Guilt
  2 is Reflect
  3 is Trial
  */

  @ReactMethod
  public void setModeToStrict()
  {
      MainActivity.myActivity.broadcastAppMode(Integer.toString(0));
  }

  @ReactMethod
  public void setModeToGuilt()
  {
    MainActivity.myActivity.broadcastAppMode(Integer.toString(1));
  }

  @ReactMethod
  public void setModeToReflect()
  {
    MainActivity.myActivity.broadcastAppMode(Integer.toString(2));
  }

  @ReactMethod
  public void setModeToTrial()
  {
    MainActivity.myActivity.broadcastAppMode(Integer.toString(3));
  }

  @ReactMethod
  public void setModeToMonitor()
  {
    MainActivity.myActivity.broadcastAppMode(Integer.toString(3));
  }

  public void startMode0()
  {
    BroadcastFeeder bF = new BroadcastFeeder();
    String concatenatedVariables = bF.startMode0();
    MainActivity.myActivity.setUpService(concatenatedVariables);
  }

  @ReactMethod
  public void sendAppString(String appString)
  {
    MainActivity.myActivity.broadcastAppString(appString);
  }

  @ReactMethod
  public void sendAppMode(int appMode)
  {
    MainActivity.myActivity.broadcastAppMode(Integer.toString(appMode));
  }

  @ReactMethod
  public void sendTimeLeft(int timeLeft)
  {
    MainActivity.myActivity.broadcastTimeLeft(Integer.toString(timeLeft));
    MainActivity.myActivity.writeUserSetTime(timeLeft);
  }

  @ReactMethod
  public void sendUserID(String userID)
  {
    MainActivity.myActivity.broadcastUserID(userID);
  }

  @ReactMethod
  public void sendGuiltMessage1(String message)
  {
    MainActivity.myActivity.broadcastGuilt1(message);
  }

  @ReactMethod
  public void sendGuiltMessage2(String message)
  {
    MainActivity.myActivity.broadcastGuilt2(message);
  }  
  
  @ReactMethod
  public void sendGuiltMessage3(String message)
  {
    MainActivity.myActivity.broadcastGuilt3(message);
  }

}
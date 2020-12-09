package com.secondtestproj;

import com.facebook.react.ReactActivity;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

import android.os.IBinder;
import android.os.Binder;

import android.content.ComponentName;

import android.content.SharedPreferences;

import android.content.pm.PackageManager;
import android.content.pm.ApplicationInfo;
//import com.google.android.material.floatingactionbutton.FloatingActionButton;
//import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.provider.Settings;
import android.util.Log;
import android.view.View;

import android.view.Menu;
import android.view.MenuItem;

import java.util.*;
import java.util.ArrayList;

import android.os.IBinder;
import android.content.ServiceConnection;

import com.secondtestproj.YourService.MyLocalBinder;

import android.widget.Button;
import android.widget.Toast;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;

//import org.apache.http.impl.client.HttpClientBuilder;
//import org.apache.http.impl.client.DefaultHttpClient;

//http and json stuff

import java.net.URL;
import java.net.HttpURLConnection;
import org.json.JSONObject;
import java.io.DataOutputStream;
import java.net.URLEncoder;

/*

android {
    useLibrary 'org.apache.http.legacy'
}

in build.gradle

*/

//http and json stuff

//public class MainActivity extends AppCompatActivity {
public class MainActivity extends ReactActivity {

  //private static TimeLeftReceiver timeLeftReceiver;// = new TimeLeftReceiver(getApplicationContext());

  private Button button;

  private AppHashTable appHashTable = new AppHashTable();
  static MainActivity myActivity;

  boolean isBound = false;


  YourService myService;// = new YourService();



  
@Override
protected String getMainComponentName() {
  return "secondTestProj";
}

   

public String getTestMessage2()
{return "testMessage4343";}

public String getTestMessage()
{
  PackageManager pm = getPackageManager();
  List<ApplicationInfo> apps = pm.getInstalledApplications(0);

  ApplicationInfo p = new ApplicationInfo();
  List<ApplicationInfo> installedApps = new ArrayList<ApplicationInfo>();

  for(ApplicationInfo app : 
  apps) {

      installedApps.add(app);

      //checks for flags; if flagged, check if updated system app
      /*
      if((app.flags & ApplicationInfo.FLAG_UPDATED_SYSTEM_APP) != 0) 
      {
          installedApps.add(app);
      //it's a system app, not interested
      } 
      else 
      if ((app.flags & ApplicationInfo.FLAG_SYSTEM) != 0) 
      {
          //Discard this one
      //in this case, it should be a user-installed app
      } 
      else 
      {
          installedApps.add(app);
      }
      */
  }

  boolean foundString = false;

/*

  for(int i = 0; i < installedApps.size(); i++)
  {
      //if(installedApps.get(i).processName.equals("com.google.android.youtube"))
      if(installedApps.get(i).processName.equals("asdflkjfjFUCKFUCKFUCKFUCK"))
      {
          return "found youtube";
      }
  }
  return "did not find youtube";
  //com.google.android.youtube
  
  //return "testMessage5";
  //return installedApps.get(0).toString();
  //return "1 " + installedApps.get(0).processName;
  */

  if(isServiceNull())
  {
    return "service null";
  }
  else
  {
    //myService.setMainActivity(this);
    myService.setString("test STRING");
    return "service not null";

  }


}

public AppHashTable getAppHashTable()
{
  return appHashTable;
}

public boolean isAppInTable(String p)
{
      return appHashTable.isAppInTable(p);
}

private ServiceConnection myConnection = new ServiceConnection()
{
  @Override
  public void onServiceConnected(ComponentName name, IBinder service)
  {
    YourService.MyLocalBinder binder = (YourService.MyLocalBinder) service;
    myService = binder.getService();
    isBound = true;

    myService.setString("serviceString");

    Log.wtf("serviceConnected43", "serviceConnected43");

  }

  @Override
  public void onServiceDisconnected(ComponentName name)
  {
    isBound = false;
  }
};

public boolean isServiceNull()
{
  if (myService == null)
  {
    return true;
  }
  return false;
}

public void giveAlarmString(String p)
{
    myService.setString(p);
}

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      //setContentView(R.layout.activity_main);

      //SharedPreferences pref = getSharedPreferences("MyPref", Context.MODE_PRIVATE);
      //pref.edit().clear().commit();

        //timeLeftReceiver = new TimeLeftReceiver(getApplicationContext());

        //Intent intent = new Intent("my.action.saveTimeLeft");
        //Intent intent = new Intent();
        //intent.setAction("my.action.saveTimeLeft");
        //intent.putExtra("extra", timeLeft);
        //intent.putExtra("extra", Long.toString(-70));
        //ComponentName componentName = new ComponentName(getApplicationContext(), TimeLeftReceiver.class);
        //intent.setComponent(componentName);


        //Intent intent = new Intent(this, TimeLeftReceiver.class);
        //sendBroadcast(intent);


      Toast.makeText(getApplicationContext(), "", 
      Toast.LENGTH_LONG).show();   
      Toast.makeText(getApplicationContext(), "", 
      Toast.LENGTH_LONG).show();   


      


      //checkIfNewDay();

      FileManager fileManager = new FileManager(getApplicationContext());
/*  */
      if(fileManager.isUserIDWritten() == true)
      {
        //Toast.makeText(getApplicationContext(), "BU UserID " + fileManager.readUserId(), Toast.LENGTH_LONG).show();   
        broadcastUserID(fileManager.readUserId());
      }
      else
      {
        //Toast.makeText(getApplicationContext(), "BU UserID not written", Toast.LENGTH_LONG).show();   
      }

      if(fileManager.isAppStringWritten())
      {
        //Toast.makeText(getApplicationContext(), "BU AppList " + fileManager.readAppString(), Toast.LENGTH_LONG).show();   
        broadcastAppString(fileManager.readAppString());
      }
      else
      {
        //Toast.makeText(getApplicationContext(), "BU AppList not written", Toast.LENGTH_LONG).show();   
      }

      if(fileManager.isUserMethodWritten())
      {
        //Toast.makeText(getApplicationContext(), "BU UserMethod " + fileManager.readUserMethod(), Toast.LENGTH_LONG).show();   
        broadcastAppMode(Integer.toString(fileManager.readUserMethod()));
      }
      else
      {
        //Toast.makeText(getApplicationContext(), "BU UserMethod not written", Toast.LENGTH_LONG).show();   
      }

      if(
        fileManager.isUserIDWritten() &&
        fileManager.isAppStringWritten() &&
        fileManager.isUserMethodWritten()
      )
      {
        startChecker();
      }

    //TimeSlice timeSlice = new TimeSlice();
    //timeSlice.check("com.whatever.youtube", (long)50000);



      /*
      button = (Button) findViewById(R.id.button_1);

      if(button != null) {
        button.setOnClickListener(new View.OnClickListener() {
          @Override
          public void onClick(View view) {
            toggleAlarm();
          }
        });
      }
      */

      //startChecker();

      Log.wtf("mainAct", "mainAct");

      myActivity = this;

      /*
      Intent i = new Intent(this, YourService.class);

      bindService(i, myConnection, Context.BIND_AUTO_CREATE);
      */

      //startService(i);

      startActivity(new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS));

      //if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
          //startForegroundService(i);
      //}


      //appHashTable.putAppsInTable("com.google.android.youtube;whocares;ddd");

      //System.out.println("test print");

      //myService.setMainActivity(this);

  }

  @Override
  protected void onStart()
  {
    super.onStart();
    checkIfNewDay();
  }

  protected void checkIfNewDay()
  {
    FileManager fileManager = new FileManager(getApplicationContext());

    if(fileManager.isDateLastWrittenWritten())
    {
      Toast.makeText(getApplicationContext(), "DateWritten ", Toast.LENGTH_LONG).show();   

      long timeSinceLastReset = System.currentTimeMillis() - fileManager.readDateLastWritten();

      //if(timeSinceLastReset > 180000) //3 minutes in milliseconds
      if(timeSinceLastReset > 600000) //10 minutes in milliseconds
      //if(timeSinceLastReset > 86400000) //1 day. 24 hr * 60 min * 60 sec * 1000 millisecs
      //if()
      {
        Toast.makeText(getApplicationContext(), "Over 24h ", Toast.LENGTH_LONG).show();   
        if(fileManager.isUserSetTimeWritten())
        {
          Toast.makeText(getApplicationContext(), "UserSetTime IS written", Toast.LENGTH_LONG).show();   
          broadcastTimeLeft(Long.toString(fileManager.readUserSetTime()));

          fileManager.writeDateLastWritten(System.currentTimeMillis());
        }
        else
        {
          Toast.makeText(getApplicationContext(), "UserSetTime not written", Toast.LENGTH_LONG).show();   
        }
      }
      else
      {
        Toast.makeText(getApplicationContext(), "Not over 24h", Toast.LENGTH_LONG).show();   
      }
    }
    else
    {
      Toast.makeText(getApplicationContext(), "Date not written ", Toast.LENGTH_LONG).show();   
      fileManager.writeDateLastWritten(System.currentTimeMillis());
    }
  }

  public void writeUserSetTime(long p)
  {
    FileManager fileManager = new FileManager(getApplicationContext());

    fileManager.writeUserSetTime(p);
  }

  public void startTrialPeriod()
  {
    FileManager fileManager = new FileManager(getApplicationContext());
    
    fileManager.writeTrialStart(System.currentTimeMillis());
  }

  public void stopTrialPeriod()
  {
    FileManager fileManager = new FileManager(getApplicationContext());
    
    fileManager.writeTrialStart(-1);
  }

  public int isTrialStillGoing()
  {
    FileManager fileManager = new FileManager(getApplicationContext());

    if(fileManager.isTrialStartWritten())
    {
      long trialStart = fileManager.readTrialStart();
      if(trialStart == -1)
      {
        return 0;
      }
      else
      {
        long trialLength = System.currentTimeMillis() - trialStart;

        if(trialLength < 180000) //this is 3 minutes in milliseconds
        //if(trialLength > 1209600000)//this is 2 weeks in milliseconds
        {                             //14days*24hours*60mins*60secs*1000millis
          return 1;
        }
        else //trial needs to end
        {
          return -1;
        }
      }
    }
    else
    {
      return 0;
    }
  }

  public void toggleAlarm()
  {
      Intent intent = new Intent("my.action.string");
      intent.putExtra("extra", "bubby;com.android.vending;beeby;com.example.alarmtestapplication");

      ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
      intent.setComponent(componentName);

      sendBroadcast(intent);

    myService.toggleAlarm("passedServString");
    //Log.v("main toggle", "main toggle");
  }

  public void setUpService(String appString)
  {
    Intent intent = new Intent("my.action.string");
    intent.putExtra("extra", appString);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);

  //myService.toggleAlarm("passedServString");
  //Log.v("main toggle", "main toggle");   
  }

  public void changeMode()
  {
    
  }

  public void changeAppList()
  {

  }

  public void changeTime()
  {
    
  }

  public void startChecker()
  {
      //if(isBound == false)
      {
        Intent i = new Intent(this, YourService.class);

        bindService(i, myConnection, Context.BIND_AUTO_CREATE);
      }
      //else
      {
        //myConnection.restartBackgroundChecker();
      }
  }

  public void broadcastStopApp()
  {
    Intent i = new Intent(this, YourService.class);
    stopService(i);

    Toast.makeText(getApplicationContext(), "isBound " + isBound, Toast.LENGTH_LONG).show();   

    Intent intent = new Intent("my.action.stopChecker");
    intent.putExtra("extra", "stop");

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void broadcastAppString(String appString)
  {
    FileManager fileManager = new FileManager(getApplicationContext());
    fileManager.writeAppString(appString);



    Intent intent = new Intent("my.action.appString");
    intent.putExtra("extra", appString);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);

    //Toast.makeText(getApplicationContext(), "testBroadcast1", Toast.LENGTH_LONG).show();    
  }

  public void broadcastAppMode(String appMode)
  {
    FileManager fileManager = new FileManager(getApplicationContext());
    fileManager.writeUserMethod(Integer.parseInt(appMode));


    Intent intent = new Intent("my.action.appMode");
    intent.putExtra("extra", appMode);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void broadcastTimeLeft(String timeLeft)
  {
    Intent intent = new Intent("my.action.timeLeft");
    intent.putExtra("extra", timeLeft);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void broadcastUserID(String ID)
  {
    FileManager fileManager = new FileManager(getApplicationContext());
    fileManager.writeUserId(ID);


    Intent intent = new Intent("my.action.userID");
    intent.putExtra("extra", ID);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void broadcastGuilt1(String msg)
  {
    Intent intent = new Intent("my.action.guilt1");
    intent.putExtra("extra", msg);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void broadcastGuilt2(String msg)
  {
    Intent intent = new Intent("my.action.guilt2");
    intent.putExtra("extra", msg);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void broadcastGuilt3(String msg)
  {
    Intent intent = new Intent("my.action.guilt3");
    intent.putExtra("extra", msg);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);
  }

  public void setUpServiceGuilt(String appString)
  {
    Intent intent = new Intent("my.action.string");
    intent.putExtra("extra", appString + ",0");

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);

    Toast.makeText(getApplicationContext(), "setUpServiceGuilt", Toast.LENGTH_LONG).show();

  //myService.toggleAlarm("passedServString");
  //Log.v("main toggle", "main toggle");   
  }

  public void sendUpAlarmPackage(String appString, String timeLeft, String appMode)
  {
    //String combinedStr = new StringBuilder().append(appString).append("+").append(timeLeft).append("+").append(appMode).toString();
    String combinedStr = "biggle";

    Intent intent = new Intent("com.secondtestproj");

    intent.putExtra("combStr", combinedStr);

    ComponentName componentName = new ComponentName(getApplicationContext(), Alarm.class);
    intent.setComponent(componentName);

    sendBroadcast(intent);

    Toast.makeText(getApplicationContext(), "sendUpAlarmPackage" + combinedStr, Toast.LENGTH_LONG).show();
  }

  public String getListOfApps()
  {



    PackageManager pm = getPackageManager();
    List<ApplicationInfo> apps = pm.getInstalledApplications(0);
  
    ApplicationInfo p = new ApplicationInfo();
    List<ApplicationInfo> installedApps = new ArrayList<ApplicationInfo>();
  
    for(ApplicationInfo app : 
    apps) {
  
        installedApps.add(app);
  
        //checks for flags; if flagged, check if updated system app
        
        if((app.flags & ApplicationInfo.FLAG_UPDATED_SYSTEM_APP) != 0) 
        {
            installedApps.add(app);
        //it's a system app, not interested
        } 
        else 
        if ((app.flags & ApplicationInfo.FLAG_SYSTEM) != 0) 
        {
            //Discard this one
        //in this case, it should be a user-installed app
        } 
        else 
        {
            installedApps.add(app);
        }
        
    }

    String appReturnString = new String();

    for(int i = 0; i < installedApps.size(); i++)
    {
      if(i == installedApps.size() - 1)
      {appReturnString += installedApps.get(i).processName;}
      else
      {appReturnString += installedApps.get(i).processName + ";";}
    }

    return appReturnString;
  }
}
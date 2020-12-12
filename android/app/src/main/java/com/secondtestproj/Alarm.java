package com.secondtestproj;


import android.app.AlarmManager;
import android.app.Application;
import android.app.PendingIntent;
import android.app.usage.UsageStats;
import android.app.usage.UsageStatsManager;
import android.content.BroadcastReceiver;

import android.content.Context;
import android.content.Intent;

import android.os.Build;
import android.os.PowerManager;



import android.provider.Settings;
import android.util.Log;
import android.widget.Toast;

import java.util.List;
import java.util.SortedMap;
import java.util.TreeMap;
import java.util.Date;

import android.content.ComponentName;

public class Alarm extends BroadcastReceiver
{
    boolean proceedFurther = true;

    static private TimeSlice timeSlice = new TimeSlice();
    static private long oldTime = System.currentTimeMillis();
    static private long timeLeft = 0;
    
    static private String testString = new String("blankAlarmString");
    static private AppHashTable appHashTable = new AppHashTable();
    static private int userMethod = -1;
    //private FileManager fileManager;

    private boolean toggleAlarm = false;

    public void setString(String p)
    {
        testString = p;

    }

    private MainActivity mainActivity;

    /*
    private String getCurrentApp()
    {
        return 
    }
    */

    public void checkIfAppInTable(String currentApp, Context context)
    {
    


        //if(userMethod != 3)
        {    
            if(appHashTable.getSize() > 0) 
            {
                if (appHashTable.isAppInTable(currentApp) == true)
                {
                    if(timeLeft == -500000) //if timeDiff hasn't been set by user
                    {

                    }
                    if(proceedFurther == true)
                    {
                        long timeDiff = (System.currentTimeMillis() - oldTime);

                        //Toast.makeText(context, "timeDiff " + timeDiff, Toast.LENGTH_LONG).show();

                        oldTime = System.currentTimeMillis();

                        if (timeDiff > 300000)
                        {
                            timeLeft -= 300000;
                            timeDiff = 300000;
                        }
                        else
                        {timeLeft -= timeDiff;}

                        
                        timeSlice.checkIfIShouldSendTimeSlice(currentApp, timeDiff, context);
                        saveTimeLeft(context);
                        

                        if(timeLeft < 0)
                        {
                            timeLeft = -5;
                            Toast.makeText(context, "no time left ", Toast.LENGTH_LONG).show();

                            doMethod(context);
                        }
                        else
                        {
                            //Toast.makeText(context, "timeLeft " + timeLeft, Toast.LENGTH_LONG).show();
                        }

                    }

                } 
                else 
                {
                    //Toast.makeText(context, "app not in table ", Toast.LENGTH_LONG).show();
                }
            }
            else
            {
                Toast.makeText(context, "Please reselect your apps", Toast.LENGTH_LONG).show();
            }

        }
        /*
        else
        {
           //Do monitor since userMethod is set to monitor mode

           long timeDiff = (System.currentTimeMillis() - oldTime);

           Toast.makeText(context, "Monitor method", Toast.LENGTH_LONG).show();

           oldTime = System.currentTimeMillis();

           //TimeSlice timeSlice = new TimeSlice();
           timeSlice.checkIfIShouldSendTimeSlice(currentApp, timeDiff, context);

           saveTimeLeft(context);
        }
        */

    }

    public void someoneElsesMethod()
    {

    }

    public void doMethod(Context context)
    {
        if(userMethod == -1) //userMethod was not preserved
        {
                Toast.makeText(context, "Please select a user method", Toast.LENGTH_LONG).show();
        }
        else
        {
            switch (userMethod) {
                case 0:  
                    MethodStrict methodStrict = new MethodStrict();
                    methodStrict.harassUser(context);
                    break;
                case 1:  
                    MethodGuilt methodGuilt = new MethodGuilt();
                    methodGuilt.printRandomGuiltMsg(context);

                    //timeLeft = 600000;
                    //fileManager.writeTimeLeft(timeLeft);
                    //fileManager.writeUserSetTime(timeLeft);

                    break;
                case 2:  
                    MethodReflect methodReflect = new MethodReflect();
                    methodReflect.printReflectMessage(context);

                    //timeLeft = 600000;
                    //fileManager.writeTimeLeft(timeLeft);
                    //fileManager.writeUserSetTime(timeLeft);

                    break;
                case 3:  
                
                    break;
            }
        }



    }

    public void saveTimeLeft(Context context)
    {
        
        //Toast.makeText(context, "sending saveTimeLeft", Toast.LENGTH_LONG).show();

        //Intent intent = new Intent(this, TimeLeftReceiver.class).setAction("my.action.saveTimeLeft");
        //intent.putExtra("extra", Long.toString(timeLeft));

        /*
        Intent intent = new Intent("my.action.saveTimeLeft");
        //Intent intent = new Intent();
        //intent.setAction("my.action.saveTimeLeft");
        //intent.putExtra("extra", timeLeft);
        intent.putExtra("extra", Long.toString(timeLeft));
        ComponentName componentName = new ComponentName(context, TimeLeftReceiver.class);
        intent.setComponent(componentName);
        


        context.sendBroadcast(
            intent
            );
        */
        
    }

    @Override
    public void onReceive(Context context, Intent intent)
    {
        proceedFurther = true;

        //Toast.makeText(context, "in onReceive5", Toast.LENGTH_LONG).show();

        //Log.d("alarmR", "alarm0");

        PowerManager pm = (PowerManager) context.getSystemService(Context.POWER_SERVICE);
        PowerManager.WakeLock wl = pm.newWakeLock(PowerManager.PARTIAL_WAKE_LOCK, "alarm:wakeLock");
        wl.acquire();

        // Put here YOUR code.

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            //Toast.makeText(context,  Application.getProcessName(), Toast.LENGTH_LONG).show();
            ;

            //Toast.makeText(context, "RepeatingAlarm", Toast.LENGTH_LONG).show();

            //context.startActivity();
            String currentApp = null;
            UsageStatsManager usm = (UsageStatsManager) context.getSystemService(Context.USAGE_STATS_SERVICE);
            Log.d("alarm1", "alarm1");
            long time = System.currentTimeMillis();
            List<UsageStats> applist = usm.queryUsageStats(UsageStatsManager.INTERVAL_DAILY, time - 1000 * 1000, time);
            if (applist != null && ((List) applist).size() > 0) {
                SortedMap<Long, UsageStats> mySortedMap = new TreeMap<>();
                for (UsageStats usageStats : applist) {
                    mySortedMap.put(usageStats.getLastTimeUsed(), usageStats);
                }
                if (mySortedMap != null && !mySortedMap.isEmpty()) {
                    currentApp = mySortedMap.get(mySortedMap.lastKey()).getPackageName();
                    
                    //Toast.makeText(context, currentApp, Toast.LENGTH_LONG).show();


                    String action = intent.getAction();

                    Log.i("Receiver", "Broadcast received: " + action);

                    
                    if(action != null) {
                    
                        
                        /*
                        if (action.equals("my.action.string")) {
                            testString = intent.getExtras().getString("extra");

                            //Toast.makeText(context, "action not null||| " + testString, Toast.LENGTH_LONG).show();

                            String[] arrOfStr = testString.split(",");

                            if(Integer.parseInt(arrOfStr[0] == 0)
                            {

                            }

                            Toast.makeText(context, "action not null|||" + arrOfStr[1], Toast.LENGTH_LONG).show();

                            appHashTable.putAppsInTable(arrOfStr[0]);
                        }
                        */

                    /*
                        if (action.equals("my.action.string")) {

                            if()

                            String testString1 = intent.getExtras().getString("extra1");
                            String testString2 = intent.getExtras().getString("extra2");
                            //Toast.makeText(context, "action not null", Toast.LENGTH_LONG).show();
                            Toast.makeText(context, "val1: " + testString1, Toast.LENGTH_LONG).show();
                            Toast.makeText(context, "val2: " + testString2, Toast.LENGTH_LONG).show();
                            //appHashTable.putAppsInTable(arrOfStr[0]);
                        }
                    */   

                        

                        if (action.equals("my.action.appString")) 
                        {            
                            proceedFurther = false;
                            String hold = intent.getExtras().getString("extra");

                            //fileManager.writeAppString(hold);

                            appHashTable.putAppsInTable(hold);

                            //Toast.makeText(context, "appString: " + hold, Toast.LENGTH_LONG).show();
                        }

                    

                        if(action.equals("my.action.appMode"))
                        {            
                            proceedFurther = false;
                            userMethod = Integer.parseInt(intent.getExtras().getString("extra"));

                            //fileManager.writeUserMethod(userMethod);

                            //Toast.makeText(context, "appMode: " + userMethod, Toast.LENGTH_LONG).show();
                        }

                        if(action.equals("my.action.timeLeft"))
                        {            
                            proceedFurther = false;
                            timeLeft = Integer.parseInt(intent.getExtras().getString("extra"));

                            //fileManager.writeTimeLeft(timeLeft);
                            //fileManager.writeUserSetTime(timeLeft);

                            //Toast.makeText(context, "timeLeft sent: " + timeLeft, Toast.LENGTH_LONG).show();
                        }

                        if(action.equals("my.action.userID"))
                        {            
                            proceedFurther = false;
                            //int hold = Integer.parseInt(intent.getExtras().getString("extra"));
                            String hold = intent.getExtras().getString("extra");
                            //TimeSlice timeSlice = new TimeSlice();        
                            timeSlice.setUserID(hold);                                               

                            //Toast.makeText(context, "userID: " + hold, Toast.LENGTH_LONG).show();
                        }

                        if(action.equals("my.action.guilt1"))
                        {            
                            proceedFurther = false;
                            String msg = intent.getExtras().getString("extra");

                            MethodGuilt guiltMethod = new MethodGuilt();
                            guiltMethod.setGuiltMsg1(msg);

                            //fileManager.writeGuiltMessage1(msg);

                            //Toast.makeText(context, "guilt1: " + msg, Toast.LENGTH_LONG).show();
                        }
                        
                        if(action.equals("my.action.guilt2"))
                        {            
                            proceedFurther = false;
                            String msg = intent.getExtras().getString("extra");

                            MethodGuilt guiltMethod = new MethodGuilt();
                            guiltMethod.setGuiltMsg2(msg);

                            //fileManager.writeGuiltMessage2(msg);

                            //Toast.makeText(context, "guilt2: " + msg, Toast.LENGTH_LONG).show();
                        }

                        if(action.equals("my.action.guilt3"))
                        {            
                            proceedFurther = false;
                            String msg = intent.getExtras().getString("extra");

                            MethodGuilt guiltMethod = new MethodGuilt();
                            guiltMethod.setGuiltMsg3(msg);

                            //fileManager.writeGuiltMessage3(msg);

                            //Toast.makeText(context, "guilt3: " + msg, Toast.LENGTH_LONG).show();
                        }

                        if(action.equals("my.action.stopChecker"))
                        {            
                            proceedFurther = false;
                            Toast.makeText(context, "Stopping checker", Toast.LENGTH_LONG).show();
                            cancelAlarm(context);
                        }

                        
                        
                    }
                    //else
                    //{Toast.makeText(context, "action null", Toast.LENGTH_LONG).show();}

                    if(appHashTable != null) 
                    {

                    }
                    else
                    {
                        Toast.makeText(context, "app hash table null", Toast.LENGTH_LONG).show();
                    }                

                    checkIfAppInTable(currentApp, context);                 

                }
                else
                {Toast.makeText(context, "nullOrEmpty", Toast.LENGTH_LONG).show();}

            }
        }
        else
        {
            Toast.makeText(context, "Your phone is not compatable with this app", Toast.LENGTH_LONG).show();
            Toast.makeText(context, "This app requires Android 9/Pie to run", Toast.LENGTH_LONG).show();
            //cancelAlarm(context);
        }

        Log.d("alarm2", "alarm2");
         // For example


        //Toast.makeText(context, "RepeatingAlarm", Toast.LENGTH_LONG).show(); // For example

        wl.release();
    }

    public void setAlarm(Context context)
    {
        AlarmManager am =( AlarmManager)context.getSystemService(Context.ALARM_SERVICE);
        Intent i = new Intent(context, Alarm.class);

        String user_name = "Jhon Doe";
        i.putExtra("USER_NAME", user_name);

        PendingIntent pi = PendingIntent.getBroadcast(context, 0, i, 0);
        //am.setRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), 5, pi); // Millisec * Second * Minute
        am.setInexactRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), 20, pi);
    }

    public void cancelAlarm(Context context)
    {
        Intent intent = new Intent(context, Alarm.class);
        PendingIntent sender = PendingIntent.getBroadcast(context, 0, intent, 0);
        AlarmManager alarmManager = (AlarmManager) context.getSystemService(Context.ALARM_SERVICE);
        alarmManager.cancel(sender);
    }

    public void setMainActivity(MainActivity p)
    {mainActivity = p;}

    public void toggleAlarm()
    {

        if(toggleAlarm == true)
        {
            toggleAlarm = false;
            Log.v("alarm toggle", "alarm false");
        }
        else
        {
            toggleAlarm = true;
            Log.v("alarm toggle", "alarm true");
        }
    }
}

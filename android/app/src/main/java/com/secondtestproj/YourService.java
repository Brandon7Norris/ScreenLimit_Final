package com.secondtestproj;

import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.os.Binder;
import android.os.IBinder;
import android.util.Log;

public class YourService extends Service
{
    private String pString = new String();
    private int counter = 0;

    Alarm alarm = new Alarm();

    private MyLocalBinder myBinder = new MyLocalBinder();
    
    public void onCreate()
    {
        Log.d("servCreate", "onCreate service");
        super.onCreate();
    }

    @Override
    public int onStartCommand(Intent intent, int flags, int startId)
    {
        //Log.d("servSC", "onStartCommand");
        alarm.setAlarm(this);
        return START_STICKY;
    }

    @Override
    public void onStart(Intent intent, int startId)
    {
        //Log.d("servS", "onStart");
        alarm.setAlarm(this);
    }

    public void restartBackgroundChecker()
    {
        alarm.setAlarm(this);
    }

    @Override
    public IBinder onBind(Intent intent)
    {
        Log.wtf("onBind", "onBind");
        alarm.setAlarm(this);
        return myBinder;
    }

    public void setMainActivity(MainActivity p)
    {
        alarm.setMainActivity(p);
    }

    public void setString(String p)
    {
        alarm.setString(p);
    }

    public void testActivity()
    {
        int i = 1;
    }

    public class MyLocalBinder extends Binder
    {
        YourService getService()
        {
            return YourService.this;
        }
    }

    public void toggleAlarm(String p)
    {
        counter++;
        Log.v("serv toggle", Integer.toString(counter));
        pString = p;
        alarm.toggleAlarm();
    }

}
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

public class TimeLeftReceiver extends BroadcastReceiver
{
    //static Context myContext;

    public TimeLeftReceiver(Context pContext)
    {
        //myContext = pContext;
    }
    
    @Override
    public void onReceive(Context context, Intent intent)
    {
        Toast.makeText(context, "0saving timeLeft to file", Toast.LENGTH_LONG).show();
        //Toast.makeText(myContext, "0saving timeLeft to file: " + hold, Toast.LENGTH_LONG).show();
        //String action = intent.getAction();
/*
        //if(action != null && myContext != null) 
        if(action != null)
        {
            //if(myContext != null)
            {
                if (action.equals("my.action.saveTimeLeft"))
                {            
                    //hold = intent.getExtras().getString("extra");
                    long hold = Long.parseLong(intent.getExtras().getString("extra"));

                    //FileManager fileManager = new FileManager(context);
                    //fileManager.writeTimeLeft(hold);

                    Toast.makeText(context, "1saving timeLeft to file: " + hold, Toast.LENGTH_LONG).show();
                }
            }
        }
        */
    }
}
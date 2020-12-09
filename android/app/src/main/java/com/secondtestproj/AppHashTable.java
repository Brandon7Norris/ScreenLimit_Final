package com.secondtestproj;

import java.util.Hashtable;

import android.content.pm.PackageManager;
import android.content.pm.ApplicationInfo;

public class AppHashTable
{
    Hashtable appHashTable = new Hashtable();

    public void putAppsInTable(String p)
    {
        appHashTable.clear();

        String[] holdString = p.split(";");

        for(int i = 0; i < holdString.length;i++)
        {
            appHashTable.put(holdString[i], 1);
        }
    }
    
    public boolean isAppInTable(String p)
    {

        if(appHashTable.containsKey(p) == true)
        {return true;}
        else
        {return false;}

    }

    public void getAllInstalledApps()
    {
        /*
        PackageManager pm = getPackageManager();
        List<ApplicationInfo> apps = pm.getInstalledApplications(0);
    
        ApplicationInfo p = new ApplicationInfo();
        List<ApplicationInfo> installedApps = new ArrayList<ApplicationInfo>();
    
        for(ApplicationInfo app : 
        apps) {
    
            installedApps.add(app);
        }
        */


    }

    public int getSize()
    {return appHashTable.size();}

}
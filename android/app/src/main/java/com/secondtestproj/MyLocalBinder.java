package com.secondtestproj;

import android.os.Binder;
import android.os.IBinder;

public class MyLocalBinder extends Binder
{
    YourService yourService;
    MyLocalBinder(YourService p)
    {
        yourService = p;
    }

    YourService getService()
    {
        return yourService;
    }

}
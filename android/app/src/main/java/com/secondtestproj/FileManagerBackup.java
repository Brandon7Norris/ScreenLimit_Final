package com.secondtestproj;

import android.widget.Toast;
import android.content.Context;

public class FileManagerBackup
{

    FileManagerBackup(Context p)
    {}

    public boolean doesFileExist()
    {return true;}

    public long readUserSetTime()
    {return 500000;}

    public void writeUserSetTime(long p)
    {return;}

    public boolean isUserSetTimeWritten()
    {return true;}

    public long readTimeLeft()
    {return 500000;}

    public void writeTimeLeft(long p)
    {return;}

    public boolean isTimeLeftWritten()
    {return true;}

    public int readUserId()
    {return 11111;}

    public void writeUserId(int p)
    {return;}

    public boolean isUserIDWritten()
    {return true;}

    public String readAppString()
    {return "com.google.android.youtube;bebus;weebus";}

    public void writeAppString(String p)
    {return;}

    public boolean isAppStringWritten()
    {return true;}

    public String readGuiltMessage1()
    {return "did you vote yet";}

    public void writeGuiltMessage1(String p)
    {return;}

    public boolean isGuilt1Written()
    {return true;}

    public String readGuiltMessage2()
    {return "seriously dude I need you to vote";}

    public void writeGuiltMessage2(String p)
    {return;}

    public boolean isGuilt2Written()
    {return true;}

    public String readGuiltMessage3()
    {return "I don't want to lose my healthcare please god vote";}

    public void writeGuiltMessage3(String p)
    {return;}

    public boolean isGuilt3Written()
    {return true;}

    public int readUserMethod()
    {return 0;}

    public void writeUserMethod(int p)
    {return;}

    public boolean isUserMethodWritten()
    {return true;}

    public Boolean isNewDay() //if date is not written then write new day and return false
    {return false;}

}
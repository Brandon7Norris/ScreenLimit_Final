package com.secondtestproj;

import android.content.Context;
import android.content.SharedPreferences;
import android.icu.text.SimpleDateFormat;

import java.text.ParseException;
import java.util.Calendar;

import static android.content.Context.MODE_PRIVATE;

public class FileManager
{
    public static final String SHARED_PREFS = "sharedPrefs";

    //Shared-Preference Fields
    public static final String USER_SET_TIME = "userSetTime";
    public static final String TIME_LEFT = "timeLeft";
    public static final String USER_ID = "userID";
    public static final String APP_STRING = "appString";
    public static final String GUILT_MESSAGE_1 = "guiltMessage1";
    public static final String GUILT_MESSAGE_2 = "guiltMessage2";
    public static final String GUILT_MESSAGE_3 = "guiltMessage3";
    public static final String USER_METHOD = "userMethod";
    public static final String DATE_LAST_WRITTEN = "dateLastWritten";
    public static final String TRIAL_START = "trialStart";

    //Default values to check if fields are written to.
    private static final int DEFAULT_INT = -500000;
    private static final String DEFAULT_STRING = "DEFAULT_STRING";

    private static Context context;

    public FileManager(Context context) {
        this.context = context;
    }

    public boolean doesFileExist()
    {return true;}

    private long readLong(String key) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        return sharedPreferences.getLong(key, 0);
    }

    private int readInt(String key) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        return sharedPreferences.getInt(key, 0);
    }

    private String readString(String key) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        return sharedPreferences.getString(key, "");
    }

    private void write(String key, long p) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putLong(key, p);
        editor.apply();
    }

    private void write(String key, int p) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putInt(key, p);
        editor.apply();
    }

    private void write(String key, String p) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(key, p);
        editor.apply();
    }

    private boolean isLongWritten(String key) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        if (sharedPreferences.getLong(key, (long)DEFAULT_INT) == (long)DEFAULT_INT) {
            return false;
        } else {
            return true;
        }
    }

    private boolean isIntWritten(String key) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        if (sharedPreferences.getInt(key, DEFAULT_INT) == DEFAULT_INT) {
            return false;
        } else {
            return true;
        }
    }

    private boolean isStringWritten(String key) {
        SharedPreferences sharedPreferences = context.getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        if (sharedPreferences.getString(key, DEFAULT_STRING) == DEFAULT_STRING) {
            return false;
        } else {
            return true;
        }
    }

    public long readUserSetTime()
    {return readLong(USER_SET_TIME);}

    public void writeUserSetTime(long p)
    {write(USER_SET_TIME, p);}

    public boolean isUserSetTimeWritten()
    {return isLongWritten(USER_SET_TIME);}

    public long readTimeLeft()
    {return readLong(TIME_LEFT);}

    public void writeTimeLeft(long p)
    {write(TIME_LEFT, p);}

    public boolean isTimeLeftWritten()
    {return isLongWritten(TIME_LEFT);}

    public String readUserId()
    //{return readInt(USER_ID);}
    {return readString(USER_ID);}

    public void writeUserId(String p)
    //public void writeUserId(int p)
    {write(USER_ID, p);}

    public boolean isUserIDWritten()
    //{return isIntWritten(USER_ID);}
    //{return isStringWritten(USER_ID);}
    {return isStringWritten(USER_ID);}

    public String readAppString()
    {return readString(APP_STRING);}

    public void writeAppString(String p)
    {write(APP_STRING, p);}

    public boolean isAppStringWritten()
    {return isStringWritten(APP_STRING);}

    public String readGuiltMessage1()
    {return readString(GUILT_MESSAGE_1);}

    public void writeGuiltMessage1(String p)
    {write(GUILT_MESSAGE_1, p);}

    public boolean isGuilt1Written()
    {return isStringWritten(GUILT_MESSAGE_1);}

    public String readGuiltMessage2()
    {return readString(GUILT_MESSAGE_2);}

    public void writeGuiltMessage2(String p)
    {write(GUILT_MESSAGE_2, p);}

    public boolean isGuilt2Written()
    {return isStringWritten(GUILT_MESSAGE_2);}

    public String readGuiltMessage3()
    {return readString(GUILT_MESSAGE_3);}

    public void writeGuiltMessage3(String p)
    {write(GUILT_MESSAGE_3, p);}

    public boolean isGuilt3Written()
    {return isStringWritten(GUILT_MESSAGE_3);}

    public int readUserMethod()
    {return readInt(USER_METHOD);}

    public void writeUserMethod(int p)
    {write(USER_METHOD, p);}

    public boolean isUserMethodWritten()
    {return isIntWritten(USER_METHOD);}

    public long readTrialStart()
    {return readLong(TRIAL_START);}

    public void writeTrialStart(long p)
    {write(TRIAL_START, p);}

    public boolean isTrialStartWritten()
    {return isLongWritten(TRIAL_START);}

    public long readDateLastWritten()
    {
        return readLong(DATE_LAST_WRITTEN);
    }

    public void writeDateLastWritten(long p)
    {
        write(DATE_LAST_WRITTEN, p);
    }

    public boolean isDateLastWrittenWritten()
    {
        return isLongWritten(DATE_LAST_WRITTEN);
    }

    public boolean isNewDay()
    {
        if (isStringWritten(DATE_LAST_WRITTEN)) {
            SimpleDateFormat format = new SimpleDateFormat("dow mon dd hh:mm:ss zzz yyyy");
            try {
                if (Calendar.getInstance().getTime().after(format.parse(readString(DATE_LAST_WRITTEN)))) {
                    return true;
                }
            } catch (ParseException e) {
                e.printStackTrace();
            }
        }

        write(DATE_LAST_WRITTEN, Calendar.getInstance().getTime().toString());
        return false;   //Reached if date is not written, current date is not after written date, or an exception is caught.
    }
}
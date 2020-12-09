package com.secondtestproj;

import android.widget.Toast;
import android.content.Context;

import java.util.concurrent.ThreadLocalRandom;

public class MethodGuilt
{
    static String[] guiltMsgs = {
        "Have you worked on anything productive lately?", 
        "Have you cleaned up your home recently?", 
        "When was the last time you've done your dishes?"};

    MethodGuilt()
    {

    }

    public void setGuiltMsg1(String msg)
    {guiltMsgs[0] = msg;}

    public void setGuiltMsg2(String msg)
    {guiltMsgs[1] = msg;}

    public void setGuiltMsg3(String msg)
    {guiltMsgs[2] = msg;}

    public void printRandomGuiltMsg(Context context)
    {
        int randomNum = ThreadLocalRandom.
        current().
        nextInt(0, 
        guiltMsgs.length);
        //2);
        Toast.makeText(context, guiltMsgs[randomNum], Toast.LENGTH_LONG).show();
    }

}
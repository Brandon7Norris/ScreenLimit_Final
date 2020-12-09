package com.secondtestproj;

import android.media.Ringtone;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.VibrationEffect;
import android.os.Vibrator;
import android.widget.Toast;
import android.content.Context;

public class MethodStrict
{
    public void harassUser(Context context)
    {
        //Notify user
        Toast.makeText(context, "You are out of distraction app time for today!", Toast.LENGTH_LONG).show();

        //Vibrate
        Vibrator v = (Vibrator) context.getSystemService(Context.VIBRATOR_SERVICE);
        v.vibrate(VibrationEffect.createOneShot(500, VibrationEffect.DEFAULT_AMPLITUDE));

        //Make notification sound
        Uri notification = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        Ringtone r = RingtoneManager.getRingtone(context, notification);
        r.play();
    }
}
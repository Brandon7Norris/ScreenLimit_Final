package com.secondtestproj;

import com.facebook.react.ReactActivity;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;

//import com.google.android.material.floatingactionbutton.FloatingActionButton;
//import com.google.android.material.snackbar.Snackbar;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.provider.Settings;
import android.util.Log;
import android.view.View;

import android.view.Menu;
import android.view.MenuItem;

//public class MainActivity extends AppCompatActivity {
public class MyActivity extends ReactActivity {
    YourService myService;// = new YourService();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);		

        Intent i = new Intent(this, YourService.class);
        startService(i);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {

        }
        startActivity(new Intent(Settings.ACTION_USAGE_ACCESS_SETTINGS));
    }

  @Override
  protected String getMainComponentName() {
    return "newProj";
  }

  public void startMyService()
  {

  }
}
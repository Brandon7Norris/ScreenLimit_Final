package com.secondtestproj;

import android.widget.Toast;


import android.util.Log;
import android.content.Context;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import android.os.Handler;


import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class TimeSlice
{
    static String defaultValue = "5f8f7d2d1dba2312101e01b5";
    static String lastApp = "not assigned";
    static String userID = defaultValue;

    private Handler handler;

    public static final MediaType JSON
            = MediaType.parse("application/json; charset=utf-8");

    public JSONObject json;
    private String url;
    public Request request;
    OkHttpClient client;

    static long timeSlice;

    public TimeSlice()
    {
        defaultValue = "";
        lastApp = "not assigned";
        userID = "5f8f7d2d1dba2312101e01b5";
        timeSlice = 5;
        client = new OkHttpClient();   
    }

    public void checkIfIShouldSendTimeSlice(String currentApp, long deltaTime, Context context)
    {
        handler = new Handler(context.getMainLooper());
        //Toast.makeText(context, "1In POST " + lastApp + " " + currentApp, Toast.LENGTH_LONG).show();
        if(userID.equals("not assigned") == false)
        {
            //Toast.makeText(context, "Testing before POST @ Check", Toast.LENGTH_LONG).show();
            /*
            if ((userID.equals(null)) || (userID == defaultValue))
            {
                userID = getFromFile();
            }
            */
            
            if ((lastApp.equals("not assigned")) || (lastApp == null))
            {
                //Toast.makeText(context, "In CHECK1 " + lastApp + " " + currentApp, Toast.LENGTH_LONG).show();
            
                lastApp = currentApp;
                timeSlice = deltaTime;
                // should we sent the current timeslice for the current app?

            }

            else if (!(lastApp.equals(currentApp)))
            {
                //Toast.makeText(context, "In CHECK2 " + lastApp + " " + currentApp, Toast.LENGTH_LONG).show();
            
                //postSession(userID, currentApp.appName, currentApp.appType, timeSlice);
                
                try {
                    //postSession(userID, lastApp, "Social", timeSlice, context);
                    post(userID, lastApp, "Social", timeSlice, context);
                } catch (IOException e) {
                    e.printStackTrace();
                }
                
                lastApp = currentApp;
                timeSlice = deltaTime;
            }

            else
            {
                //Toast.makeText(context, "In CHECK3 " + lastApp + " " + currentApp, Toast.LENGTH_LONG).show();
            
                timeSlice += deltaTime; 

                if(timeSlice > 600000) //experimental stuff
                {
                    try {
                        //postSession(userID, lastApp, "Social", timeSlice, context);
                        post(userID, lastApp, "Social", timeSlice, context);
                    } catch (IOException e) {
                        e.printStackTrace();
                    }

                    lastApp = currentApp;
                    timeSlice = 0;
                }
            }
            
            //Toast.makeText(context, "2In POST " + lastApp + " " + currentApp, Toast.LENGTH_LONG).show();
        }
        else
        {Toast.makeText(context, "userID no send val ", Toast.LENGTH_LONG).show();}
        //return timeSlice;
    } // check

    public void setUserID(String sentID)
    {
        userID = sentID;
    }
    /**/







    public void getSession(String id) throws IOException {
        url = getSessionURLByID("5f8f7d2d1dba2312101e01b5");
        //url = "https://screenlimit-backend-api.herokuapp.com/api/session/get_sessions_by_userId?id=5f8f7d2d1dba2312101e01b5v";
        request = new Request.Builder()
                .url(url)
                .build();
    }




    public void postSession(String id, String appName, String appType, long slice, Context context) throws IOException {
        //json = makeSession("5f8f7d2d1dba2312101e01b5", "Social", "Discord", "1000");
        //json = makeSession("5f8f7d2d1dba2312101e01b5", "Social", "Discord", getTimeDelta() + ""); // an example
        json = makeSession(id, appType, appName,slice + ""); // + "" turns long into a string

        RequestBody body = RequestBody.create(JSON, json.toString());
        request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
        //Response response = client.newCall(request).execute();
        //Log.wtf("Response", response.body().string());
        //Toast.makeText(context, "Testing before POST", Toast.LENGTH_LONG).show();


        // POST TO BACKEND LINE IS HERE
        client.newCall(request);//.enqueue();//new Callback()); 
        /*{
            @Override
            public void onFailure(Call call, IOException e) {
                
                Toast.makeText(context, "No response received", Toast.LENGTH_LONG).show();
                e.printStackTrace();
            }
            
            @Override
            public void onResponse(Call call, Response response) throws IOException {
                if (response.isSuccessful()) {
                    final String myResponse = response.body().string();
                    
                    Toast.makeText(
                        context,
                        "Time resp: " + myResponse,
                        Toast.LENGTH_LONG)
                        .show();

                    //Log.wtf("response" ,myResponse);
                    //Log.wtf("finished", "Slicer Program has completed.");
                    /*TimeSliceSender.this.runOnUiThread(new Runnable() {
                        @Override
                        public void run() {
                            Log.wtf("response" ,myResponse);
                            Log.wtf("finished", "Program has completed.");
                            //mTextViewResult.setText(myResponse);
                        }
                    });*/
                    //Toast.makeText(context, "POST Launched Successfully", Toast.LENGTH_LONG).show();
            //    }
          //  }
        //});
    }

    void post(String id, String appName, String appType, long slice, Context context) throws IOException {
        //json = makeSession("5f8f7d2d1dba2312101e01b5", "JASOOOON", "WHHHHYYYY", timeSlice + "");
        json = makeSession(id, appType, appName,slice + "");
        RequestBody body = RequestBody.create(JSON, json.toString());
        Request request = new Request.Builder()
                .url(url)
                .post(body)
                .build();
        okhttp3.Call call = client.newCall(request);
        call.enqueue(new Callback() {
            @Override
            public void onFailure(  okhttp3.Call call,  IOException e) {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        //Handle UI here                        
                        // Toast anything you like here//
                        Toast.makeText(context, "POST Launch Failed", Toast.LENGTH_LONG).show();
                    }
                });
            }

            @Override
            public void onResponse( okhttp3.Call call,  Response response) throws IOException {
                runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        //Handle UI here                        
                        //happy on Response Toast here   
                        //Toast.makeText(context, "POST Launched Successfully", Toast.LENGTH_LONG).show();
                    }
                });
            }
        });
    }

    private void runOnUiThread(Runnable r)
    {
        handler.post(r);
    }

    public JSONObject makeSession(String id, String appType, String appName, String timeDelta)
    {
        url = "https://screenlimit-backend-api.herokuapp.com/api/session/create_session";
        JSONObject json = new JSONObject();
        try
        {
            json.put("id", id);
            json.put("app_type", appType);
            json.put("app_name", appName);
            json.put("time_delta", timeDelta);
            //json.put("time_begin", "100");
            //json.put("time_end", "230");
        } catch (JSONException e)
        {
            e.printStackTrace();
        }
        return json;
    }


    public String getSessionURLByID(String id)
    {
        HttpUrl.Builder urlBuilder =
                HttpUrl.parse("https://screenlimit-backend-api.herokuapp.com/api/session/get_sessions_by_userId").newBuilder();
        //urlBuilder.addQueryParameter("v", "1.0");
        urlBuilder.addQueryParameter("id", id);
        //url = urlBuilder.build().toString();
        return urlBuilder.build().toString();

    }
/*
    public long getTimeDelta() // for testing
    {
        long timeDelta;
        TimeSlice slicey = new TimeSlice();
        String current = "Youtube";
        // app is moved from default to Youtube
        long timeSlice = 420;
        timeDelta = slicey.check(current, timeSlice);
        // timeDelta still at 0
        // make if statement to send POST if timeDelta > 0
        String next = "Instagram";
        current = next;
        timeSlice = 200;
        timeDelta = slicey.check(current, timeSlice);
        // 420 should be returned, 200 current timeSlice for current app
        return timeDelta;
    }*/
} // class TimeSlice

# 2019-Phase-1

## Introduction
This ReadMe outlines how you should proceed with the Serverless programming mini-project that you will be required to complete for phase 1.

Serverless programming is a cloud computing model where you do not have to manage a server or any resources handled by your application. All of this is handled by the cloud computing provider, in this case Microsoft Azure. You will learn a brief introduction to serverless programming and Twilio in this guide. We will be creating 1. A function application, 2. Integrating with twilio. The app will send periodic reminders to your phone for any task you want to complete.

## Part 1 - Creating a function app

Firstly, click on create a new resources on the navigation panel. From here search "Function App" and press create. Enter a name for your app and change your runtime stack to JavaScript. Leave the rest of the resources as the default. Now head over to your Function Apps which you can find on the navigation panel. Here you will see your function app and all of the functions beneath it like this image. You then want to click the "+" symbol and create a new function.

Inline-style: 
![alt text](https://docs.microsoft.com/en-us/azure/azure-functions/media/functions-create-scheduled-function/function-app-quickstart-choose-portal.png "Where to create a function")

Here click on the "in portal" setting so that you can edit your functions in the portal. Although you can also choose the other two, we will be using the in portal setting in this tutorial. Next, you want to choose the timer setting and then choose the schedule you want it to run on. The schedule runs on a "Cron" expression which you can learn more about here.

https://en.wikipedia.org/wiki/Cron#CRON_expression

You can also use this tool to generate your very own cron expressions
https://www.freeformatter.com/cron-expression-generator-quartz.html

For the purpose of this tutorial, i'll be using a 5 minute cron expression.

Congratulations! You have just created an Azure Function.

Your default code should look something like this.

```
module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);   
};
```

Now you can see it checks the myTimer state to see if it has passed the timer you want to edit it on. you can change the settings of your schedule inside the ``` functions.json``` file which you can find under the "View files" button on the right hand side of your screen inside the azure portal.

## Part 2 - Twilio Integration

Twilio is a telephony service that you can use to send text messages. Twilio does cost money to use, but they provide a free trial with $15 of credit which will be plenty for our tutorial.

Create an account on https://twilio.com and register for a free trial. Here you want to generate a new trial phone number, get an API key and a passcode. 

### Installing twilio on your Azure Function

You now need to install twilio on your azure function, this is a little tricky as we are doing all of the development in the portal. You will have to navigate to Kudu from your function and install it there.

You can do this by 
1. Clicking on your function
2. Clicking on Platform Features on the tab right next to overview
3. Clicking on Advanced Tools (kudu)

Now what we want to do is go into Debug Console -> CMD.

Wait for all of your files to load, and then navigate down this hierarchy.
Site -> wwwroot -> {YourFunctionName}

What you're going to do now is type in "npm install twilio" inside your command line.
This might take some time to download but be patient.
You can find that this is successful when your "Dependencies" inside package.json looks like this (This can also be found inside the view files tab)

```
  "dependencies": {
    "twilio": "^3.0.0"
  }
  ```
  
  If this does not work, you can create a package.json file manually, add the following lines, and run ```npm install```:
  ```
  {
  "name": "the-name-of-your-trigger-function",
  "version": "1.0.0",
  "description": "Receive SMS with Azure Functions and Node.js",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Twilio",
  "license": "MIT",
  "dependencies": {
    "twilio": "^3.0.0"
  }
}

  ```
  Great! Now we can start the fun stuff.
  
  ## Coding your function app.
  
I will be setting up a basic timer to send me reminders to keep my posture up, but I recommend you pull data from an API and send yourself updates periodically about whatever you want to know.

First we want to create variables to store our API Key and Token which you will have recieved from Twilio
```
const accountSid = 'Your API Key here';
const authToken = 'Your Token here';
```

Now we will need the twilio API to actually send messages from.

```
const client = require('twilio')(accountSid, authToken);
```
This line will allow you to use the twilio API with the variable client.

To create a message, we will be using the ``` client.messages.create()``` function

```
   client.messages.create({
        to: 'Your Number Here',
        from: 'Your Twilio Mobile Number Here',
        body:'Just a 5 minute reminder to keep your posture up'
    });
```

Once you have completed this, your code should look similar to this

```

const accountSid = 'ACb158e9b67fff938b34509fdf0c79bd2a';
const authToken = '30f8abaa03ee2fdf98016a750135baee';

const client = require('twilio')(accountSid, authToken);


module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if(myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    client.messages.create({
        to: 'Your Number Here',
        from: 'Your Twilio Mobile Number Here',
        body:'Just a 5 minute reminder to keep your posture up'
    })

};
```
Just something to keep in mind, you can only send your own number reminders from the Twilio trial, you will have to pay money if you want to send reminders to others!

Now you have completed your scheduled function app to send yourself messages!

## Assignment
For your assignment, you will need to complete a similar task except you will have to pull information from an API of your choice, and then send yourself scheduled text messages with the information gathered from the API. 

You will need to have your code available on GitHub, and also complete these three Microsoft Learn videos. You will have to submit your screenshots along with your code in the submission portal that we will provide to you.

### Learn videos
1. Create serverless logic with Azure Functions
2. Execute an Azure Function with triggers
3. Chain Azure functions together using input and output bindings

Can be found here: https://docs.microsoft.com/en-us/learn/paths/create-serverless-applications/

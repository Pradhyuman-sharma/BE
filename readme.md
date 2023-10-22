Hey! Hope you all doing well this is the backend REST API for wysa sleep form assignent.

>I have made all the screen and their updating apis.
>Also please the change the base url in axios config file in front-end part to connect is with backend(your local free port)
else everything is fine !!!
>In case of database not getting connect please run mongoDb instance in your local and change the connection string to your local instance.

>All the routes of sleep form are protected with jwt authentication please make sure to provide token in header like 'access-token:value'
while hitting the routes with postman.

>Also please read my comments on code. And I used typescript for best clean and bugfree code.

## 1. Install dependencies and devDependencies

1.1 Install dependencies

```
npm i
```

## 2. Then start the server 
```
npm start
```
>Simple, if every thing goes right you will see connection logs in your terminal and in case DB log is failing just read the above note.

## That’s all.
> Open postman and hit the end points . If you are running frontEnd too then make sure the request are coming to this URL you can check that is config file ,base url of axios.

## End Points
>Postman collection is in the folder. Import it and hit the endpoints easily.

```POST
http://localhost:8000/api/auth/register
body--> {
    "uniqueName":"any",
    "password":"any"
}
```
```POST
http://localhost:8000/api/auth/login
body--> {
    "uniqueName":"any",
    "password":"any"
}
```

```POST
http://localhost:8000/api/sleepForm/update
body--> {
"updateValue":{
    "sleepingWellChanges" :["new approach"],
    "formStep":"1"
}
}
```

```POST
http://localhost:8000/api/sleepForm/update
body--> {
   "updateValue":{ 
       "strugglingInSleep":{
       "weeks":{
        "from":"0",
        "to":"3"
    }}  ,
    "formStep":"2"
     }
}
```
```POST
http://localhost:8000/api/sleepForm/update
body--> {
    "updateValue":{
    "bedTime":"2:20:37 AM",
    "formStep":"3"

    }
}
```
```POST
http://localhost:8000/api/sleepForm/update
body-->{
    "updateValue":{
    "wakeUpTime":"2:20:37 AM",
    "formStep":"4"

    }
}
```
```POST
http://localhost:8000/api/sleepForm/update
body-->{
    "updateValue":{
    "sleepDuration":"8",
    "formStep":"5"

    }
}
```
```GET
http://localhost:8000/api/sleepForm/getFormData
```
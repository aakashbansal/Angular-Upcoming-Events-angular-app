# Angular-Upcoming-Events-angular-app
The given repository contains project code for the **Pluralsight** course **Angular Fundamentals** by **Joe Eames** and **Jim Cooper**.

## Project Setup

The following project requires **Node.Js** and **NPM** to be pre-installed and the necessary path variables for **Node** and **NPM** should also be set-up already.

Open the terminal/command-line :

```
$ cd \<required-directory>
$ git clone https://github.com/aakashbansal/Angular-Upcoming-Events-angular-app.git
$ cd \Angular-Upcoming-Events-angular-app
$ npm install
$ npm start
```

This starts the local server. Now open the web browser and go to **http://localhost:8808/** to view the app.

## Overview

The given angular app displays **Upcoming Angular Events**. The user can create his own **Angular Events** and can also view the upcoming or existing ones.

Each **Angular Event** has many **Sessions** associated with it that can be viewed by going to the respected **Event**. These sessions can be
**filtered** by **Level** ( Beginner, Intermediate, Advanced) 
and **sorted** by **Name** or **Votes**.

**Sessions** can also be searched in **Search Sessions** search-box;

The app also has a login functionality. Currently, app supports only **4 Users** - **johnpapa, bradgreen, igorminar, martinfowler**. Creating new user functionality is not yet added. Only after logging in, the user can **Like** a particular session.

All this data - **Users, Events, Sessions** is **NOT** stored permanently on any **DB** and is only locally stored in the **Node** server. So, except for the initial **Hard-coded** data, everything will get lost the next time server is restarted.




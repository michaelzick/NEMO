Setup Instructions
==================

The OpenShift-hosted project is at [http://seon-zickonezero.rhcloud.com/](http://seon-zickonezero.rhcloud.com/).

Instructions are for OS X Mountain Lion, but will probably work across most versions of OS X.

Initial setup
-------------

First, create an [OpenShift](https://www.openshift.com/) account if you haven't done so.

Then create a Node.JS app, and use this Git source link (https or ssh) to directly import the code into your app.

Next, add two cartridges: MySQL and phpMyAdmin.

Finally, use Git commands in Terminal or use a Git management app (SourceTree, Tower, etc) to pull the repository to your local machine.

Installing Node and other components
------------------------------------

Go to [nodejs.org](http://nodejs.org/) and download the package for OS X.

After you've installed Node, open up Terminal and install Supervisor, the file-watching app:

`$ sudo npm install supervisor -g`

This installs Supervisor into "/usr/local/bin/", and is available globally.

Seting up the database
----------------------

I've included an SQL file called "sampledatabase.sql" in "your_app_name/db/".

Open up the phpMyAdmin for your OpenShift app and import this SQL file. It will appear as "classicmodels".

Running the app
---------------

In Terminal, go to your project root:

`$ cd your_app_name/`

Make sure you're in the directory where "server.js" lives.

Run the command:

`$ supervisor server.js`

The last line of the console output should be "Express server listening on port undefined".

In your browser, go to [http://127.0.0.1:8080/](http://127.0.0.1:8080/) and see your project!

Legal
-----

All code, apps, packages, databases, files and text are free to use, distribute and modify under the open source licenses of their respective creators. For more information, visit the creator's sites directly.
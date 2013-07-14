Node.js on OpenShift
====================

This git repository helps you get up and running quickly w/ a node.js installation
on OpenShift. 
 
Running on OpenShift
----------------------------

Create an account at http://www.openshift.com/

Create a nodejs-0.6 application (you can call your application whatever you want)

    rhc create-app mynodejs nodejs-0.6 --from-code=https://github.com/openshift/nodejs-example.git

That's it, you can now checkout your application at:

    http://mynodejs-$yournamespace.rhcloud.com


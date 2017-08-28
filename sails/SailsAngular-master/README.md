# skeleton for angular2 + bootstrap
This skeleton is suitable for both those who want to use only angular (2 or 4) + bootstrap

Both for those who want to use Sails, the most popular MVC framework for Node.js

# Angular 4 crud example using Node JS REST API

<img width="788" src="https://raw.githubusercontent.com/Giancarlo1974/SailsAngular/master/assets/images/demo.png" />

This skeleton also contains an example of integration between Sails Api and Angular 4

# First installation (Production)

Open Command Prompt to Execute Commands

If you have any errors, see the section "Typical errors" at the bottom of the page

`cd /` ( on Linux `cd /root/` )

`git clone https://github.com/Giancarlo1974/SailsAngular.git SingleAppPage` (It clones the project)

`cd SingleAppPage` (It changes the current working directory in the project folder)

`npm install` (It installs the libraries)

`ng build --aot --prod` (It compiles the angular files in ./dist folder For errors see bottom of the page)

`node app.js` (It launch the node web server. Optional: If you want only Angular, skip this step.)

All done. Open your favorite browser to see the demo. If you are using Node JS as Web Server, you must connect to the address: http://localhost:1337/


# Development
`ng serve` -> run angular client http://localhost:4200

`node app.js` (optional for node js server) -> run server node http://localhost:1337/ + Grunt Task Automation + Database

## To create a new angular component:
`ng generate component nomeComponente`

## To create a new angular service:
`ng generate service nomeServizio`

## To create a new sails controller:
`sails generate controller nomeController`

# Bootstrap 4
It's uses css ( .angular-cli.json file )

"styles": [

  "style.css"

  "./xxxxxxxx.css"

]

and javascript see /src/index.html file

See these bootstrap components

http://valor-software.com/ngx-bootstrap/#/



# Node JS (Optional)
This part is optional: it is only for those who want to use a Node Server.

Sails is the most popular MVC framework for Node.js, designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture.

Here you can read some of its features

http://sailsjs.com/

Sails.js is one of the best MVC framework and can help you to rapidly develop web applications. For those who don’t want to reinvent the wheel like we do in the MEAN stack, Sails is a great option.

# Database
You can choose the most popular databases (Postgres, Oracle, and MySQL, MongoDB, Redis, Oracle, Microsoft SQL Server, etc)

https://www.npmjs.com/search?q=sails%20adapter&page=1&ranking=optimal

see \config\connectios.js for configuration



# API
To create new api, for example http://localhost:1337/employee launch this command:

sails generate api Employee

See the files:

/api/models/Employee.js

/api/controllers/EmployeeController.js

## to create new record
http://localhost:1337/employee/create?fullname=a&emailid=xyz@abc.com&phonenumber=1234

## to get the list
http://localhost:1337/employee/

http://localhost:1337/employee/?limit=1

http://localhost:1337/employee/?limit=10&sort=emailid%20desc

## to update
http://localhost:1337/employee/update/1?fullname=ciccio&emailid=abc@abc.com

## For more information, see this tutorial

https://www.youtube.com/watch?v=GK-tFvpIR7c

# Typical errors
## ng command not found
`npm install -g @angular/cli`

( I recommend @  it's install angular 4)

`ng -v`

## Angular doesn't compile the project

On Linux you may encounter some problems. Try uninstalling version 4 and install the 2

`sudo npm uninstall -g @angular/cli`

`npm cache clean`

`sudo npm install -g angular/cli`

## EADDRINUSE Is something else already running on port 1337 ?

type this command for change port

`set PORT=8081`

And then try to run the server again

`node app.js`

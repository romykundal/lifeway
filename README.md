
Module or packages should be install in system  as below:

  npm
  nvm
  node 

  Browserify
  Gulp

Install Node

You can download Node from here. Once installed, open Terminal and type:
  
[Node.js](http://www.nodejs.org/)

Create app 

Now we will make an empty directory and create a package.json file. I will assume this directory is on the Desktop:

cd ~/Desktop
  mkdir angular_gulp_app
  cd angular_gulp_app
  npm init

Gulp Installing

  npm install gulp --save-dev

Should install Gulp plugins , Now run command

  npm install gulp-connect --save-dev

Than let’s install a package that compiles .sass files into CSS:
Command run Now:

  npm install gulp-ruby-sass --save-dev

  npm install --save-dev browserify vinyl-source-stream 

  npm install --save angular

  gulp browserify


/*******************Now run the task from terminal***********************/
Run app with run command in root of project

  gulp connect

  


